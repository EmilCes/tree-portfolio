import type { Metadata } from "next";
import "./globals.css";
import { Topbar } from "./components/Topbar";

export const metadata: Metadata = {
  title: "Emiliano's Portfolio",
  description: "Software Engineering student.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=NTR&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <Topbar />
        {children}
      </body>
    </html>
  );
}
