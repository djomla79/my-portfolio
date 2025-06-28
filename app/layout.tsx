import ClientLayout from '@/components/layout/ClientLayout';

export const metadata = {
  verification: {
    google: 'H_53LpgYC75gy-aYmqhM43C0xgUCxptcEDHKdwkLcUY',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-gray-50 text-gray-900'>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
