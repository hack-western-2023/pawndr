from fastapi import FastAPI
# from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
from pydantic import BaseModel, Field
from typing import Optional
import os
import messaging

class User(BaseModel):
    gender: str
    password: str
    phoneNumber: str
    name: str
    pronouns: str
    preferredTimeOfDay: str

class LoginRequest(BaseModel):
    phoneNumber: str
    password: str


load_dotenv()

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware
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
user_collection = db.user_collection

async def add_user(user: User):
    await user_collection.insert_one(user.dict())

async def get_user_by_phone(phone_number: str):
    return await user_collection.find_one({"phoneNumber": phone_number})

@app.get("/")
async def root():
    return {'message': 'roll stangs'}

@app.get("/users/{phone_number}")
async def read_user(phone_number: str):
    try:
        user = await get_user_by_phone(phone_number)
        if user:
            return user
        return {"error": "User not found"}
    except Exception as e:
        return {"error": str(e)}

@app.post("/signup")
async def signup(user: User):
    user.password = user.password # Ideally, you should hash the password
    await add_user(user)
    return {"message": "User created successfully"}

@app.post("/login")
async def login(request: LoginRequest):
    user = await get_user_by_phone(request.phoneNumber)
    if user and user["password"] == request.password:
        return {"message": "Login successful"}
    return {"message": "Invalid credentials"}

@app.get('/msg/bryson/{msg}')
async def message_bryson(msg: str):
    result = messaging.msg_bryson(msg)

    # return JSONResponse(str(result))
    return result.raw_response.json()
