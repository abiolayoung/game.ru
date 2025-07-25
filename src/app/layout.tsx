import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Bars3Icon } from '@heroicons/react/24/outline';
import { HomeModernIcon, ChatBubbleLeftEllipsisIcon, GlobeAltIcon, BellAlertIcon, UserIcon } from '@heroicons/react/24/solid';
import ReactQueryProvider from '@/shared/ReactQueryProvider';
import ReduxProvider from '@/shared/ReduxProvider';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        style={{ background: '#E5E5E5' }}
      >
        <ReduxProvider>
          <ReactQueryProvider>
            <header className="w-full max-w-md mx-auto flex items-center justify-between px-4 py-3 bg-white shadow-sm sticky top-0 z-10 rounded-b-xl">
              <span className="text-lg font-bold text-gray-800">Профиль</span>
              <button className="p-1 rounded-full hover:bg-gray-100">
                <Bars3Icon className="w-7 h-7 text-gray-700" />
              </button>
            </header>
            <main className="flex-1 w-full max-w-md mx-auto flex flex-col">
              {children}
            </main>
            <footer className="w-full max-w-md mx-auto px-4 py-2 bg-white shadow-inner rounded-t-xl text-center text-xs text-gray-300 tracking-wide flex items-center justify-between">
              <HomeModernIcon className="w-8 h-8" style={{ color: '#00E600' }} />
              <ChatBubbleLeftEllipsisIcon className="w-7 h-7 text-[#A7A7A7]" />
              <GlobeAltIcon className="w-7 h-7 text-[#A7A7A7]" />
              <BellAlertIcon className="w-7 h-7 text-[#A7A7A7]" />
              <UserIcon className="w-7 h-7 text-[#A7A7A7]" />
            </footer>
          </ReactQueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
