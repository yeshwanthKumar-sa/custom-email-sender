import nodemailer from 'nodemailer';

export const sendEmailsWithGoogleAPI = async (prompt: string, emailData: string[][], emailAccount: string) => {
  // Create a transporter using Gmail
  let transporter = nodemailer.createTransport({
    service: 'gmail', // For personal Gmail account
    auth: {
      user: process.env.EMAIL_USER, // Use environment variable for Gmail
      pass: process.env.EMAIL_PASSWORD, // Use environment variable for Gmail
    },
  });

  for (const [email] of emailData) {
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER, // Sender address
        to: email, // Recipient address
        subject: prompt, // Use the prompt as the subject
        text: prompt, // Use the prompt as the email body
      });
    } catch (error) {
      console.error('Error sending email to:', email, error);
    }
  }
};
