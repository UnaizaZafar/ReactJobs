import React from "react";
import Cards from "./Cards";
import Buttons from "./Buttons";
function HomeCards() {
  return (
    <>
      <div className="flex justify-center">
        <Cards>
          <h2 className="text-2xl font-bold">For Developers</h2>
          <p className="mt-2 mb-4">
            Browse our React Jobs and start your career today!
          </p>
          <Buttons>
            <p className="mt-2 mb-4 text-white"> Browse Jobs</p>
          </Buttons>
        </Cards>
        <Cards bg="bg-indigo-100">
          <h2 className="text-2xl font-bold">For Employers</h2>
          <p className="mt-2 mb-4">
            List your job to find the perfect developer for the role!
          </p>
          
          <Buttons bg="bg-indigo-700">
            <p className="mt-2 mb-4 text-white">Add Job</p>
          </Buttons>
        </Cards>
      </div>
    </>
  );
}

export default HomeCards;
