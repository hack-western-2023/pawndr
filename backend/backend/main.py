from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
import os

load_dotenv()
import messaging

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware
# Allow all origins in this example (you may want to restrict this in production)
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

mongodb_uri = os.getenv('MONGODB_URI')
client = AsyncIOMotorClient(mongodb_uri)
db = client.test

@app.get("/")
async def root():
    return {'message': 'roll stangs'}

@app.get("/users/{user_id}")
async def read_user(user_id: str):
    try:
        user = await db.test.find_one({"_id": user_id})
        if user:
            return user
        return {"error": "User not found"}
    except Exception as e:
        return {"error": str(e)}
