import React from "react";
import jobs from "../jobs.json";
import JobList from "./JobList";
function JobsListing() {
  console.log("Jobs ", jobs);
  const recentJobs = jobs.slice(0, 3);
  return (
    <>
    <div className=" bg-gray-100 p-5 mt-5 ">
    <h1 className="text-4xl mt-6 font-bold text-indigo-700 text-center">Browse Jobs</h1>
    
      <div className="grid mx-16 p-5 grid-cols-3 ">
      
        {jobs.map((xyz) => {
          return (
            <>
              <JobList key={xyz.id} job={xyz} />
            </>
          );
        })}
      </div>
      </div>
    </>
  );
}

export default JobsListing;
