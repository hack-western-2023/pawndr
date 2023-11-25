from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient

app = FastAPI()


client = AsyncIOMotorClient('mongodb+srv://Admin:hackwestern@cluster0.v52qzqz.mongodb.net/')
db = client.your_database_name

@app.get("/users/{user_id}")
async def read_user(user_id: str):
    user = await db.users.find_one({"_id": user_id})
    if user:
        return user
    return {"error": "User not found"}