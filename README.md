# Pawndr

## Transform Your Daily Thoughts Into a Journey of Self-Discovery

Pawndr is an innovative SMS journaling app designed to make self-reflection simple, engaging, and seamlessly integrated into your daily life.

![image](https://github.com/user-attachments/assets/b913e28b-1446-404b-9368-d376960d54db)

### Screenshots
![gallery (3)](https://github.com/user-attachments/assets/c7fa1c82-447e-41f0-97d1-e525109e6eb7)
![image](https://github.com/user-attachments/assets/ffc1cda5-c2ef-46a6-a05e-61b3578f2c90)
![image](https://github.com/user-attachments/assets/edd6a03a-6581-4473-a252-cbd4c325139d)



### Features
- **Conversational Prompts:** Receive daily SMS prompts that inspire thoughtful reflection.
- **Easy Response Mechanism:** Simply reply to messages to record your journal entries.
- **Accessible Memory Lane:** Revisit past reflections through an easy-to-use web interface.
- **Organized Entries:** Your responses are beautifully organized, making it easy to track your personal growth.

## Inspiration

Journaling can be a powerful tool for personal growth but often feels daunting. We've designed Pawndr to overcome common barriers—like the pressure of perfection, consistency challenges, and the intimidation of a blank page—making journaling a more inviting and doable practice.

## How it Works

With Pawndr, you don't have to set aside special time for journaling. Our friendly SMS prompts reach you wherever you are. Your responses are then woven into a rich tapestry of self-discovery, accessible anytime through our web app.

## Technology Stack

- **Frontend:** React.js for a responsive, user-friendly interface.
- **Backend:** FastAPI for robust, scalable server-side functionality.
- **Database:** MongoDB for efficient data storage and retrieval.
- **Deployment:** Google Cloud VM with nginx and uvicorn for reliable hosting.
- **User Interaction:** Infobip API and OpenAI's GPT-3 and Whisper APIs for natural conversational interfaces.

## Installation and Setup

### Prerequisites
- Node.js (Version XYZ)
- Python (Version 3.X)
- MongoDB

### Setup Instructions
1. Clone the repository: `git clone [repository URL]`
2. Install Node.js dependencies: `npm install`
3. Set up a virtual environment for Python: `python -m venv venv`
4. Activate the virtual environment: 
   - On Windows: `.\venv\Scripts\activate`
   - On Unix or MacOS: `source venv/bin/activate`
5. Install Python dependencies: `pip install -r requirements.txt`
6. Start the MongoDB service.
7. Run the application: `npm start` for frontend, `uvicorn main:app --reload` for backend.

## Usage

After installation, access the web interface at `http://localhost:[port]`. To begin journaling, follow the on-screen prompts to connect your SMS service.

## Project Structure

- `/frontend`: Contains all React.js code for the user interface.
- `/backend`: FastAPI application code.
- `/models`: MongoDB data models.
- `/scripts`: Utility scripts for setup and deployment.

## Challenges & Triumphs

We faced regulatory challenges with Canadian SMS regulations but successfully pivoted to a WhatsApp interface. This adaptability and our ability to integrate end-to-end functionalities are our proudest accomplishments.

## Lessons Learned

Our journey taught us about cloud deployment, interfacing with various communication platforms, and the profound impact of journaling. We've gained insights into making journaling rewarding and accessible.

## Future Directions

We're looking to expand our platform to include more channels like Messenger, WeChat, and others. Additionally, we aim to enhance our app with comprehensive sentiment analysis and mood trend visualization.

## Contact

- **Bryson Wu** - Developer - [Email](mailto:brysonwu@student.ubc.ca)
- **Omar Bakr** - Developer - [Email](mailto:1bakromar@gmail.com)
- **Jason Tang** - Developer - [Email](mailto:shuaihangtang@gmail.com)
- **Kitty Liu** - Designer & Developer - [Email](mailto:kittyliu113@gmail.com)
