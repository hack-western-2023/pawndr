from dotenv import load_dotenv
import os
import requests

# Load environment variables from .env
load_dotenv()

def get_openai_response(query):
  # Set your OpenAI API key
  OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
  OPENAI_ENDPOINT = os.getenv("OPENAI_ENDPOINT")

  headers = {
    'Authorization': f'Bearer {OPENAI_API_KEY}',
    'Content-Type': 'application/json'
  }

  payload = {
    "model": "text-davinci-003",
    "prompt": query,
    'max_tokens': 1000,  # Customize this based on your requirements
    'temperature': 0.8
  }

  response = requests.post(OPENAI_ENDPOINT, headers=headers, json=payload)

  if response.status_code == 200:
    ans = response.json()['choices'][0]['text']
    ans = ans[2:]
    return ans
  else:
    return "Error"