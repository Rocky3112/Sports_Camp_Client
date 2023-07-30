import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Instractors from "../Pages/Instractors/Instractors";
import AllClasses from "../Pages/AllClasses/AllClasses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "instractors",
        element: <Instractors></Instractors>,
      },
      {
        path: "allClasses",
        element: <AllClasses></AllClasses>,
      },
    ],
  },
]);
