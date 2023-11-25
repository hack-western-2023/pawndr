from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient

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