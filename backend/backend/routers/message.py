from fastapi import APIRouter

from backend import messaging

router = APIRouter()

@router.get('/bryson/{msg}')
async def message_bryson(msg: str):
    result = messaging.msg_bryson(msg)

    return result.raw_response.json()