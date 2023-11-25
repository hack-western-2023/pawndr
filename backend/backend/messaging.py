import os
from dotenv import load_dotenv

from infobip_channels.sms.channel import SMSChannel

load_dotenv()

BASE_URL = os.getenv('INFOBIP_URL')
API_KEY = os.getenv('INFOBIP_KEY')
RECIPIENT = '17789298780'

def msg_bryson(msg: str):
 # Initialize the SMS channel with your credentials.
    channel = SMSChannel.from_auth_params(
        {
            "base_url": BASE_URL,
            "api_key": API_KEY,
        }
    )

    # Send a message with the desired fields.
    sms_response = channel.send_sms_message(
        {
            "messages": [
                {
                    "destinations": [{"to": RECIPIENT}],
                    "text": f"Hello, from Python SDK! {msg}",
                }
            ]
        }
    )

    # Get delivery reports for the message. It may take a few seconds show the just-sent message.
    query_parameters = {"limit": 10}
    delivery_reports = channel.get_outbound_sms_delivery_reports(query_parameters)

    # See the delivery reports.
    return(delivery_reports)
