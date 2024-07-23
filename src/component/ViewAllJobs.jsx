import React from 'react'
import { Link } from "react-router-dom";

const ViewAllJobs = () => {
  return (
   <>
    <div className='flex bg-white p-10 justify-center'>
        <Link to={"/jobs"} className='text-center'>
          <p className='bg-black text-center p-3 w-64 rounded-lg text-white'>
          View All Jobs
          </p>
         
        </Link>
    </div>
   </>
    
  )
}

export default ViewAllJobs