import openai
from dotenv import load_dotenv
import os
import requests

# Load environment variables from .env
load_dotenv()

def get_openai_response(query):
  # Set your OpenAI API key
  OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
  OPENAI_ENDPOINT = 'https://api.openai.com/v1/completions'

  headers = {
    'Authorization': f'Bearer {OPENAI_API_KEY}',
    'Content-Type': 'application/json'
  }

  payload = {
    "model": "text-davinci-003",
    'prompt': query,
    'max_tokens': 1000  # Customize this based on your requirements
  }

  response = requests.post(OPENAI_ENDPOINT, headers=headers, json=payload)

  if response.status_code == 200:
    return response.json()
  else:
    return response.choices[0].text.strip()

# Example usage
query = "What is the capital of France?"
result = get_openai_response(query)
print(result)
