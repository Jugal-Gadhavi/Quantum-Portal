import Image from "next/image";
import { FC, useState } from "react";
import pfp from "../Icons/default-pfp.jpg";
import upload from "../Icons/Upload_black_24dp.svg";

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

interface PersonalInfoRegisterProps {
  increase: () => void;
  data: PersonalData;
  setData: (data: PersonalData) => void;
}

const PersonalInfoRegister: FC<PersonalInfoRegisterProps> = ({
  increase,
  data,
  setData,
}) => {
  const [PersonalData, setPerosnalData] = useState<PersonalData>(data);

  const checkboxes = [
    "Instructional Designer",
    "Software Engineer",
    "Software Quality Engineer",
  ];

  const handleChange = (e: any) => {
    const { value, checked } = e.target;
    const { preference } = PersonalData;

    if (checked) {
      setPerosnalData({
        ...PersonalData,
        preference: [...(preference ?? []), value],
      });
    } else {
      setPerosnalData({
        ...PersonalData,
        // @ts-ignore
        preference: preference.filter((e) => e !== value),
      });
    }
  };
  return (
    <div className="w-full flex flex-col py-6">
      <div className="bg-white  m-4 rounded-sm p-4 flex px-8 drop-shadow-xl">
        <div className="flex flex-col w-full gap-14">
          <div className="flex flex-col">
            <div className="text-gray-500 text-sm ">First Name*</div>
            <div>
              {" "}
              <input
                placeholder="First Name"
                type="text"
                value={PersonalData.firstName}
                onChange={(e) =>
                  setPerosnalData({
                    ...PersonalData,
                    firstName: e.target.value,
                  })
                }
                className="w-full focus:outline-none border-b-2 border-gray-300 text-lg"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-gray-500 text-sm ">Last Name*</div>
            <div>
              {" "}
              <input
                placeholder="Last Name"
                type="text"
                value={PersonalData.lastname}
                onChange={(e) =>
                  setPerosnalData({
                    ...PersonalData,
                    lastname: e.target.value,
                  })
                }
                className="w-full focus:outline-none border-b-2 border-gray-300 text-lg"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-gray-500 text-sm ">Email*</div>
            <div>
              {" "}
              <input
                placeholder="Email"
                type="text"
                value={PersonalData.email}
                onChange={(e) =>
                  setPerosnalData({
                    ...PersonalData,
                    email: e.target.value,
                  })
                }
                className="w-full focus:outline-none border-b-2 border-gray-300 text-lg"
              />
            </div>
          </div>
          <div>
            <div className="text-gray-500 text-sm ">Phone No.*</div>
            <div className="flex gap-1 items-end h-fit">
              <div className="text-2xl">+</div>
              <div>
                <input
                  placeholder=""
                  type="text"
                  value={PersonalData.countryCode}
                  onChange={(e) =>
                    setPerosnalData({
                      ...PersonalData,
                      countryCode: e.target.value,
                    })
                  }
                  maxLength={2}
                  className="w-6 focus:outline-none border-b-2 border-gray-300 text-lg"
                />
              </div>
              <div>
                <input
                  placeholder=""
                  type="text"
                  maxLength={10}
                  value={PersonalData.phoneNumber}
                  onChange={(e) =>
                    setPerosnalData({
                      ...PersonalData,
                      phoneNumber: e.target.value,
                    })
                  }
                  className="w-[7rem] focus:outline-none border-b-2 border-gray-300 text-lg"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-5 -my-3  cursor-pointer items-center">
            <Image src={upload} width={20} alt="" />
            <div className="text-[#1F7A54] font-semibold text-lg">
              UPLOAD RESUME
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-gray-500 text-sm ">
              Enter Portfolio URL if any
            </div>
            <div>
              {" "}
              <input
                placeholder="Portfolio"
                type="text"
                value={PersonalData.portfolio!}
                onChange={(e) =>
                  setPerosnalData({
                    ...PersonalData,
                    portfolio: e.target.value,
                  })
                }
                className="w-full focus:outline-none border-b-2 border-gray-300 text-lg"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-gray-500 text-sm ">Preffered Job Role</div>
            <div className="p-4 flex flex-col gap-3">
              {checkboxes.map((job) => {
                let checked;
                if (PersonalData.preference.includes(job)) {
                  checked = true;
                } else checked = false;
                return (
                  <div className="flex gap-4 font-semibold text-xl items-center">
                    <input
                      className="accent-green-300 scale-125 "
                      type="checkbox"
                      name="Role"
                      defaultChecked={checked}
                      value={job}
                      onChange={handleChange}
                    />
                    <div>{job} </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-gray-500 text-sm ">
              If You Are Registering Via A Referral, Please Mention Full Name Of
              The Employee Who Referred You*
            </div>
            <div>
              {" "}
              <input
                placeholder="Referrer"
                type="text"
                value={PersonalData.refferer!}
                onChange={(e) =>
                  setPerosnalData({
                    ...PersonalData,
                    refferer: e.target.value,
                  })
                }
                className="w-full focus:outline-none border-b-2 border-gray-300 text-lg"
              />
            </div>
          </div>

          <div className="flex gap-4 font-semibold text-xl items-center">
            <input
              className="accent-green-300 scale-125 "
              type="checkbox"
              name="Role"
              defaultChecked={PersonalData.updates}
              onChange={(e) => {
                {
                  setPerosnalData({
                    ...PersonalData,
                    updates: e.target.checked,
                  });
                }
              }}
            />
            <div>Send Me Job Related Updtes</div>
          </div>
        </div>
        <div className="w-full grid justify-end content-start p-4">
          <div className="flex flex-col gap-8">
            <Image
              className="rounded-full self-center"
              src={pfp}
              width={200}
              height={200}
              alt="pfp"
            />
            <div className="text-xl font-semibold text-green-600">
              UPLOAD PROFILE PHOTO
            </div>
            <div className="text-gray-500 text-base self-center -my-6 font-semibold">
              {" "}
              max 5mb*
            </div>
          </div>
        </div>
      </div>

      <div className="flex place-self-center">
        <button
          onClick={() => {
            setData(PersonalData);
            console.log(data);
            increase();
          }}
          className="px-4 text-xl py-2 bg-[#3FD28B] rounded-lg"
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default PersonalInfoRegister;
