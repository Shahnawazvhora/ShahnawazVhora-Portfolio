import localFont from "next/font/local";
import "./globals.css";
import Loader from "./components/Loader";
import LoadingProvider from "./components/LoadingProvider";
import type { Metadata } from 'next'

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

export const metadata: Metadata = {
  title: 'Shahnawaz Vhora'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} cz-shortcut-listen="true">
        <main className="bg-navy min-h-screen text-slate-light relative">
          <LoadingProvider loader={<Loader />}>
            {children}
          </LoadingProvider>
        </main>
      </body>
    </html>
  )
}
