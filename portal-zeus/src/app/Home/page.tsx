"use client";
import JobCard from "@/Components/JobCard";
import { gql, useQuery } from "@apollo/client";
import client from "@/Lib/apollo";

const GET_JOBS = gql`
  query getJobPostings {
    jobPostings {
      jobId
      preferences {
        InstructionalDesigner
        SoftwareEngineer
        QualityEngineer
      }
      startDate
      expirationDate
      location
    }
  }
`;
export default function page() {
  const { data, loading, error } = useQuery(GET_JOBS, { client });

  if (error) return <h1>{error.message}</h1>;
  if (loading) {
    return (
      <div className=" flex w-[100vw] h-[100vh] justify-center items-center p-8">
        loading....
      </div>
    );
  }
  return (
    <div className="w-[100vw] h-[100vh] p-4 gap-4">
      {data.jobPostings.map((posting: any) => {
        return <JobCard obj={posting} />;
      })}
    </div>
  );
}
