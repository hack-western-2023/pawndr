import os
from dotenv import load_dotenv

from motor.motor_asyncio import AsyncIOMotorClient

load_dotenv()

mongodb_uri = os.getenv('MONGODB_URI')
client = AsyncIOMotorClient(mongodb_uri)
db = client.test
user_collection = db.user_collection
message_collection = db.message_collection
sentiment_summary_collection = db.sentiment_summary_collection