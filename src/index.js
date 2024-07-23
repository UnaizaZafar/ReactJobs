import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Jobs from "./pages/Jobs";
import AddJobs from "./pages/AddJobs";
import Navbar from "./component/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
      <App/>
      </>
    ),
  },
  {
    path: "/jobs",
    element: (
      <>
        <Navbar />
        <Jobs />
      </>
    ),
  },
  {
    path: "/add-job",
    element: (
      <>
        <Navbar />
        <AddJobs />
      </>
    ),
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
