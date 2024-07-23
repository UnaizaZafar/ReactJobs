import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/React_(web_framework)-Logo.wine.png";

function Navbar() {
  return (
    <>
      <nav className="bg-indigo-800 border-b border-indigo-600 text-white">
        <ul className="grid  grid-rows-1 grid-cols-2 mx-20 ">
          <div className="flex items-center ">
            <NavLink to="/">
              <li className="p-5">
                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                  <image href={logo} width="50" height="50" alt="" />
                </svg>
              </li>
            </NavLink>
            <NavLink to="/">
              <li className="p-5 text-2xl font-bold">
                <h1>React Jobs</h1>
              </li>
            </NavLink>
          </div>
          <div className="flex flex-row-reverse items-center font-medium">
            <NavLink
              to="/add-job"
              style={({ isActive }) => {
                return {
                  background: isActive ? "black" : "",
                  padding: isActive ? "6px" : "",
                  borderRadius: isActive ? "8px" : "",
                };
              }}
            >
               <li className="mx-3 active:bg-black active:p-2 rounded-md">
              Add Job</li>
            </NavLink>
            <NavLink
              to="/jobs"
              style={({ isActive }) => {
                return {
                  background: isActive ? "black" : "",
                  padding: isActive ? "6px" : "",
                  borderRadius: isActive ? "8px" : "",
                };
              }}
            >
              <li className="mx-3 active:bg-black active:p-2 rounded-md">
                Jobs
              </li>
            </NavLink>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  background: isActive ? "black" : "",
                  padding: isActive ? "6px" : "",
                  borderRadius: isActive ? "8px" : "",
                };
              }}
            >
              <li className="mx-3 active:bg-black active:p-2 rounded-md">
                Home
              </li>
            </NavLink>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
