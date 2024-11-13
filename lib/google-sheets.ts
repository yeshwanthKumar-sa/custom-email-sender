import { google } from 'googleapis';
import { getGoogleAuth } from './google-auth';

export const getGoogleSheetsData = async (spreadsheetId: string, range: string) => {
  const authClient = await getGoogleAuth(); // Get the authenticated client
  const sheets = google.sheets({ version: 'v4', auth: authClient });
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  return res.data.values; // Return the data from the sheet
};
