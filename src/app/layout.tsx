import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';
import SignatureGreatfrontend from '@/components/signature-greatfrontend';
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
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${notoSans.className} antialiased min-h-screen`}>
        {children}
        <SignatureGreatfrontend />
      </body>
    </html>
  );
}
