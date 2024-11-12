 "custom-email-sender"
A web app for sending customized emails using Google Sheets or CSV. Integrate with ESPs, schedule emails, and track sending status in real time. 
#Custom Email Sender

This application allows you to send personalized emails by integrating with Google Sheets for email data, customizable prompts, and scheduling options. It supports both personal and ESP (Email Service Provider) accounts for sending emails.

## Features
- Load email data from Google Sheets.
- Customize email content using a prompt.
- Send emails using either personal email accounts or ESP accounts.
- Schedule emails and manage throttling.

## Prerequisites

Before you can use this application, ensure you have the following:

1. **Node.js** installed on your machine (version 14.x or higher).
   - Install Node.js from [nodejs.org](https://nodejs.org/).

2. **Google Cloud API Key** for accessing Google Sheets and sending emails through Google API.
   - Follow the steps below to obtain your API key and set up access to Google Sheets API.

3. **Google Sheets Spreadsheet ID** and **Sheet Range** for your data source.

4. **ESP API Key** (if using an ESP email account like SendGrid or Mailgun).

## Setup Instructions

### 1. Clone the repository

Clone the repository to your local machine:

```bash
git clone https://github.com/yeshwanthKumar-sa/custom-email-sender.git
cd custom-email-sender

