'use client';

import Providers from '../providers/Providers';
import Navbar from '../navigation/Navbar';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <Navbar />
      <main className='container mx-auto px-4 py-8'>{children}</main>
    </Providers>
  );
}
