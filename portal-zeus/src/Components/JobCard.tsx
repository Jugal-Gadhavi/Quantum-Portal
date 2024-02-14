import { FC } from "react";
import LocationIcon from "../Icons/location_on_black_24dp.svg";
import Image from "next/image";

interface JobCardProps {}

const JobCard: FC<JobCardProps> = () => {
  return (
    <div className="drop-shadow-md flex flex-col gap-5 bg-white px-5 py-4 my-5">
      <div className="text-2xl font-semibold text-green-600">
        Walk in for Designer Job Role{" "}
      </div>
      <div className="text-sm text-gray-500 flex flex-col">
        {" "}
        Date & Time:{" "}
        <div className="flex gap-3 text-black items-center">
          {" "}
          <div className="text-lg">10-Jul-2021 to 11-Jul-2021</div> |{" "}
          <div className="text-black flex items-center gap-1">
            <Image src={LocationIcon} height={20} width={20} alt="" />
            Mumbai
          </div>
        </div>
      </div>
      <div className="border-b-2"></div>
      <div className="text-gray-500 font-bold text-md"> Job Roles:</div>

      <div className="px-2 flex flex-col md:flex-row gap-3 md:gap-16">
        <div className="flex gap-3">
          {" "}
          <img
            src={"https://static.thenounproject.com/png/3159242-200.png"}
            alt=""
            width={20}
            height={20}
          />{" "}
          Instructional Designer
        </div>
        <div className="flex gap-3">
          {" "}
          <img
            src={"https://static.thenounproject.com/png/3159242-200.png"}
            alt=""
            width={20}
            height={20}
          />{" "}
          Software Engineer{" "}
        </div>
        <div className="flex gap-3">
          {" "}
          <img
            src={"https://static.thenounproject.com/png/3159242-200.png"}
            alt=""
            width={20}
            height={20}
          />{" "}
          Software tester{" "}
        </div>
      </div>

      <div className="flex justify-center w-full pt-5">
        <button className="capitalize p-4 w-[60%] rounded bg-green-400 md:w-[30%]">
          VIEW MORE DETAILS
        </button>
      </div>
    </div>
  );
};

export default JobCard;
