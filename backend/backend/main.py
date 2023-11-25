from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient

app = FastAPI()

client = AsyncIOMotorClient('mongodb+srv://Admin:hackwestern@cluster0.v52qzqz.mongodb.net/')
db = client.your_database_name

@app.get("/")
def root():
    return {'message': 'roll stangs'}

@app.get("/users/{user_id}")
def read_user(user_id: str):
    user = db.users.find_one({"_id": user_id})
    if user:
        return user
    return {"error": "User not found"}