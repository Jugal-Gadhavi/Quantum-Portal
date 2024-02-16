import { FC } from "react";
import LocationIcon from "../Icons/location_on_black_24dp.svg";
import Image from "next/image";
import Instructional from "../Icons/Instructional Designer.svg";
import Quality from "../Icons/Software Quality Engineer.svg";
import Link from "next/link";

interface JobCardProps {
  obj: any;
}

function getTitle(obj: any) {
  const sum =
    obj.InstructionalDesigner + obj.SoftwareEngineer + obj.QualityEngineer;
  if (sum > 2) return "Walk in for Multiple Roles";
  const arr = [];
  if (obj.InstructionalDesigner == 1) arr.push("Instructional Designer");
  if (obj.SoftwareEngineer == 1) arr.push("Software Engineer");
  if (obj.QualityEngineer == 1) arr.push("Quality Engineer");
  if (arr.length > 1) {
    return `Walk in for ${arr[0]} & ${arr[1]}`;
  } else {
    return `Walk in for ${arr[0]}`;
  }
}

function getIconArr(obj: any) {
  const arr = [];
  if (obj.InstructionalDesigner == 1) {
    arr.push(["Instructional Designer", Instructional]);
  }
  if (obj.SoftwareEngineer == 1) {
    arr.push(["Software Engineer", Quality]);
  }
  if (obj.QualityEngineer == 1) {
    arr.push(["Quality Engineer", Instructional]);
  }
  return arr;
}

const JobCard: FC<JobCardProps> = ({ obj }) => {
  const imgArr = getIconArr(obj.preferences);
  return (
    <div className="drop-shadow-md flex flex-col gap-5 bg-white px-5 py-4 my-5">
      <div className="text-2xl font-semibold text-green-600">
        {getTitle(obj.preferences)}
      </div>
      <div className="text-sm text-gray-500 flex flex-col">
        {" "}
        Date & Time:{" "}
        <div className="flex gap-3 text-black items-center">
          {" "}
          <div className="text-lg">
            {obj.startDate} to {obj.expirationDate}
          </div>{" "}
          |{" "}
          <div className="text-black flex items-center text-base gap-1">
            <Image src={LocationIcon} height={20} width={20} alt="" />
            {obj.location}
          </div>
        </div>
      </div>
      <div className="border-b-2"></div>
      <div className="text-gray-500 font-bold text-md"> Job Roles:</div>

      <div className="px-2 flex flex-col md:flex-row gap-3 md:gap-16">
        {imgArr.map((singular: any) => {
          return (
            <div className="flex gap-3">
              {" "}
              <Image src={singular[1]} alt="" width={20} height={20} />{" "}
              {singular[0]}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center w-full pt-5">
        <button className="capitalize p-4 w-[60%] rounded bg-green-400 md:w-[30%]">
          <Link href={`/Job/${obj.jobId}`}>VIEW MORE DETAILS</Link>
        </button>
      </div>
    </div>
  );
};

export default JobCard;
