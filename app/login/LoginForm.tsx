"use client";
import Link from "next/link";
import { useRef } from "react";

function InputGroup({
  label,
  name,
  type = "text",
  inputRef,
}: {
  label: string;
  name: string;
  type?: string;
  inputRef: React.RefObject<HTMLInputElement | null>;
}) {
  return (
    <div
      className="cursor-text rounded-md border-1 px-5 py-3"
      onClick={() => inputRef.current && inputRef.current.focus()}
    >
      <label htmlFor={name} className="cursor-text opacity-60">
        {label}
      </label>
      <br />
      <input
        ref={inputRef}
        id={name}
        name={name}
        type={type}
        className="w-full focus:outline-none"
      />
    </div>
  );
}

export default function LoginForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  return (
    <form className="flex flex-col gap-4">
      <InputGroup label="Email" name="email" type="text" inputRef={emailRef} />
      <InputGroup
        label="Password"
        name="password"
        type="password"
        inputRef={passwordRef}
      />
      <div className="flex justify-end">
        <Link
          href="/forgot-password"
          className="text-sm text-blue-400 hover:underline"
        >
          Forgot Password?
        </Link>
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-white py-2 text-xl font-bold text-black active:bg-gray-400"
      >
        Login
      </button>
    </form>
  );
}
