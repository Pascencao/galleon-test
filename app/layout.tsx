'use client'

import localFont from "next/font/local";
import { Provider } from 'react-redux';
import { store } from '@/store';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#d7d7d7]`}
      >
      <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
