import React from 'react'
import Hero from "../component/Hero";

import HomeCards from "../component/HomeCards";
import JobsListing from "../component/JobsListing";
import ViewAllJobs from "../component/ViewAllJobs";

function StartPage() {
  return (
    <div>
  <Hero
        title="Become a React Dev"
        subtitle="Find the React job that fits your skills and needs"
      />
      <HomeCards />
      <JobsListing />
      <ViewAllJobs />
    </div>
  )
}

export default StartPage