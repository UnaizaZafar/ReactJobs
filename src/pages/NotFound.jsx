import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <div className="flex mx-auto gap-4 w-full items-center justify-center flex-col p-4">
        <FaExclamationTriangle className="text-yellow-400 text-6xl" />
        <h1 className="text-6xl font-bold ">404 Not Found</h1>
        <p className="text-xl ">This page does not exist</p>
        <Link href='/' className="text-white bg-indigo-700 w-max hover:bg-indigo-900 rounded px-4 py-2">Go Back</Link>
      </div>
    </>
  );
};

export default NotFound;
