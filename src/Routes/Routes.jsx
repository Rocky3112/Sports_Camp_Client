import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Instractors from "../Pages/Instractors/Instractors";
import AllClasses from "../Pages/AllClasses/AllClasses";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AdminRoute from "./AdminRoute";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
// import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import SelectedClasses from "../Pages/Dashboard/SelectedClasses/SelectedClasses";
import ErrorPage from "../Layout/ErrorPage";
import Payment from "../Pages/Dashboard/PaymentInfo/Payment";
import EnrolledClasses from "../Pages/Dashboard/EnrolledClasses/EnrolledClasses";
import TotalPaymentsInfo from "../Pages/Dashboard/TotalPaymentsInfo/TotalPaymentsInfo";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
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
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "selectedClasses",
        element: <SelectedClasses></SelectedClasses>
      },
      // {
      //   path: "userhome",
      //   element: <UserHome></UserHome>
      // },
      {
        path: "enrolled",
        element: <EnrolledClasses></EnrolledClasses>
      },
      {
        path: "payment",
        element: <Payment></Payment>
      },
      {
        path: "adminhome",
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: "allusers",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: "totalPaymentsInfo",
        element: <AdminRoute><TotalPaymentsInfo></TotalPaymentsInfo></AdminRoute>
      },
    ]
  }
]);
