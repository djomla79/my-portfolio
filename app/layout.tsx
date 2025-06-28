'use client';

import Providers from '../components/providers/Providers';
import Navbar from '../components/navigation/Navbar';

import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-gray-50 text-gray-900'>
        <Providers>
          <Navbar />
          <main className='container mx-auto px-4 py-8'>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
