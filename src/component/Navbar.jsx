import React from "react";
import { Link } from "react-router-dom";
import logo from "D:/AgIT/react-jobs/src/images/React_(web_framework)-Logo.wine.png";

function Navbar() {
  return (
    <>
      <nav className="bg-indigo-800 border-b border-indigo-600 text-white">
        <ul className="grid  grid-rows-1 grid-cols-2 mx-20 ">
          <div className="flex items-center ">
            <Link to="/">
              <li className="p-5">
                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                  <image href={logo} width="50" height="50" alt="" />
                </svg>
              </li>
            </Link>
            <Link to="/">
              <li className="p-5 text-2xl font-bold">
                <h1>React Jobs</h1>
              </li>
            </Link>
          </div>
          <div className="flex flex-row-reverse items-center font-medium">
          <Link to="/add-job">
              <li className="mx-3 active:bg-black active:p-2  rounded-md">Add Job</li>
            </Link>
            <Link to="/jobs">
              <li className="mx-3 active:bg-black active:p-2 rounded-md">Jobs</li>
            </Link>
            <Link to="/">
              <li className="mx-3 active:bg-black active:p-2 rounded-md">Home</li>
            </Link>
           
            
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
