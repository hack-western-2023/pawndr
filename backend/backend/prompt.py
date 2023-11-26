from backend import openai_query as o

# response_personality = " If I say goodbye, TTYL, or something similar, say goodbye back and stop. Otherwise, your message should be as if you are my friend named Pawn, but you are only listening and your responses should be phrased as a question. Never mention your own name in your responses."
response_personality = " If I say 'goodbye', 'see ya', or something similar, say goodbye back. You must not offer additional thoughts if I do this. Otherwise, your message should be as if you are my friend named Pawn, but you are actively listening. Never mention your own name in your responses."

def gen_first_message():
  prompt = 'generate a message to a user to ask about their day as if you are their friend, keep it to a singular question, and the response should just be similar to hello, hows your day, or hows it going, or what\'s up.'
  response = o.get_openai_response(prompt + response_personality)
  response = response.replace("\n", "")
  return response

def gen_next_message_reflect(context):
  prompt = 'given this conversation:\n' + context + "\n provide just the next response or question in a singular line to further them to reflect on their day. Whatever response you give, do not use the word Pawn"
  response = o.get_openai_response(prompt + response_personality)
  response = response.replace("\n", "")
  return response

def gen_next_message_gratitude(context):
  prompt = 'given this conversation:\n' + context + "\n provide just the next response or question in a singular line to further them to show gratitude through reflection"
  response = o.get_openai_response(prompt + response_personality)
  response = response.replace("\n", "")
  return response

def gen_sentiment_analysis(context):
  prompt = 'give me one word of the sentiment of this chat: \n' + context
  response = o.get_openai_response(prompt)
  return response

def gen_summary(context):
  prompt = 'give me a 50 word summary of the following chat but do not mention anything about the person named Pawn, and base this as a summary about the other person\'s response. This will be for the other person to reflect on what they said in this chat: \n' + context
  response = o.get_openai_response(prompt)
  response = response.replace("\n", "")
  return response