import React from 'react'
import Hero from '../component/Hero'
import HomeCards from '../component/HomeCards'
function StartPage() {
  return (
    <div>
      <Hero title="Become a React Dev" subtitle="Find the React job that fits your skills and needs"/>
      <HomeCards/>
    </div>
  )
}

export default StartPage