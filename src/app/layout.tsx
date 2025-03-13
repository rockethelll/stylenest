import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import SignatureGreatfrontend from '@/components/signature-greatfrontend';

import './globals.css';
import { ReactNode } from 'react';

const notoSans = Noto_Sans({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Stylenest E commerce',
  description: 'E commerce',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.className} antialiased min-h-screen bg-gradient-custom p-4 flex flex-col max-w-[1280px] mx-auto`}
      >
        <Navbar />
        {children}
        <Footer />
        <SignatureGreatfrontend />
        <div id="toast"></div>
      </body>
    </html>
  );
}
