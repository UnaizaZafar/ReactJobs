import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams, useLoaderData } from "react-router-dom";

const EditJob = ({ updateJobSubmit }) => {
  const job = useLoaderData();
  const [title, setTitle] = useState(job.title);
  const [type, setType] = useState(job.type);
  const [location, setLocation] = useState(job.location);
  const [description, setDescription] = useState(job.Description);
  const [salary, setSalary] = useState(job.salary);
  const [companyName, setCompanyName] = useState(job.company.name);
  const [companyDescription, setCompanyDescription] = useState(
    job.company.description
  );
  const [companyEmail, setCompanyEmail] = useState(job.company.contactEmail);
  const [companyPhone, setCompanyPhone] = useState(job.company.contactPhone);
  const navigate = useNavigate();
  const { id } = useParams();
  const submitForm = (e) => {
    e.preventDefault();
    const updatedJob = {
      id,
      title,
      type,
      location,
      Description: description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail: companyEmail,
        contactPhone: companyPhone,
      },
    };
    updateJobSubmit(updatedJob);

    toast.success("Job Updated Successfully!");

    return navigate(`/jobs/${id}`);
  };

  return (
    <>
      <div className="bg-indigo-100 w-full p-9 ">
        <form
          onSubmit={submitForm}
          className="bg-white rounded-md flex flex-col gap-2 mx-auto  w-full max-w-3xl shadow-sm p-6"
        >
          <h1 className="text-3xl font-bold text-center">Update Job</h1>
          <label htmlFor="" className="font-bold text-base">
            Job Type
          </label>
          <select
            name="jobType"
            id="jobType"
            className="p-2 border rounded text-gray-700"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="Full-time">Full-Time</option>
            <option value="Part-time">Part-Time</option>
            <option value="Remote">Remote </option>
            <option value="Internship">Internship </option>
          </select>
          <label htmlFor="" className="font-bold text-base">
            Job Listing Name
          </label>
          <input
            type="text"
            className="border p-2 rounded"
            placeholder="eg. Beautiful Apartment in Miami"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="" className="font-bold text-base">
            Description
          </label>
          <textarea
            name=""
            placeholder="Add any job duties, expectations, requirements, etc"
            className="border p-2 rounded"
            id=""
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label htmlFor="" className="font-bold text-base">
            Salary
          </label>
          <select
            name="jobType"
            id="jobType"
            className="p-2 border rounded text-gray-700"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
          >
            <option value="under $50K">under $50K</option>
            <option value="equal to $50K">equal to $50K</option>
            <option value="above $50K">above $50K </option>
          </select>
          <label htmlFor="" className="font-bold text-base">
            Location
          </label>
          <input
            type="text"
            className="border p-2 rounded"
            placeholder="Company Location"
            value={location}
            required
            onChange={(e) => setLocation(e.target.value)}
          />
          <legend className="text-2xl font-semibold">Company Info</legend>
          <label htmlFor="" className="font-bold text-base">
            Company Name
          </label>
          <input
            type="text"
            className="border p-2 rounded"
            placeholder="Company Name"
            value={companyName}
            required
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <label htmlFor="" className="font-bold text-base">
            Company Description
          </label>
          <input
            type="text"
            className="border p-2 rounded"
            placeholder="Company Description"
            value={companyDescription}
            required
            onChange={(e) => setCompanyDescription(e.target.value)}
          />
          <label htmlFor="" className="font-bold text-base">
            Company Email
          </label>
          <input
            type="text"
            className="border p-2 rounded"
            placeholder="Company Email"
            value={companyEmail}
            required
            onChange={(e) => setCompanyEmail(e.target.value)}
          />
          <label htmlFor="" className="font-bold text-base">
            Company Phone Number
          </label>
          <input
            type="text"
            className="border p-2 rounded"
            placeholder="Company Phone Number"
            value={companyPhone}
            required
            onChange={(e) => setCompanyPhone(e.target.value)}
          />
          <button
            type="submit"
            className=" flex items-end rounded-xl w-max bg-indigo-600 text-white p-2"
          >
            Update Job
          </button>
        </form>
      </div>
    </>
  );
};

export default EditJob;
