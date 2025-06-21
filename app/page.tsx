import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex h-screen w-screen flex-col justify-center gap-10 text-center">
        <div className="text-7xl font-bold">Your ultimate study buddy.</div>
        <div className="text-2xl font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div>
          <Link
            href="#"
            className="rounded-md bg-(--foreground) px-13 py-4 text-2xl font-bold text-(--background)"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}
