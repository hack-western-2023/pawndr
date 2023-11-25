from pydantic import BaseModel
from datetime import datetime, timedelta

from backend import db

class SentimentSummary(BaseModel):
  sentiment: str
  summary: str
  time: datetime
  phoneNumber: str

async def upload_sentiment(sentiment, summary, phoneNumber):
  new_sentiment = {'sentiment': sentiment, 'summary': summary, 'time': datetime.utcnow(), 'phoneNumber': phoneNumber}
    
  # Insert the new message into the 'message_collection'
  result = await db.sentiment_summary_collection.insert_one(new_sentiment)


async def get_sentiment_from_day_by_phone(phone_number: str, target_date: datetime):
  start_of_day = datetime.combine(target_date.date(), datetime.min.time())
  end_of_day = datetime.combine(target_date.date() + timedelta(days=1), datetime.min.time())

  # Construct the query to find messages for the specified phone number and from the specified date onwards
  query = {
    "phoneNumber": phone_number,
    "time": {"$gte": start_of_day, "$lt": end_of_day}
  }

  # Retrieve and return all messages matching the criteria
  cursor = db.sentiment_summary_collection.find(query)
  sentiment = await cursor.to_list(length=None)
  return sentiment

# Example usage
async def main():
  await upload_sentiment("sad", "today was bare sad innit", "2894007386")
  messages = await get_sentiment_from_day_by_phone("2894007386", datetime.utcnow())
  print(messages)
    

# Run the main function
if __name__ == "__main__":
    import asyncio

    # Run the asynchronous main function
    asyncio.run(main())