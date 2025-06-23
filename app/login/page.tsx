import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <div className="mb-10 flex justify-center">
      <div className="justify-content flex w-[40vw] flex-col gap-6 border-1 bg-black p-20">
        <div>
          <h1 className="mb-3 text-3xl font-bold">Welcome back!</h1>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        <Link
          href=""
          className="block w-full rounded-md border-2 py-2 text-center text-lg font-bold"
        >
          <FcGoogle className="mr-2 inline-block" />
          Continue with Google
        </Link>
        <div className="text-center font-light uppercase">or</div>
        <LoginForm />
        <div className="text-center">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="text-blue-400">
            Sign up
          </Link>
          !
        </div>
      </div>
      {/*<div className="mb-10 flex w-full justify-center px-10">
      <div className="flex w-[90vw] flex-col items-center gap-6 border-2 bg-black p-10">
        <div className="m-15">
          <div className="mb-3 text-3xl font-bold">Welcome back!</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        <h2 className="mb-3 text-3xl font-bold">Login</h2>
        <Link
          href=""
          className="block w-full rounded-md border-2 py-2 text-center text-lg font-bold"
        >
          <FcGoogle className="mr-2 inline-block" />
          Continue with Google
        </Link>
        <LoginForm />
        <div className="text-center">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="text-blue-400">
            Sign up
          </Link>
          !
        </div>
      </div>
    </div>*/}
    </div>
  );
}
