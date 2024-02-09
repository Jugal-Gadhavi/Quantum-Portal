"use client";
import { FC } from "react";
import Quantum from "../Icons/Zeus-LMS-logo.svg";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import DisplayPhoto from "./DisplayPhoto";

interface navbarProps {}

const Navbar: FC<navbarProps> = () => {
  const nav = useRouter();
  return (
    <div className="flex flex-col w-full fixed z-50 top-0">
      <div className="w-full h-contain flex justify-between py-2 px-6 bg-[#1F2834]">
        <Image src={Quantum} width={200} alt="" />
        <div className="">
          <button
            onClick={(e) => {
              signOut();
            }}
            className="flex aspect-square rounded-full border-2 border-solid border-[#3FD28B] bg-[#3C4E62] p-5 text-white text-lg items-center text-center align-middle"
          >
            {" "}
            U{" "}
          </button>
        </div>
      </div>
      <div className="h-1 w-full bg-sky-300"></div>
    </div>
  );
};

export default Navbar;
