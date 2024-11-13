"Custom Email Sender"
A feature-rich web application for sending customized emails using data from Google Sheets or CSV files. It integrates with Email Service Providers (ESPs), supports email scheduling, and provides real-time tracking for sent emails.

Features:
Google Sheets Integration: Load email data directly from Google Sheets.
CSV File Support: Import email data from CSV files.
Custom Email Content: Customize email content dynamically using prompts.
Multiple Sending Options: Use personal email accounts or ESPs (like SendGrid, Mailgun).
Email Scheduling: Schedule emails to send at specific times with built-in throttling to avoid rate limits.
Real-Time Tracking: Monitor the status of sent emails.
Prerequisites
Before using this application, ensure the following prerequisites are met:

Node.js
Install Node.js (version 14.x or higher).
Download and install from Node.js official website.

Google Cloud API Key
Required for accessing Google Sheets and sending emails through Google API.

Set up a project in Google Cloud Console.
Enable the Google Sheets API and Gmail API.
Download the credentials JSON file.
Google Sheets Spreadsheet ID and Range

Create a Google Sheet for your email data.
Note the Spreadsheet ID and the range of cells containing your data.
ESP API Key (Optional)
If using an ESP like SendGrid or Mailgun, get an API key from the respective service.

Setup Instructions
1. Clone the Repository
Clone the repository to your local machine:
2. Install Dependencies
Run the following command to install required Node.js packages:

npm install
3. Environment Configuration
Create a .env file in the project root and add the following keys:

GOOGLE_API_KEY=<Your_Google_API_Key>
SPREADSHEET_ID=<Your_Google_Sheet_ID>
ESP_API_KEY=<Your_ESP_API_Key> # Optional if using ESP
FROM_EMAIL=<Your_Email_Address>
4. Build the Application
Build the application for production:

npm run build
5. Start the Application
To start the application, run:

npm start
Usage Instructions
Loading Data
Use the Google Sheets integration or upload a CSV file containing the email data.
Ensure the data has columns like Recipient Email, Subject, Body, etc.
Customizing Emails
Use prompts to dynamically generate content for each recipient.
Preview the email before sending.
Scheduling Emails
Set a specific date and time for sending emails.
Throttling ensures that emails are sent in batches to comply with rate limits.
Development
To run the application in development mode:

npm run dev
Deployment
You can deploy this app to a cloud platform like Google Cloud, Vercel, or Heroku. Follow the deployment instructions for your chosen platform.

Example: Deploying to Google Cloud
Install the Google Cloud SDK and authenticate:
gcloud auth login
Deploy the app:
gcloud app deploy
Access the app at https://<project-id>.appspot.com.
License
This project is licensed under the MIT License.
Contact:
For any questions or support, reach out to:
Sunku Achyuta Yeshwanth Kumar
GitHub: yeshwanthKumar-sa
