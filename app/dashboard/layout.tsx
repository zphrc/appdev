import Link from "next/link";
import Image from "next/image";
import "@/app/globals.css";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black">
      <nav className="flex items-center justify-between bg-black px-8 py-10 text-white border-b border-white">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/favicon.ico"
            alt="DevMate Logo"
            width={25}
            height={25}
            className="rounded-full"
          />
          <span className="font-bold text-3xl">DevMate</span>
        </Link>
        <div className="text-xl font-bold flex items-center gap-10">
          <Link href="/home" className="hover:underline">Home</Link>
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
          <Link href="/dashboard/roadmap" className="hover:underline">Roadmap</Link>
          <Link href="/dashboard/assessments" className="hover:underline">Assessments</Link>
          <Link href="/dashboard/playground" className="hover:underline">Playground</Link>
          <Link href="/profile" className="ml-10">
            <Image
              src="/default_pfp.png"
              alt="Default Profile"
              width={60}
              height={60}
              className="rounded-full border-2 border-white"
            />
          </Link>
        </div>
      </nav>
      <main className="p-8">{children}</main>
    </div>
  );
}
