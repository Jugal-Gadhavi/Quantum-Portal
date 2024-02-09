"use client"

import Image from "next/image";
import { FC, useState } from "react";
import ExpandIcon from "../Icons/expand_less_black_24dp.svg"

interface SoftwareEngineerProps{}

const SoftwareEngineerDesc: FC<SoftwareEngineerProps> = ()=>{
    const [expanded, setExpanded] = useState<boolean>(false);

    return(
        <div className="font-normal ">
      <div className="flex justify-between bg-[#DBEFFF] mx-4 font-semibold py-3 rounded-sm drop-shadow-lg">
        <div className="p-4 text-xl"> Software Engineer</div>
        <div className="flex p-4 border-l-2 border-solid border-slate-300">
          <button
            className="rotate-180 "
            onClick={() => {
              setExpanded(!expanded);
            }}
          >
            <Image src={ExpandIcon} className="accent-[#1F7A54]" alt="" />
          </button>
        </div>
      </div>
      {expanded ? (
        <div className=" flex flex-col mx-4 bg-white p-4 gap-4 text-lg">
          <div className="flex flex-col gap-3">
            {" "}
            <div className="text-md text-gray-400 font-semibold">
              General Instructions :{" "}
            </div>
            <div>
              <ul className=" list-disc px-4">
                <li>
                  We have a twoyear indemnity for permanent candidates. We will
                  provide training to the selected candidates.
                </li>
                <li>
                  Candidates who have appeared for any test held by Zeus
                  Learning in the past 12 months will not be allowed to appear
                  for this recruitment test.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="border-b-2 border-solid w-full h-1"></div>
            <div className="text-md text-gray-400 font-semibold">
              Instructions for the Exam:{" "}
            </div>
            <div>
              <ul className=" list-disc px-4">
                <li>
                  Candidates are requested to log in half an hour prior to the
                  exam start time as they would need to capture their image
                  using a web camera. By taking this test, you are permitting
                  the examination system to capture your video for invigilation
                  purposes.
                </li>
                <li>
                  Candidates would not be able to appear for the exam if the web
                  camera attached to their system is not functional.
                </li>
                <li>
                  The web camera of your system must be enabled and must remain
                  switched on throughout the examination. In the event of
                  non-receipt of a webcam, your examination will be considered
                  null and void.
                </li>
                <li>
                  {" "}
                  Candidate's audio and video will be recorded during the
                  examination and will also be monitored by a live proctor. The
                  proctor may terminate your exam in case he/she observes any
                  malpractice during the exam.
                </li>
                <li>
                  {" "}
                  Candidates are advised to use their own Laptop/PC with a
                  stable internet connection (min 1 Mbps) during the exam.{" "}
                </li>
                <li>
                  {" "}
                  Candidates cannot use an iOS system/device for this exam.
                </li>
              </ul>
            </div>
            <div className="border-b-2 border-solid w-full h-1"></div>
            <div className="text-md text-gray-400 font-semibold">
              Minimum System Requirements:{" "}
            </div>
            <div>
              <ul className=" list-disc px-4">
                <li>
                  Personal Laptop or Desktop computer in working condition with
                  good quality camera (you can use Windows 7 and above).
                </li>
                <li> The latest version of Google Chrome Browser only.</li>

                <li>
                  {" "}
                  Please note that Internet speed should be minimum 1 Mbps.
                </li>
                <li>Do not use a MacBook or iPad for the proctored exam.</li>
              </ul>
            </div>
            <div className="text-md text-gray-400 font-semibold">Process: </div>
            <div>
              <ul className=" flex flex-col list-disc px-4 gap-6">
                <li>
                  Every round is an elimination round. Candidates need to clear
                  all rounds to get selected.
                </li>
                <li>
                  {" "}
                  Round I : 4th August, 2018 Aptitude Test : 25 Questions.
                </li>
                <li> Round II (Interview) : 4th August, 2018.</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
    )
}

export default SoftwareEngineerDesc;