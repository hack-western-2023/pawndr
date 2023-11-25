from infobip_channels.sms.channel import SMSChannel

BASE_URL = 'https://mmxdyw.api.infobip.com'
API_KEY = '020ae8b21255071eff0b8d6e0affa564-ff451a78-1793-4cb2-b4d4-1bb0b5a2053b'
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