import Image from "next/image";
import Link from "next/link";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <div className="h-screen w-[50vw] bg-black p-10">
      <div className="flex items-center gap-2 text-white">
        <Image
          src="/favicon.ico"
          alt="Logo"
          width={50}
          height={50}
          className="mb-1 w-5"
        />
        <div className="text-xl font-bold">DevMate</div>
      </div>
      <div className="flex flex-col gap-6 p-10">
        <div>
          <div className="mb-3 text-3xl font-bold">Welcome back!</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        <Link
          href=""
          className="rounded-md border-2 py-2 text-center text-lg font-bold"
        >
          Continue with Google
        </Link>
        <div className="text-center uppercase">or</div>
        <LoginForm /> {/* This is a Client Component */}
        <div className="text-center">
          Don&apos;t have an account?{" "}
          <span className="text-blue-400">Sign up</span>!
        </div>
      </div>
    </div>
  );
}
