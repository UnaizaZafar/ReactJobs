 import './App.css';
import Hero from "./component/Hero"
import HomeCards from './component/HomeCards';
import JobsListing from './component/JobsListing';
import ViewAllJobs from './component/ViewAllJobs';
function App() {
  return (
   <>
       <Hero title="Become a React Dev" subtitle="Find the React job that fits your skills and needs"/>
      <HomeCards/>
      <JobsListing/>
      <ViewAllJobs/>
   </>
  );
}

export default App;
