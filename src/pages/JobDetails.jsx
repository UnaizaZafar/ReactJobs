import React from "react";
import { Link, useNavigate, useParams, useLoaderData } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import { toast } from "react-toastify";
const JobDetails = ({ deleteJob }) => {
  const { id } = useParams();
  const job = useLoaderData();
  const navigate = useNavigate();

  const onDeleteClick = (jobId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this job posting?"
    );
    if (!confirm) return;
    deleteJob(jobId);
    toast.success("Job Deleted Successfully!");
    navigate("/jobs");
  };
  return (
    <>
      <div className="w-full bg-white flex h-max items-center gap-3 p-3 text-indigo-600">
        <IoMdArrowRoundBack />
        <Link to="/jobs">Back to Job Listings</Link>
      </div>
      <div className="flex p-8 gap-4 bg-indigo-100">
        <div className=" flex flex-col gap-4  w-full max-w-7xl">
          <div className="bg-white flex flex-col gap-3 shadow-md p-5 rounded">
            <p className="text-gray-700 text-base">{job.type}</p>
            <h1 className="text-4xl font-bold">{job.title}</h1>
            <p className="flex text-base items-center gap-2 text-red-700">
              <FaLocationDot /> {job.location}
            </p>
          </div>
          <div className="bg-white flex flex-col gap-3 shadow-md p-5 rounded">
            <h2 className="text-indigo-900 text-lg font-bold">
              Job Description
            </h2>
            <p className="text-gray-700 text-base">{job.Description}</p>
            <h2 className="text-indigo-900 text-lg font-bold">Salary</h2>

            <p className="text-gray-700 text-base">{job.salary}</p>
          </div>
        </div>
        <div className="flex flex-col  w-full max-w-md gap-4">
          <div className="bg-white flex rounded-lg flex-col p-8 gap-3 shadow-md ">
            <h2 className="font-extrabold text-base">Company Info</h2>
            <h1 className="font-bold text-2xl">{job.company.name}</h1>
            <p>{job.company.description}</p>
            <hr />
            <h2 className="text-xl font-medium"> Contact Email:</h2>
            <p className="bg-indigo-200 font-extrabold p-2">
              {job.company.contactEmail}
            </p>

            <h2 className="text-xl font-medium"> Contact Phone:</h2>
            <p className="bg-indigo-200 font-extrabold p-2">
              {job.company.contactPhone}
            </p>
          </div>
          <div className="bg-white flex flex-col rounded-lg p-8 gap-3 shadow-md ">
            <h1 className="font-extrabold text-lg">Manage Job</h1>
            <Link
              to={`/edit-job/${job.id}`}
              className="bg-indigo-700 text-white px-2 py-1 font-medium rounded-2xl text-center"
            >
              Edit Job
            </Link>
            <Link
              to=""
              onClick={() => onDeleteClick(job.id)}
              className="bg-red-700 text-white px-2 py-1 font-medium rounded-2xl text-center"
            >
              Delete Job
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};
export { JobDetails as default, jobLoader };
