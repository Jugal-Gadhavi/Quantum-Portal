import Image from "next/image";
import LocationIcon from "../../../Icons/location_on_black_24dp.svg";
import PreReq from "@/Components/PreRequisite";
import ApplyForm from "@/Components/ApplyForm";
import DesignerDesc from "@/Components/DesignerDesc";
import SoftwareEngineerDesc from "@/Components/SoftwareEnginerDesc";
import QualityEngineerDesc from "@/Components/QualityEngineerDesc";
import DesignerIcon from "../../../Icons/Instructional Designer.svg"
import SoftwareQualityEngineerIcon from "../../../Icons/Software Quality Engineer.svg"
import SoftwareEngineerIcon from "../../../Icons/Instructional Designer.svg"


interface pageProps {
  params: {
    id: string;
  };
}

const page = async ({ params }: pageProps) => {
  const { id } = params;
  return (
    <div className=" flex flex-col pt-6 pb-16 gap-6 font-semibold">
      <div className="p-6 mx-4 bg-white flex flex-col gap-3 drop-shadow-lg rounded-sm ">
        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <div className="text-3xl">Walk in for Multiple Job Roles</div>
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
            <button className="p-2 px-8 max-h-fit font-semibold rounded-md bg-green-400">
              APPLY
            </button>
          </div>
        </div>
        <div className="border-b-2"></div>
        <div className="text-gray-500 font-bold text-md"> Job Roles:</div>

        <div className="px-2 flex flex-col md:flex-row gap-3 md:gap-16">
          <div className="flex gap-3">
            {" "}
            <Image
              src={DesignerIcon}
              alt=""
              width={20}
              height={20}
            />{" "}
            Instructional Designer
          </div>
          <div className="flex gap-3">
            {" "}
            <Image
              src={SoftwareEngineerIcon}
              alt=""
              width={20}
              height={20}
            />{" "}
            Software Engineer{" "}
          </div>
          <div className="flex gap-3">
            {" "}
            <Image
              src={SoftwareQualityEngineerIcon}
              alt=""
              width={20}
              height={20}
            />{" "}
            Software Quality Engineer{" "}
          </div>
        </div>
      </div>
      <PreReq />
      <ApplyForm />
      <DesignerDesc />
      <SoftwareEngineerDesc />
      <QualityEngineerDesc />

      
      
      <div className="fixed bottom-0 md:hidden">
        {" "}
        <button className="w-[100vw] p-3 font-semibold bg-green-400">
          {" "}
          APPLY
        </button>
      </div>
    </div>
  );
};

export default page;
