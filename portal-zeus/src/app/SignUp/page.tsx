"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function page() {
  const [data, setData] = useState<{
    email: string;
    fullName: string;
    password: string;
    confirmPassword: string;
  }>({
    email: "",
    fullName: "",
    password: "",
    confirmPassword: "",
  });

  const signUp = async (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="h-[100vh] flex items-center justify-center  flex-col">
      <div className="h-1 w-[95vw] md:max-w-[70vw] lg:max-w-[30vw] bg-sky-300"></div>
      <form onSubmit={signUp}>
        <div className=" py-12 drop-shadow-2xl bg-white flex flex-col gap-y-10 w-[95vw] md:max-w-[70vw] lg:max-w-[30vw]">
          <div className="p-4 text-center font-semibold text-3xl ">
            {" "}
            Sign Up{" "}
          </div>
          <div className="flex flex-col px-4 md:px-6 items-end">
            {" "}
            <input
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="Email Id*"
              className="px-2 w-full h-11 border-b-2 placeholder:font-bold border-solid"
            />{" "}
          </div>
          <div className="flex flex-col px-4 md:px-6 items-end">
            {" "}
            <input
              value={data.fullName}
              onChange={(e) => setData({ ...data, fullName: e.target.value })}
              placeholder="Full Name*"
              className="px-2 w-full h-11 border-b-2 placeholder:font-bold border-solid"
            />{" "}
          </div>
          <div className="flex flex-col px-4 md:px-6 items-end">
            {" "}
            <input
              value={data.password}
              type="password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="px-2 w-full h-11 border-b-2 placeholder:font-bold border-solid"
              placeholder="Password*"
            />{" "}
          </div>
          <div className="flex flex-col px-4 md:px-6 items-end">
            {" "}
            <input
              value={data.confirmPassword}
              type="text"
              onChange={(e) =>
                setData({ ...data, confirmPassword: e.target.value })
              }
              className="px-2 w-full h-11 border-b-2 placeholder:font-bold border-solid"
              placeholder="Confirm Password*"
            />{" "}
          </div>

          <div className="w-full flex justify-center">
            {" "}
            <button
              type="submit"
              className="w-[50%] bg-green-400 p-5 rounded-md drop-shadow-lg shadow-black"
            >
              SIGN UP
            </button>
          </div>
          <div className="flex flex-col w-full items-center gap-1">
            <Link href={"/Login"} className="w-fit hover:text-green-400">
              {" "}
              ALREADY A USER?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
