"use client";
import Image from "next/image";
import { FC, useState } from "react";
import ExpandIcon from "../Icons/expand_less_black_24dp.svg";

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

interface ProfessionalInfoProps {
  increase: () => void;
  decrease: () => void;
  data: ProfessionalData;
  setData: (data: ProfessionalData) => void;
}

//COMPLETED -- Checkbox statefullness while swapping through the states
//COMPLETED -- Radiobox statefullness whild swapping

const ProfessionalInfo: FC<ProfessionalInfoProps> = ({
  increase,
  decrease,
  data,
  setData,
}) => {
  const notice = data.noticePeriod;
  const previous = data.pastInterview;

  const [profData, setProfData] = useState<ProfessionalData>(data);

  const college = [["Nirma"], ["BVM"], ["Charutsat"], ["Leeds"]];

  const handleChangeExpertise = (e: any) => {
    const { value, checked } = e.target;
    const { expertTech } = profData;

    if (checked) {
      setProfData({
        ...profData,
        expertTech: [...(expertTech ?? []), value],
      });
    } else {
      setProfData({
        ...profData,
        // @ts-ignore
        expertTech: expertTech.filter((e) => e !== value),
      });
    }
  };
  const handleChangeFamiliar = (e: any) => {
    const { value, checked } = e.target;
    const { familiarTech } = profData;

    if (checked) {
      setProfData({
        ...profData,
        familiarTech: [...familiarTech, value],
      });
    } else {
      setProfData({
        ...profData,
        familiarTech: familiarTech.filter((e) => e !== value),
      });
    }
  };

  const [level, setLevel] = useState<string>(data.applicationType);
  const tech = ["Javascript", "AngularJS", "React", "NodeJS"];

  const [educationExpanded, setEducationExpanded] = useState<boolean>(true);
  const [professionalExpanded, setProfessionalExpanded] =
    useState<boolean>(true);
  return (
    <div className="w-full flex flex-col gap-4 py-6">
      <div className="font-normal">
        <div className="flex justify-between bg-[#DBEFFF] mx-4 font-semibold py-3 rounded-sm drop-shadow-lg">
          <div className="p-4 text-xl">Education Qualifications</div>
          <div className="flex p-4 border-l-2 border-solid border-slate-300">
            <button
              className="rotate-180 "
              onClick={() => {
                setEducationExpanded(!educationExpanded);
              }}
            >
              <Image src={ExpandIcon} className="accent-[#1F7A54]" alt="" />
            </button>
          </div>
        </div>
        {educationExpanded ? (
          <div className=" flex flex-col mx-4 bg-white p-4 gap-4 text-lg">
            <div className="flex flex-col w-full gap-10">
              <div className="flex flex-col gap-4">
                <div className="text-gray-500 text-sm ">
                  Aggregate percentage*
                </div>
                <div>
                  {" "}
                  <input
                    placeholder="Percentage"
                    type="number"
                    value={profData.percentage}
                    onChange={(e) =>
                      setProfData({
                        ...profData,
                        percentage: Number(e.target.value),
                      })
                    }
                    className="w-[25%] focus:outline-none border-b-2 border-gray-300 text-lg"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-gray-500 text-sm ">Year Of Passing*</div>
                <div>
                  {" "}
                  <input
                    placeholder="Year of passing"
                    type="Number"
                    value={profData.passingYear}
                    onChange={(e) =>
                      setProfData({
                        ...profData,
                        passingYear: Number(e.target.value),
                      })
                    }
                    className="w-[25%] focus:outline-none border-b-2 border-gray-300 text-lg"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-4 w-full">
                <div className="flex flex-col gap-4 w-full">
                  <div className="text-gray-500 text-sm ">Qualification*</div>
                  <div>
                    {" "}
                    <select
                      className="w-full bg-white focus:outline-none border-b-2 border-gray-300 text-lg"
                      value={profData.Qualification}
                      onChange={(e) =>
                        setProfData({
                          ...profData,
                          Qualification: e.target.value,
                        })
                      }
                    >
                      <option value={"Bachelor in Technology (B.Tech)"}>
                        Bachelor in Technology (B.Tech)
                      </option>
                      <option value={"Bachelor in Commerce(B.Com)"}>
                        Bachelor in Commerce(B.Com)
                      </option>
                      <option value={"Bachelor in Science (B.Sc)"}>
                        Bachelor in Science (B.Sc)
                      </option>
                      <option value={"Bachelor in Arts (B.A)"}>
                        Bachelor in Arts (B.A)
                      </option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <div className="text-gray-500 text-sm ">Stream*</div>
                  <div>
                    {" "}
                    <select
                      className="w-full bg-white focus:outline-none border-b-2 border-gray-300 text-lg"
                      value={profData.stream}
                      onChange={(e) =>
                        setProfData({
                          ...profData,
                          stream: e.target.value,
                        })
                      }
                    >
                      <option value={"Information Technology"}>
                        Information Technology
                      </option>
                      <option value={"Electronics and Communication"}>
                        Electronics and Communication
                      </option>
                      <option value={"Mechanical Engineering"}>
                        Mechanical Engineering
                      </option>
                      <option value={"Advertising"}>Advertising</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-4 w-full">
                <div className="flex flex-col gap-4 w-full">
                  <div className="text-gray-500 text-sm ">College*</div>
                  <div>
                    {" "}
                    <select
                      className="w-full bg-white focus:outline-none border-b-2 border-gray-300 text-lg"
                      value={profData.college}
                      onChange={(e) =>
                        setProfData({
                          ...profData,
                          college: e.target.value,
                        })
                      }
                    >
                      <option value={""}>Select</option>
                      {college.map((singularCollege) => {
                        return (
                          <option value={singularCollege}>
                            {singularCollege}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <div className="text-gray-500 text-sm ">
                    College if Not in List*
                  </div>
                  <div>
                    {" "}
                    <input
                      placeholder="College"
                      type="text"
                      value={""}
                      onChange={(e) => {
                        if (profData.college === "" && e.target.value !== "") {
                          setProfData({
                            ...profData,
                            college: e.target.value,
                          });
                        }
                      }}
                      className="w-full focus:outline-none border-b-2 border-gray-300 text-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-gray-500 text-sm ">City of College</div>
                <div>
                  {" "}
                  <input
                    placeholder="City"
                    type="text"
                    value={profData.city}
                    onChange={(e) =>
                      setProfData({
                        ...profData,
                        city: e.target.value,
                      })
                    }
                    className="w-[25%] focus:outline-none border-b-2 border-gray-300 text-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <div className="font-normal">
        <div className="flex justify-between bg-[#DBEFFF] mx-4 font-semibold py-3 rounded-sm drop-shadow-lg">
          <div className="p-4 text-xl">Professional Qualifications</div>
          <div className="flex p-4 border-l-2 border-solid border-slate-300">
            <button
              className="rotate-180 "
              onClick={() => {
                setProfessionalExpanded(!professionalExpanded);
              }}
            >
              <Image src={ExpandIcon} className="accent-[#1F7A54]" alt="" />
            </button>
          </div>
        </div>
        {professionalExpanded ? (
          <div className="flex flex-col gap-3">
            <div className=" flex flex-col mx-4 bg-white p-4 gap-4 text-lg">
              <div className="flex flex-col w-full gap-10 ">
                <div className="flex flex-col">
                  <div className="text-gray-500 text-sm ">Applicant Type*</div>
                  <div className="flex flex-col md:flex-row gap-6 px-2 py-2">
                    <div className="flex items-center gap-3">
                      <input
                        type="Radio"
                        name="Applicant"
                        defaultChecked={level == "Fresher" ?? true}
                        value={"Fresher"}
                        onClick={(e) => {
                          setLevel("Fresher");
                          setProfData({
                            ...profData,
                            applicationType: "Fresher",
                          });
                        }}
                        className="h-[15px] aspect-square accent-green-700"
                      />
                      <div> Fresher </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="Radio"
                        name="Applicant"
                        defaultChecked={level == "Experienced" ?? true}
                        value={"Experienced"}
                        onClick={(e) => {
                          setLevel("Experienced");
                          setProfData({
                            ...profData,
                            applicationType: "Experienced",
                          });
                        }}
                        className="h-[15px] aspect-square accent-green-700"
                      />
                      <div> Experienced </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex flex-col mx-4 bg-white p-4 gap-4 text-lg">
              <div className="flex flex-col w-full gap-10">
                {level == "Experienced" ? (
                  <div>
                    {" "}
                    <div className="flex flex-col gap-4 ">
                      <div className="text-gray-500 text-sm ">
                        Years of Experience*
                      </div>
                      <div>
                        {" "}
                        <input
                          placeholder="Years of Experience"
                          type="Number"
                          value={profData.yearsOfExperience ?? 0}
                          onChange={(e) => {
                            setProfData({
                              ...profData,
                              yearsOfExperience: Number(e.target.value),
                            });
                          }}
                          className="w-[25%] focus:outline-none 
                          border-b-2 border-gray-300 text-lg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="text-gray-500 text-sm ">
                        Current CTC* (in rupees)
                      </div>
                      <div>
                        {" "}
                        <input
                          placeholder="CTC"
                          type="number"
                          value={profData.CTC ?? 0}
                          onChange={(e) =>
                            setProfData({
                              ...profData,
                              CTC: Number(e.target.value),
                            })
                          }
                          className="w-[25%] focus:outline-none border-b-2 border-gray-300 text-lg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="text-gray-500 text-sm ">
                        Expected Current CTC* (in rupees)
                      </div>
                      <div>
                        {" "}
                        <input
                          placeholder="Expected CTC"
                          type="number"
                          value={profData.expectedCTC ?? 0}
                          onChange={(e) =>
                            setProfData({
                              ...profData,
                              expectedCTC: Number(e.target.value),
                            })
                          }
                          className="w-[25%] focus:outline-none border-b-2 border-gray-300 text-lg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-gray-500 text-sm ">
                        Select technologies you're expert in
                      </div>
                      <div className="p-4 flex flex-col gap-3">
                        {tech.map((tech) => {
                          let checked;
                          if (profData.expertTech?.includes(tech)) {
                            checked = true;
                          } else checked = false;
                          return (
                            <div className="flex gap-4 font-semibold text-xl items-center">
                              <input
                                defaultChecked={checked}
                                className="accent-green-300 scale-125 "
                                type="checkbox"
                                name="ExpertRole"
                                value={tech}
                                onChange={handleChangeExpertise}
                              />
                              <div>{tech}</div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="flex flex-col">
                        <div className="text-gray-500 text-sm ">
                          if others please enter
                        </div>
                        <div>
                          {" "}
                          <input
                            placeholder=""
                            type="text"
                            className="w-[25%] focus:outline-none border-b-2 border-gray-300 text-lg"
                          />
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                ) : null}

                {/* this is where the fresher starts */}
                <div className="flex flex-col">
                  <div className="text-gray-500 text-sm ">
                    Select technologies you're familiar with
                  </div>
                  <div className="p-4 flex flex-col gap-3">
                    {tech.map((tech) => {
                      let checked;
                      if (profData.expertTech?.includes(tech)) {
                        checked = true;
                      } else checked = false;
                      return (
                        <div className="flex gap-4 font-semibold text-xl items-center">
                          <input
                            defaultChecked={checked}
                            className="accent-green-300 scale-125 "
                            type="checkbox"
                            name="FamiliarRole"
                            value={tech}
                            onChange={handleChangeFamiliar}
                          />
                          <div>{tech}</div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex flex-col">
                    <div className="text-gray-500 text-sm ">
                      if others please enter
                    </div>
                    <div>
                      {" "}
                      <input
                        placeholder=""
                        type="text"
                        className="w-[25%] focus:outline-none border-b-2 border-gray-300 text-lg"
                      />
                    </div>
                  </div>
                </div>

                {level == "Experienced" ? (
                  <div className="exp">
                    <div className="flex flex-col">
                      <div className="text-gray-500 text-sm ">
                        Are you currently on notice period*
                      </div>
                      <div className="flex flex-col md:flex-row gap-6 px-2 py-2">
                        <div className="flex items-center gap-3">
                          <input
                            type="Radio"
                            name="Notice"
                            defaultChecked={notice!}
                            value={"Yes"}
                            onChange={(e) =>
                              setProfData({
                                ...profData,
                                noticePeriod: true,
                              })
                            }
                            className="h-[15px] aspect-square accent-green-700"
                          />
                          <div> Yes </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <input
                            type="Radio"
                            name="Notice"
                            defaultChecked={!notice!}
                            value={"No"}
                            onChange={(e) =>
                              setProfData({
                                ...profData,
                                noticePeriod: false,
                              })
                            }
                            className="h-[15px] aspect-square accent-green-700"
                          />
                          <div> No </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row gap-4 w-full">
                      <div className="flex flex-col gap-4 w-full">
                        <div className="text-gray-500 text-sm ">
                          Notice period End date*
                        </div>
                        <div>
                          {" "}
                          <input
                            placeholder=""
                            type="date"
                            value={profData.noticePeriodDate ?? "2020-07-01"}
                            onChange={(e) =>
                              setProfData({
                                ...profData,
                                noticePeriodDate: e.target.value,
                              })
                            }
                            className="w-full focus:outline-none border-b-2 border-gray-300 text-lg"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 w-full">
                        <div className="text-gray-500 text-sm ">
                          How long is your notice period
                        </div>
                        <div>
                          {" "}
                          <input
                            placeholder="Notice period in months"
                            type="number"
                            value={Number(profData.noticePeriodMonths)}
                            onChange={(e) => {
                              setProfData({
                                ...profData,
                                noticePeriodMonths: Number(e.target.value),
                              });
                            }}
                            className="w-full focus:outline-none border-b-2 border-gray-300 text-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                <div className="flex flex-col">
                  <div className="text-gray-500 text-sm ">
                    Have you appeared for Any test by Zeus in past Month
                  </div>
                  <div className="flex flex-col md:flex-row gap-6 px-2 py-2">
                    <div className="flex items-center gap-3">
                      <input
                        type="Radio"
                        name="post"
                        value={"Yes"}
                        defaultChecked={previous}
                        onChange={(e) => {
                          setProfData({
                            ...profData,
                            pastInterview: true,
                          });
                        }}
                        className="h-[15px] aspect-square accent-green-700"
                      />
                      <div> Yes </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="Radio"
                        name="post"
                        defaultChecked={!previous}
                        value={"No"}
                        onChange={(e) => {
                          setProfData({
                            ...profData,
                            pastInterview: false,
                          });
                        }}
                        className="h-[15px] aspect-square accent-green-700"
                      />
                      <div> No </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="text-gray-500 text-sm ">
                    if Yes, which role did you apply for?
                  </div>
                  <div>
                    {" "}
                    <input
                      placeholder=""
                      type="text"
                      value={profData.pastRole ?? ""}
                      onChange={(e) => {
                        setProfData({
                          ...profData,
                          pastRole: e.target.value,
                        });
                      }}
                      className="w-[25%] focus:outline-none border-b-2 border-gray-300 text-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <div className="flex place-self-center gap-5">
        <button
          onClick={() => {
            setData(profData);
            decrease();
          }}
          className="px-4 text-xl py-2 bg-[#3FD28B] rounded-lg"
        >
          PREVIOUS
        </button>
        <button
          onClick={() => {
            setData(profData);
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

export default ProfessionalInfo;
