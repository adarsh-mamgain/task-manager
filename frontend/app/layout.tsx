import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Button from "@/components/Button";

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
  title: "Task Manager",
  description: "Developed by http://x.com@adarsh-mamgain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-blue-600 flex items-center justify-between px-20 py-4">
          <h1 className="text-3xl text-white font-bold">Task Manager</h1>

          <div className="flex items-center gap-2">
            <Button title="Logout" />
            <Button title="Sign in" />
            <Button title="Sign up" />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
