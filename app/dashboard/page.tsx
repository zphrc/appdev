import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  
  const firstName = "Bernie";
  
  return (
    <div>
      <h1 className="text-5xl font-bold mb-10">Hi, {firstName}</h1>
      <Link href="/" className="text-lg flex items-center gap-2">
        <Image
          src="/icons/roadmap.png"
          alt="icon"
          width={24}
          height={24}
          className="rounded-full"
        />
        Roadmap
        <Image
          src="/icons/right_arrow.png"
          alt="icon"
          width={24}
          height={24}
          className="rounded-full"
        />
      </Link>
      {/* Add widgets, summaries, or calls-to-action here */}
    </div>
  );
}
