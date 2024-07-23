import React from 'react'

function JobList({job}) {
  return (
   <>
  
    <div className="bg-white rounded-xl p-6 m-5 shadow-md relative">
          <div className="p-4">
            <div className="mb-6">
              <div className="text-gray-600 my-2">{job.type}</div>
              <h3 className="text-xl font-bold"> {job.title} </h3>
            </div>
            <div className="mb-5">
                {job.Description}
            </div>
            <h3 className="text-indigo-700 mb-2"> {job.salary} / Year </h3>
            <div className=" mb-5"> <hr /> </div>
            <div className="flex lg:flex-row justify-between mb-4 align-middle">
                <div className="text-orange-700">
                    <i className="text-lg"> {job.location} </i>
                </div>
            <a href={`/job/${job.id}`} className="h-{36px} bg-indigo-700 hover:bg-indigo-700 text-white p-2 rounded-lg text-sm">
                Read More
            </a>
            </div>
          </div>
        </div>
   </>
  )
}

export default JobList