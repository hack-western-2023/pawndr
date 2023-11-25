from fastapi import APIRouter
from pydantic import BaseModel
from datetime import datetime, timedelta

from backend import messaging
from backend import db

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
    cursor = db.message_collection.find(query)
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

@router.get('/bryson/{msg}')
async def message_bryson(msg: str):
    result = messaging.msg_bryson(msg)

    return result.raw_response.json()