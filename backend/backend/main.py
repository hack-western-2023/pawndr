from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.routers import message, users, sentiment

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
app.include_router(sentiment.router, prefix='/sentiment')

@app.get("/")
async def root():
    return {'message': 'roll stangs'}
#test
