import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <div className="flex h-[80vh] w-full justify-center px-10">
      <div className="grid w-[90vw] grid-cols-2 items-center gap-6 border-2 bg-black p-10">
        <div className="m-15">
          <div className="mb-3 text-3xl font-bold">Welcome back!</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <h2 className="mb-3 text-3xl font-bold">Login</h2>
          <Link
            href=""
            className="block w-full rounded-md border-2 py-2 text-center text-lg font-bold"
          >
            <FcGoogle className="mr-2 inline-block" />
            Continue with Google
          </Link>
          <LoginForm /> {/* This is a Client Component */}
          <div className="text-center">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="text-blue-400">
              Sign up
            </Link>
            !
          </div>
        </div>
      </div>
    </div>
  );
}
