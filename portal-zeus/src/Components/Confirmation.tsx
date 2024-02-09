import { FC } from "react";

type ProfessionalData = {
  percentage: number;
  passingYear: number;
  Qualification: string;
  stream: string;
  college: string;
  city: string;
  applicationType: string;
  familiarTech: string[];
  pastInterview: boolean;
  pastRole: string | null;
  yearsOfExperience: number | null;
  CTC: number | null;
  expectedCTC: number | null;
  expertTech: string[] | null;
  noticePeriod: boolean | null;
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

interface ConfirmationProps {
  perosnalData: PersonalData;
  professionalData: ProfessionalData;
  changeState: (num: number) => void;
}

const Confirmation: FC<ConfirmationProps> = ({
  perosnalData,
  professionalData,
  changeState,
}) => {
  const personal = [
    ["First Name", perosnalData.firstName],
    ["Last Name", perosnalData.lastname],
    ["Email", perosnalData.email],
    ["Portfolio", perosnalData.portfolio],
  ];

  const professional = [
    ["Years of Experience", professionalData.yearsOfExperience],
    ["Current CTC (in Rupees)", professionalData.CTC],
    ["Expected CTC (in Rupees)", professionalData.expectedCTC],
  ];
  return (
    <div className="w-full flex flex-col gap-4 py-6 px-6 mx-2 font-semibold">
      <div className="w-full flex justify-between">
        <div className=" text-3xl font-bold text-slate-900">
          {" "}
          Personal Information
        </div>
        <div
          onClick={() => {
            changeState(1);
          }}
          className="text-base text-[#1F7A54] cursor-pointer self-center flex font-bold"
        >
          {" "}
          Edit Personal Info
        </div>
      </div>
      <div className="w-full flex flex-col p-4 px-6 bg-white gap-5">
        {personal.map((info) => {
          if (info[1] === null || info[1] === "") {
            info[1] = "-";
          }
          return (
            <div className="flex flex-col gap-3">
              <div className="text-base font-semibold text-gray-500">
                {info[0]}
              </div>
              <div className="text-xl px-1">{info[1]}</div>
            </div>
          );
        })}

        <div className="flex flex-col gap-3">
          <div className="text-base font-semibold text-gray-500">
            Phone Number
          </div>
          <div className="text-xl flex gap-1 items-center px-1">
            {perosnalData.phoneNumber === "" ||
            perosnalData.countryCode === "" ? (
              "-"
            ) : (
              <div className="flex gap-1">
                <div>+</div>
                <div>{perosnalData.countryCode}</div>
                <div>{perosnalData.phoneNumber}</div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3 ">
          <div className="text-base font-semibold w-[40%] text-gray-500">
            Job Role Preferences
          </div>
          <div className="text-xl flex flex-col gap-3 px-1">
            {perosnalData.preference.length == 0 ? (
              <div className="px-1"> -</div>
            ) : (
              perosnalData.preference.map((preference) => {
                return <div className=""> - {preference}</div>;
              })
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3 ">
          <div className="text-base font-semibold w-[40%] text-gray-500">
            If You Are Registering Via A Referral, Please Mention Full Name Of
            The Employee Who Referred You
          </div>
          <div className="text-xl px-1">
            {perosnalData.refferer == "" || perosnalData.refferer == null
              ? "-"
              : perosnalData.refferer}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between">
        <div className=" text-3xl font-bold text-slate-900">Qualifications</div>
        <div
          onClick={() => {
            changeState(2);
          }}
          className="text-base text-[#1F7A54] cursor-pointer self-center flex font-bold"
        >
          Edit Professional Info
        </div>
      </div>

      {/* Prof Info Component */}
      <div className="w-full flex flex-col ">
        <div className=" top-0 p-4 text-xl font-bold bg-[#DBEFFF]">
          Educational Qualifications
        </div>

        <div className="bg-white p-4 px-6 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="text-base font-semibold text-gray-500">
              Aggregate Percentage
            </div>
            <div className="text-xl px-1">
              {professionalData.percentage == 0
                ? "-"
                : professionalData.percentage}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-base font-semibold text-gray-500">
              Year of Passing
            </div>
            <div className="text-xl px-1">
              {professionalData.passingYear == 0
                ? "-"
                : professionalData.passingYear}
            </div>
          </div>

          <div className="flex flex-row gap-5">
            <div className="w-[45%] flex flex-col gap-3">
              <div className="text-base font-semibold text-gray-500">
                Qualification
              </div>
              <div className="text-xl px-1">
                {professionalData.Qualification == ""
                  ? "-"
                  : professionalData.Qualification}
              </div>
            </div>
            <div className="w-[45%] flex flex-col gap-3">
              <div className="text-base font-semibold text-gray-500">
                Stream
              </div>
              <div className="text-xl px-1">
                {professionalData.stream == "" ? "-" : professionalData.stream}
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-5">
            <div className="w-[45%] flex flex-col gap-3">
              <div className="text-base font-semibold text-gray-500">
                College
              </div>
              <div className="text-xl px-1">
                {professionalData.college == ""
                  ? "-"
                  : professionalData.college}
              </div>
            </div>
            <div className="w-[45%] flex flex-col gap-3">
              <div className="text-base font-semibold text-gray-500">
                Location
              </div>
              <div className="text-xl px-1">
                {professionalData.city == "" ? "-" : professionalData.city}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actual Professional Information  */}
      <div className="w-full flex flex-col ">
        <div className=" top-0 p-4 text-xl font-bold bg-[#DBEFFF]">
          Professional Qualifications
        </div>

        <div className="bg-white p-4 px-6 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="text-base font-semibold text-gray-500">
              Applicant Type
            </div>
            <div className="text-xl px-1">
              {professionalData.applicationType}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col ">
        <div className="bg-white p-4 px-6 flex flex-col gap-8">
          {professional.map((info) => {
            if (info[1] === null || info[1] === "") {
              info[1] = "-";
            }
            return (
              <div className="flex flex-col gap-3">
                <div className="text-base font-semibold text-gray-500">
                  {info[0]}
                </div>
                <div className="text-xl px-1">{info[1]}</div>
              </div>
            );
          })}

          <div className="flex flex-col gap-3">
            <div className="text-base font-semibold text-gray-500">
              Select All The Technologies You Expertise In
            </div>
            <div className="text-xl px-1 flex flex-col gap-3">
              {professionalData.expertTech == null ||
              professionalData.expertTech!.length == 0 ? (
                <div className="px-1"> -</div>
              ) : (
                professionalData.expertTech.map((preference) => {
                  return <div className=""> - {preference}</div>;
                })
              )}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-base font-semibold text-gray-500">
              Select All The Technologies You Familiar In
            </div>
            <div className="text-xl px-1 flex flex-col gap-3">
              {professionalData.familiarTech == null ||
              professionalData.familiarTech.length == 0 ? (
                <div className="px-1"> -</div>
              ) : (
                professionalData.familiarTech.map((preference) => {
                  return <div className=""> - {preference}</div>;
                })
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-base font-semibold text-gray-500">
              Are you Currently on Notice Period
            </div>
            <div className="text-xl px-1">
              {professionalData.noticePeriod == null
                ? "-"
                : professionalData.noticePeriod == false
                ? "No"
                : "Yes"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
