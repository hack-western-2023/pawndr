
from backend import db
import asyncio

async def clear_cluster():
  result = await db.message_collection.delete_many({})
  return result

if __name__ == '__main__':
  asyncio.run(clear_cluster())