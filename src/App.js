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


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<StartPage />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/:id" element={<JobDetails />} loader={jobLoader}/>
      <Route path="/add-job" element={<AddJobs />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
