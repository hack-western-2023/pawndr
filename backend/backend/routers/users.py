from fastapi import APIRouter
from pydantic import BaseModel

from backend import db

router = APIRouter()

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

async def add_user(user: User):
    await db.user_collection.insert_one(user.dict())

async def get_user_by_phone(phone_number: str):
    return await db.user_collection.find_one({"phoneNumber": phone_number})

@router.get("/{phone_number}")
async def read_user(phone_number: str):
    try:
        user = await get_user_by_phone(phone_number)
        if user:
            return user
        return {"error": "User not found"}
    except Exception as e:
        return {"error": str(e)}

@router.post("/signup")
async def signup(user: User):
    user.password = user.password # Ideally, you should hash the password
    await add_user(user)
    return {"message": "User created successfully"}

@router.post("/login")
async def login(request: LoginRequest):
    user = await get_user_by_phone(request.phoneNumber)
    if user and user["password"] == request.password:
        return {"message": "Login successful"}
    return {"message": "Invalid credentials"}