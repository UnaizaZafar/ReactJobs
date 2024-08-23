import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
function JobCards({ job }) {
  const [showMore, setShowMore] = useState(false);
  let Description = job.Description;
  if (!showMore) {
    Description = Description.substring(0, 90) + "...";
  }
  return (
    <>
      <div className="bg-white rounded-xl p-4 w-full max-w-[400px] shadow-md flex gap-4">
        <div className="p-4">
          <div className="mb-6">
            <div className="text-gray-600 my-2">{job.type}</div>
            <h3 className="text-xl font-bold"> {job.title} </h3>
          </div>
          <div className="mb-5">{Description}</div>
          <button onClick={()=>setShowMore((prevState)=>(!prevState))} className="text-indigo-500 mb-5 hover:text-indigo-600">
            {showMore ? "Less " : "More"}
          </button>
          <h3 className="text-indigo-700 mb-2"> {job.salary} / Year </h3>
          <div className=" mb-5">
            {" "}
            <hr />{" "}
          </div>
          <div className="flex lg:flex-row justify-between mb-4 align-middle">
            <div className="text-orange-700 flex items-center gap-1">
            <FaLocationDot />
               {job.location}
            </div>
            <Link
              to={`/jobs/${job.id}`}
              className="h-{36px} bg-indigo-700 hover:bg-indigo-700 text-white p-2 rounded-lg text-sm"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobCards;
