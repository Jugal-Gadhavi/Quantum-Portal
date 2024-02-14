"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function page() {
  const [data, setData] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const login = async (e: any) => {
    e.preventDefault();
    signIn("credentials", { ...data });
  };

  return (
    <div className="h-[100vh] flex items-center justify-center  flex-col">
      <div className="h-1 w-[95vw] md:max-w-[70vw] lg:max-w-[30vw] bg-sky-300"></div>
      <form onSubmit={login}>
        <div className=" py-12 drop-shadow-2xl bg-white flex flex-col gap-y-10 w-[95vw] md:max-w-[70vw] lg:max-w-[30vw]">
          <div className="p-4 text-center font-semibold text-3xl ">
            {" "}
            Log In{" "}
          </div>
          <div className="flex flex-col px-4 md:px-6 items-end">
            {" "}
            <input
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="Email Id*"
              className="px-2 w-full h-11 border-b-2 placeholder:font-bold border-solid"
            />{" "}
            <div className="text-green-500 cursor-pointer font-semibold ">
              FORGOT EMAIL ID?
            </div>
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
            <div className="text-green-500 cursor-pointer font-semibold ">
              FORGOT EMAIL ID?
            </div>
          </div>
          <div className="flex px-6 md:px-10 gap-3">
            {" "}
            <input className="accent-green-600 w-5 h-5" type="checkbox" />{" "}
            Remember Me
          </div>
          <div className="w-full flex justify-center">
            {" "}
            <button
              type="submit"
              className="w-[50%] bg-green-400 p-5 rounded-md drop-shadow-lg shadow-black"
            >
              LOG IN
            </button>
          </div>
          <div className="flex flex-col w-full items-center gap-1">
            <div className="w-fit"> Not Registered yet?</div>
            <Link
              href={"/SignUp"}
              className="w-fit text-green-500 cursor-pointer"
            >
              {" "}
              Create an Account
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
