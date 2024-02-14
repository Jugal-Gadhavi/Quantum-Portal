import JobCard from "@/Components/JobCard";
import { getServerSession } from "next-auth";

export default async function page() {
  const session = await getServerSession();
  console.log(session);
  return (
    <div className="w-[100vw] h-[100vh] p-4 gap-4">
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
    </div>
  );
}
