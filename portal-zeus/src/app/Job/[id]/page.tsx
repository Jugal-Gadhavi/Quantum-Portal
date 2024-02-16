"use client";
import Image from "next/image";
import LocationIcon from "../../../Icons/location_on_black_24dp.svg";
import PreReq from "@/Components/PreRequisite";
import DesignerDesc from "@/Components/DesignerDesc";
import SoftwareEngineerDesc from "@/Components/SoftwareEnginerDesc";
import QualityEngineerDesc from "@/Components/QualityEngineerDesc";

import UploadIcon from "../../../Icons/Upload_black_24dp.svg";

import { gql, useMutation, useQuery } from "@apollo/client";
import client from "@/Lib/apollo";
import { useState } from "react";

import Instructional from "../../../Icons/Instructional Designer.svg";
import Quality from "../../../Icons/Software Quality Engineer.svg";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface pageProps {
  params: {
    id: string;
  };
}

interface payloadObject {
  timeslot: String;
  preference: Number[];
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

const GET_JOB = gql`
  query getPosting($jobPostingByIdId: ID!) {
    jobPostingById(id: $jobPostingByIdId) {
      jobId
      preferences {
        InstructionalDesigner
        SoftwareEngineer
        QualityEngineer
      }
      startDate
      expirationDate
      location
      subOpenings {
        jobRole
        openingId
      }
    }
  }
`;

const ADD_APPLICATION = gql`
  mutation addMutation($application: addApplicationInput) {
    addApplication(application: $application) {
      applicationId
      openingId
      userId
    }
  }
`;

const page = ({ params }: pageProps) => {
  const router = useRouter();
  const sesh = useSession();
  const handleChangeChecks = (e: any) => {
    const { value, checked } = e.target;
    const { preference } = payload;

    if (checked) {
      setPayload({
        ...payload,
        preference: [...(preference ?? []), value],
      });
    } else {
      setPayload({
        ...payload,
        // @ts-ignore
        preference: preference.filter((e) => e !== value),
      });
    }
  };

  const [payload, setPayload] = useState<payloadObject>({
    timeslot: "",
    preference: [],
  });

  const [showErrors, setErrors] = useState<boolean>(false);
  const [addApp] = useMutation(ADD_APPLICATION, { client: client });
  function handleSubmit() {
    console.log(payload.preference.length);
    if (payload.preference.length == 0 || payload.timeslot === "") {
      setErrors(true);
      alert("woah complete the fields");
      return;
    }
    const arr = payload.preference;
    arr.map((opening) => {
      addApp({
        variables: {
          application: {
            openingId: opening,
            timeSlot: payload.timeslot,
            userId: sesh.data?.user.image,
          },
        },
      });
    });
    router.push("/");
  }

  const { data, loading, error } = useQuery(GET_JOB, {
    variables: {
      jobPostingByIdId: params.id,
    },
    client: client,
  });

  if (error) return <h1>{error.message}</h1>;
  if (loading) {
    return (
      <div className=" flex w-[100vw] h-[100vh] justify-center items-center p-8">
        loading....
      </div>
    );
  }
  const imgArr = getIconArr(data.jobPostingById.preferences);

  return (
    <div className=" flex flex-col pt-6 pb-16 gap-6 font-semibold">
      <div className="p-6 mx-4 bg-white flex flex-col gap-3 drop-shadow-lg rounded-sm ">
        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <div className="text-3xl">
              {getTitle(data.jobPostingById.preferences)}
            </div>
            <div className="text-sm text-gray-500 flex flex-col">
              {" "}
              Date & Time:{" "}
              <div className="flex gap-3 text-black items-buttoncenter">
                {" "}
                <div className="text-lg">10-Jul-2021 to 11-Jul-2021</div> |{" "}
                <div className="text-black flex items-center gap-1">
                  <Image src={LocationIcon} height={20} width={20} alt="" />
                  Mumbai
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-start">
            <button
              onClick={handleSubmit}
              className="p-2 px-8 max-h-fit font-semibold rounded-md bg-green-400"
            >
              APPLY
            </button>
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
      </div>
      <PreReq />
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
                value={"9:00 to 10:00"}
                onClick={(e) => {
                  setPayload({
                    ...payload,
                    timeslot: "9:00 to 10:00",
                  });
                }}
              />
              <div> 9:00 to 10:00 </div>
            </div>
            <div className="flex gap-4 px-4">
              <input
                type="radio"
                name="timeslot"
                value={"11:00 to 12:00"}
                onClick={(e) => {
                  setPayload({
                    ...payload,
                    timeslot: "11:00 to 12:00",
                  });
                }}
                className="accent-green-600 scale-150"
              />
              <div> 11:00 to 12:00 </div>
            </div>
            {showErrors ? (
              <div className="ml-2 text-sm text-red-500">required</div>
            ) : null}
          </div>
          <div className="border-b-2 border-solid w-full h-1"></div>
          <div className="text-sm text-gray-500  ">Select your Preference:</div>
          <div className="flex flex-col gap-2 text-lg">
            {data.jobPostingById.subOpenings.map((singular: any) => {
              return (
                <div className="flex gap-4 px-4">
                  <input
                    type="checkbox"
                    name="preference"
                    value={singular.openingId}
                    className="accent-green-600 scale-150"
                    onChange={handleChangeChecks}
                  />
                  <div>{singular.jobRole}</div>
                </div>
              );
            })}
            {showErrors ? (
              <div className="ml-2 text-sm text-red-500">required</div>
            ) : null}
          </div>
          <div className="border-b-2 border-solid w-full h-1"></div>

          <div className="flex gap-3 items-center p-2 stroke-green-500">
            <button className=" text-green-600 flex justify-center gap-5 items-center text-xl">
              <Image
                className="-hue-rotate-90"
                src={UploadIcon}
                height={30}
                alt=""
              />
              UPLOAD AN UPDATED RESUME
            </button>
          </div>
        </div>
      </div>
      <DesignerDesc />
      <SoftwareEngineerDesc />
      <QualityEngineerDesc />

      <div className="fixed bottom-0 md:hidden">
        <div
          onClick={handleSubmit}
          className="w-[100vw] z-40 p-3 font-semibold bg-green-400"
        >
          APPLY
        </div>
      </div>
    </div>
  );
};

export default page;
