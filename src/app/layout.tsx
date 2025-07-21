import type { ReactNode } from 'react';
import Header from '@/components/Header';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white text-gray-900">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
