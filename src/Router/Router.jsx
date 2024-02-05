import { createBrowserRouter } from "react-router-dom";

import Error from "../Pages/Error";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";
import AboutMe from "../Pages/AboutMe";
import Contact from "../Pages/Contact";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutMe></AboutMe>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default Router;
