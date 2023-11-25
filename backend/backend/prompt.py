import openai_query as o

response_personality = " your message should be as if you are a friend, but you are just listening, and should be phrased as a question"

def gen_first_message():
  prompt = 'generate a message to a user to ask about their day as if you are their friend, keep it to a singular question, and the response should just be similar to hello, hows your day, or hows it going, or what\'s up.'
  response = o.get_openai_response(prompt + response_personality)
  return response

def gen_next_message_reflect(context):
  prompt = 'given this conversation:\n' + context + "\n provide just the next response or question in a singular line without any extra blank lines to further them to reflect on their day."
  response = o.get_openai_response(prompt + response_personality)
  return response

def gen_next_message_gratitude(context):
  prompt = 'given this conversation:\n' + context + "\n provide just the next response or question in a singular line to further them to show gratitude through reflection"
  response = o.get_openai_response(prompt + response_personality)
  return response