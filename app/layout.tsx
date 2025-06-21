import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevMate",
  description: "Your ultimate study buddy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <nav className="m-7 flex justify-around">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/favicon.ico"
              alt="DevMate Logo"
              width={25}
              height={25}
              className="rounded-full"
            />
            <span className="text-3xl font-bold">DevMate</span>
          </Link>
          <div className="flex items-center gap-10 *:font-bold">
            <Link href="/" className="capitalize">
              home
            </Link>
            <Link href="/features" className="capitalize">
              features
            </Link>
            <Link href="/how-it-works" className="capitalize">
              how it works
            </Link>
            <Link href="/tracks" className="capitalize">
              tracks
            </Link>
            <Link href="/faq" className="uppercase">
              faq
            </Link>
          </div>
          <Link
            href="/login"
            className="block rounded-md border-2 px-5 py-1 font-bold"
          >
            Login
          </Link>
        </nav>
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
