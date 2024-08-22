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
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<StartPage />} />
      <Route path="/jobs" element={<StartPage />} />
      <Route path="/add-job" element={<StartPage />} />

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
