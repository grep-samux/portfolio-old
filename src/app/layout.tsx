import './globals.css';
import React from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import ActiveSectionContextProvider from '@/shared/context/active-section-context';
import Header from '@/app/_components/header';
import Footer from '@/app/_components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Samuele Villa | Portfolio',
  description: 'Samuele Villa personal portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="!scroll-smooth"
    >
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}
      >
        <div
          className="bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] 
        sm:w-[68.75rem] "
        ></div>
        <div
          className="bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] 
        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        ></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="bottom-right"></Toaster>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
