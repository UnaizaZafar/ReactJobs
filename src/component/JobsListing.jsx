import React from "react";
import { useState, useEffect } from "react";
import Spinners from "./Spinners";
import JobCards from "./JobCards";
const JobsListing = ({ isHome = false }) => {
  // const JobsListing = isHome ? jobs.slice(0, 3) : jobs;
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchJobs = async () => {
      const apiURL = isHome
        ? "/api/jobs?_limit=3"
        : "/api/jobs";
      try {
        const res = await fetch(apiURL);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);
  return (
    <>
      <div className=" bg-gray-100 p-5 pt-8 ">
        <h2 className="text-4xl mt-6 font-bold text-indigo-700 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {loading ? (
          <Spinners loading={loading} />
        ) : (
          <div className="flex flex-wrap gap-4 p-5 justify-center ">
            {jobs.map((job) => (
              <JobCards key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default JobsListing;
