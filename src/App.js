import {
  Route,
  Router,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import StartPage from "./pages/StartPage";
import AddJobs from "./pages/AddJobs";
import Jobs from "./pages/Jobs";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import JobDetails, { jobLoader } from "./pages/JobDetails";
import EditJob from "./pages/EditJob";

function App() {
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<StartPage />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route
          path="/jobs/:id"
          element={<JobDetails deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="/add-job" element={<AddJobs addJobSubmit={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJob updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
