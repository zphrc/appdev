import Image from "next/image";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "DevMate",
  description: "Your ultimate study buddy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <Image
          src="/home_background.png"
          alt="Home page background"
          width={500}
          height={500}
          className="absolute top-0 right-0 -z-1 h-screen w-auto object-cover"
        />
        {children}
      </body>
    </html>
  );
}
