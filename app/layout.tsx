import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Components/Navbar";

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Farel's Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black relative">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
