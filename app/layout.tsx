// app/layout.tsx
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Welcome to the Email Sender App!</h1>
        </header>
        <main>{children}</main> {/* The main content will go here */}
        <footer>
          <p>Footer Content</p>
        </footer>
      </body>
    </html>
  );
}
