from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import message, users

app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(message.router, prefix='/message')
app.include_router(users.router, prefix='/users')

@app.get("/")
async def root():
    return {'message': 'roll stangs'}
