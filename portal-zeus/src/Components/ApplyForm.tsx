"use client"
import Image from "next/image";
import { FC } from "react";
import UploadIcon from "../Icons/Upload_black_24dp.svg"

interface ApplyFormProps {}

const ApplyForm: FC<ApplyFormProps> = async () => {
  return (
    <div className="mx-4 p-4 bg-white flex flex-col gap-4 font-semibold">
      <div className="text-xl">Time Slot and Preference:</div>
      <div className="flex flex-col gap-6">
        <div className="text-sm text-gray-500  "> Select a Timeslot: </div>
        <div className="flex flex-col gap-2 text-lg">
          <div className="flex gap-4 px-4">
            <input
              type="radio"
              name="timeslot"
              className="accent-green-600 scale-150"
            />
            <div> 9:00 to 10:00 </div>
          </div>
          <div className="flex gap-4 px-4">
            <input
              type="radio"
              name="timeslot"
              className="accent-green-600 scale-150"
            />
            <div> 11:00 to 12:00 </div>
          </div>
        </div>
        <div className="border-b-2 border-solid w-full h-1"></div>
        <div className="text-sm text-gray-500  ">Select your Preference:</div>
        <div className="flex flex-col gap-2 text-lg">
          <div className="flex gap-4 px-4">
            <input
              type="checkbox"
              name="preference"
              className="accent-green-600 scale-150"
            />
            <div> Instructional Designer </div>
          </div>
          <div className="flex gap-4 px-4">
            <input
              type="checkbox"
              name="preference"
              className="accent-green-600 scale-150"
            />
            <div> Software Engineer </div>
          </div>
          <div className="flex gap-4 px-4">
            <input
              type="checkbox"
              name="preference"
              className="accent-green-600 scale-150"
            />
            <div> Software Tester </div>
          </div>
        </div>
        <div className="border-b-2 border-solid w-full h-1"></div>

        <div className="flex gap-3 items-center p-2 stroke-green-500">
          <button className=" text-green-600 flex justify-center gap-5 items-center text-xl">
          <Image className="-hue-rotate-90" src={UploadIcon} height={30} alt="" />
          UPLOAD AN UPDATED RESUME
          </button>
        </div>

      </div>
    </div>
  );
};

export default ApplyForm;
