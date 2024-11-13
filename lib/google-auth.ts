import { GoogleAuth } from 'google-auth-library';

export const getGoogleAuth = async () => {
  const auth = new GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly', 'https://www.googleapis.com/auth/gmail.send'], 
  });
  const client = await auth.getClient();
  return client;
};
