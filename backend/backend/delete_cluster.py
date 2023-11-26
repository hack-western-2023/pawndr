
from backend import db
import asyncio

async def clear_cluster():
  result = await db.message_collection.delete_many({})
  return result

asyncio.run(clear_cluster())