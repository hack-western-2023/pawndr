from fastapi import APIRouter
from pydantic import BaseModel
from datetime import datetime, timedelta

from backend import messaging
from backend import db
from backend.routers import users
from backend import prompt

router = APIRouter()

class Message(BaseModel):
    sender: str
    content: str
    time: datetime
    phoneNumber: str

async def get_messages_from_day_by_phone(phone_number: str, target_date: datetime):
    start_of_day = datetime.combine(target_date.date(), datetime.min.time())
    end_of_day = datetime.combine(target_date.date() + timedelta(days=1), datetime.min.time())
    
    # Construct the query to find messages for the specified phone number and from the specified date onwards
    query = {
        "phoneNumber": phone_number,
        "time": {"$gte": start_of_day, "$lt": end_of_day}
    }

    # Retrieve and return all messages matching the criteria
    cursor = db.message_collection.find(query).sort("time", 1)
    messages = await cursor.to_list(length=None)
    return messages

async def get_messages_today_by_phone(phone_number: str):
    # Get the current date and time
    today = datetime.utcnow().replace(hour=0, minute=0, second=0, microsecond=0)
    today_messages = await get_messages_from_day_by_phone(phone_number, today)
    return today_messages
    
def parse_messages_for_openai(messages):
    formatted_messages = []

    for message in messages:
        formatted_message = f"{message['sender']}: {message['content']}"
        formatted_messages.append(formatted_message)

    formatted_messages_str = '\n'.join(formatted_messages)
    return formatted_messages_str

async def upload_message(id, sender, content, phoneNumber):
    new_message = {'id': id, 'sender': sender, 'content': content, 'time': datetime.utcnow(), 'phoneNumber': phoneNumber}
    
    # Insert the new message into the 'message_collection'
    result = await db.message_collection.insert_one(new_message)

@router.get('/bryson/{msg}')
async def message_bryson(msg: str):
    result = messaging.msg_bryson(msg)

    return result.raw_response.json()

@router.post('/inbox')
async def message_inbox(msg: dict):
    print(msg)

    msg_type = msg['results'][0]['message']['type']

    if msg_type == 'AUDIO':
        message = messaging.transcribe_audio(msg)
    else:
        message = msg['results'][0]['message']['text']

    phoneNumber = msg['results'][0]['from']
    _id = msg['results'][0]['messageId']

    sender = await users.get_user_by_phone(phoneNumber)
    sender = sender['name']

    await upload_message(_id, sender, message, phoneNumber)
    
    if await db.message_collection.find_one({'_id': _id}):
        pass
    else:
        convo = await get_messages_today_by_phone(phoneNumber)
        convo = parse_messages_for_openai(convo)
        new_message = prompt.gen_next_message_reflect(convo)

        await upload_message(_id + 'pawn', 'Pawn', new_message, phoneNumber)
        
        # result = messaging.msg_bryson(new_message)
        result = messaging.whatsapp_bryson(new_message)
        return result.raw_response.json()


class dateInput(BaseModel):
    date:datetime

@router.post('/{phoneNumber}')
async def return_chat_log(phoneNumber:str, date_input: dateInput):
    chat = await get_messages_from_day_by_phone(phoneNumber, date_input.date)
    chat = parse_messages_for_openai(chat)
    return {'chat': chat}