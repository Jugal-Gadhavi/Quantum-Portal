"use client";
import Image from "next/image";
import BackButton from "../../Icons/arrow_upward_black_24dp.svg";
import { useState } from "react";
import { cn } from "@/Lib/utils";
import PersonalInfoRegister from "@/Components/PersonalInfoRegister";
import ProfessionalInfo from "@/Components/ProfessionalInfo";
import Confirmation from "@/Components/Confirmation";
import { useSession } from "next-auth/react";
import { gql, useMutation } from "@apollo/client";
import client from "@/Lib/apollo";
import { useRouter } from "next/navigation";

const INFORMATION = gql`
  mutation Register($id: ID!, $object: changeInformationInput) {
    changeInformation(id: $id, object: $object) {
      applicantType
      city
    }
  }
`;

export default function page() {
  const router = useRouter();
  const [updateInfo] = useMutation(INFORMATION, { client: client });
  const sesh = useSession();
  function handleSubmit() {
    updateInfo({
      variables: {
        id: sesh.data?.user.image,
        object: {
          city: profData.city,
          applicantType: profData.applicationType,
          percentage: profData.percentage,
          yearOfPassing: profData.passingYear,
          collegeName: profData.college,
          stream: profData.stream,
          qualification: profData.Qualification,
          yearOfExperience: profData.yearsOfExperience,
          currentCTC: profData.CTC,
          expectedCTC: profData.expectedCTC,
          phoneNumber: `${persData.countryCode}+ ${persData.phoneNumber}`,
          noticePeriod: profData.noticePeriod,
          noticePeriodDuration: profData.noticePeriodMonths,
          noticePeriodEnd: profData.noticePeriodDate,
          previouslyApplied: profData.pastInterview,
          previouslyAppliedRole: profData.pastRole,
          referrer: persData.refferer,
          portfolioLink: persData.portfolio,
          resumeLink: "",
        },
      },
    });
    router.push("/");
  }

  type ProfessionalData = {
    percentage: number;
    passingYear: number;
    Qualification: string;
    stream: string;
    college: string;
    city: string;
    applicationType: string;
    familiarTech: string[];
    pastInterview: Number;
    pastRole: string | null;
    yearsOfExperience: number | null;
    CTC: number | null;
    expectedCTC: number | null;
    expertTech: string[] | null;
    noticePeriod: Number | null;
    noticePeriodMonths: number | null;
    noticePeriodDate: string | null;
  };

  type PersonalData = {
    firstName: string;
    lastname: string;
    email: string;
    countryCode: string;
    phoneNumber: string;
    portfolio: string | null;
    preference: string[];
    refferer: string | null;
    updates: boolean;
  };

  const [persData, setPersData] = useState<PersonalData>({
    firstName: "",
    lastname: "",
    email: "",
    countryCode: "",
    phoneNumber: "",
    portfolio: null,
    preference: [],
    refferer: null,
    updates: false,
  });

  const [profData, setProfData] = useState<ProfessionalData>({
    percentage: 0,
    passingYear: 0,
    Qualification: "",
    stream: "",
    college: "",
    city: "",
    applicationType: "Fresher",
    familiarTech: [],
    pastInterview: 0,
    pastRole: null,
    yearsOfExperience: null,
    CTC: null,
    expectedCTC: null,
    expertTech: null,
    noticePeriod: 0,
    noticePeriodMonths: null,
    noticePeriodDate: null,
  });

  function increase() {
    setTab((e) => e + 1);
  }
  function decrease() {
    setTab((e) => e - 1);
  }

  function changeState(num: number) {
    setTab(num);
  }

  const [tab, setTab] = useState<number>(1);
  return (
    <div className="w-full pt-[1.3rem] gap-4 ">
      <div className="flex justify-between items-center p-4 px-10  bg-[#3C4E62] text-zinc-100 font-bold text-lg">
        <div>
          <Image
            className="-rotate-90 cursor-pointer"
            src={BackButton}
            alt=""
            width={30}
          />
        </div>
        <div>Create An Account</div>
        <div className="flex gap-4">
          <button className="bg-[#3FD28B] px-4 py-1 rounded-md text-slate-900">
            CANCEL
          </button>
          <button
            onClick={handleSubmit}
            className={cn("bg-[#3FD28B] px-4 py-1 rounded md text-slate-900", {
              "bg-[#3fd28b88]": tab <= 2,
            })}
          >
            CREATE
          </button>
        </div>
      </div>

      <div className="bg-white m-2 mx-4 p-4 flex justify-between px-12">
        <div
          className="flex gap-2 justify-around items-center cursor-pointer"
          onClick={() => setTab(1)}
        >
          <div
            className={cn(
              "flex aspect-square items-center text-center align-middle px-5 py-2.5 bg-[#3FD28B] rounded-full text-xl text-slate-900",
              { "bg-[#757575] text-white": tab !== 1 }
            )}
          >
            1
          </div>
          <div className="text-lg font-bold"> Personal Information</div>
        </div>
        <div
          className="flex gap-2 justify-around items-center cursor-pointer"
          onClick={() => setTab(2)}
        >
          <div
            className={cn(
              "flex aspect-square items-center text-center align-middle px-5 py-2.5 bg-[#3FD28B] rounded-full text-xl text-slate-900",
              { "bg-[#757575] text-white": tab !== 2 }
            )}
          >
            2
          </div>
          <div className="text-lg font-bold"> Qualifications</div>
        </div>
        <div
          className="flex gap-2 justify-around items-center cursor-pointer"
          onClick={() => setTab(3)}
        >
          <div
            className={cn(
              "flex aspect-square items-center text-center align-middle px-5 py-2.5 bg-[#3FD28B] rounded-full text-xl text-slate-900",
              { "bg-[#757575] text-white": tab !== 3 }
            )}
          >
            3
          </div>
          <div className="text-lg font-bold"> Review and Proceed</div>
        </div>
      </div>

      <div className="flex text-4xl">
        {tab === 1 ? (
          <PersonalInfoRegister
            increase={increase}
            data={persData}
            setData={setPersData}
          />
        ) : null}
        {tab === 2 ? (
          <ProfessionalInfo
            increase={increase}
            decrease={decrease}
            data={profData}
            setData={setProfData}
          />
        ) : null}
        {tab === 3 ? (
          <Confirmation
            perosnalData={persData}
            professionalData={profData}
            changeState={changeState}
          />
        ) : null}
      </div>
    </div>
  );
}
