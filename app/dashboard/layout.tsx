import Link from "next/link";
import "@/app/globals.css";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="flex items-center justify-between bg-black px-8 py-10 text-white">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold">DevMate</span>
        </div>
        <div className="font-bold flex items-center gap-4">
          <Link href="/home" className="hover:underline">Home</Link>
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
          <Link href="/dashboard/roadmap" className="hover:underline">Roadmap</Link>
          <Link href="/dashboard/assessments" className="hover:underline">Assessments</Link>
          <Link href="/dashboard/playground" className="hover:underline">Playground</Link>
        </div>
      </nav>
      <main className="p-8">{children}</main>
    </div>
  );
}
