import React from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";
function HomeCards() {
  return (
    <>
      <div className="flex justify-center mt-5">
        <Cards>
          <h2 className="text-2xl font-bold">For Developers</h2>
          <p className="mt-2 mb-4">
            Browse our React Jobs and start your career today!
          </p>
          <div className=" bg-black p-3 text-white w-fit rounded-lg mt-2 mb-4"> 
            <Link to='/jobs'>Browse Jobs</Link>
            </div>
          {/* <Buttons>
            <h2>Browse Jobs</h2>
          </Buttons>
          */}
        </Cards>
        <Cards bg="bg-indigo-100">
          <h2 className="text-2xl font-bold">For Employers</h2>
          <p className="mt-2 mb-4">
            List your job to find the perfect developer for the role!
          </p>
          <div className=" bg-indigo-700 p-3 text-white w-fit rounded-lg mt-2 mb-4"> 
            <Link to='/add-job'>Add Job</Link>
            </div>
          {/* <Buttons bg="bg-indigo-700">
           <h2>Add Job</h2>
          </Buttons> */}
        </Cards>
      </div>
    </>
  );
}

export default HomeCards;
