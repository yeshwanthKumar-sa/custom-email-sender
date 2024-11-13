"use client";
import React, { useState } from 'react';
import { getGoogleSheetsData } from '@lib/google-sheets';
import { sendEmailsWithGoogleAPI } from '@lib/sendEmailsWithGoogleAPI';




type EmailStatus = 'pending' | 'sending' | 'sent' | 'failed' | 'scheduled';
type DataSource = 'googleSheet' | 'csvUpload';
type EmailAccount = 'personal' | 'esp';

const CustomEmailSender: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dataSource' | 'emailAccount' | 'emailContent'>('dataSource');
  const [dataSource, setDataSource] = useState<DataSource>('googleSheet');
  const [emailAccount, setEmailAccount] = useState<EmailAccount>('personal');
  const [prompt, setPrompt] = useState('');
  const [emailStatus, setEmailStatus] = useState<EmailStatus>('pending');
  const [spreadsheetId, setSpreadsheetId] = useState('');
  const [sheetRange, setSheetRange] = useState('');
  const [emailData, setEmailData] = useState<string[][]>([]);

  const loadGoogleSheetData = async () => {
    try {
      const data = await getGoogleSheetsData(spreadsheetId, sheetRange);
      setEmailData(data);
      alert('Data loaded successfully!');
    } catch (error) {
      console.error('Error loading Google Sheet data:', error);
      alert('Error loading data. Please check your inputs and try again.');
    }
  };

  const sendEmails = async () => {
    try {
      setEmailStatus('sending');
      await sendEmailsWithGoogleAPI(prompt, emailData, emailAccount);
      setEmailStatus('sent');
    } catch (error) {
      setEmailStatus('failed');
      console.error('Error sending emails:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Custom Email Sender</h1>

      {/* Tab Navigation */}
      <div className="flex mb-6 border-b">
        <button
          className={`px-4 py-2 ${activeTab === 'dataSource' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
          onClick={() => setActiveTab('dataSource')}
        >
          Data Source
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'emailAccount' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
          onClick={() => setActiveTab('emailAccount')}
        >
          Email Account
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'emailContent' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
          onClick={() => setActiveTab('emailContent')}
        >
          Email Content
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {/* Data Source Tab */}
        {activeTab === 'dataSource' && (
          <div className="space-y-4">
            <div>
              <label htmlFor="spreadsheetId" className="block text-sm font-medium mb-2">
                Google Sheets Spreadsheet ID
              </label>
              <input
                id="spreadsheetId"
                type="text"
                value={spreadsheetId}
                onChange={(e) => setSpreadsheetId(e.target.value)}
                placeholder="Enter your Google Sheets Spreadsheet ID"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="sheetRange" className="block text-sm font-medium mb-2">
                Sheet Range
              </label>
              <input
                id="sheetRange"
                type="text"
                value={sheetRange}
                onChange={(e) => setSheetRange(e.target.value)}
                placeholder="Enter the sheet range (e.g., 'Sheet1!A1:B10')"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              onClick={loadGoogleSheetData}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Load Data
            </button>
          </div>
        )}

        {/* Email Account Tab */}
        {activeTab === 'emailAccount' && (
          <div className="space-y-4">
            <button
              onClick={() => setEmailAccount('personal')}
              className={`w-full py-2 px-4 rounded-md ${emailAccount === 'personal' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              Personal Email Account
            </button>
            <button
              onClick={() => setEmailAccount('esp')}
              className={`w-full py-2 px-4 rounded-md ${emailAccount === 'esp' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              ESP Email Account
            </button>
          </div>
        )}

        {/* Email Content Tab */}
        {activeTab === 'emailContent' && (
          <div>
            <label htmlFor="prompt" className="block text-sm font-medium mb-2">
              Email Prompt
            </label>
            <textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your email prompt"
              className="w-full px-3 py-2 border rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}
      </div>

      {/* Send Button */}
      <div className="mt-6">
        <button
          onClick={sendEmails}
          disabled={emailStatus === 'sending'}
          className={`w-full py-2 px-4 rounded-md ${emailStatus === 'sending' ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors`}
        >
          {emailStatus === 'sending' ? 'Sending...' : 'Send Emails'}
        </button>
      </div>

      {/* Status Messages */}
      {emailStatus !== 'pending' && (
        <div className={`mt-4 p-4 rounded-md ${emailStatus === 'sent' ? 'bg-green-100 text-green-800' : emailStatus === 'failed' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
          <h3 className="font-medium">
            {emailStatus === 'sending' && 'Sending emails...'}
            {emailStatus === 'sent' && 'Success!'}
            {emailStatus === 'failed' && 'Error'}
          </h3>
          <p className="mt-1">
            {emailStatus === 'sending' && 'Please wait while we send your emails.'}
            {emailStatus === 'sent' && 'Your emails have been sent successfully.'}
            {emailStatus === 'failed' && 'There was an error sending your emails. Please try again.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default CustomEmailSender;
