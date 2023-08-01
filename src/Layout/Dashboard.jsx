import { NavLink, Outlet } from "react-router-dom";
import {
  
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUsers,
  FaUser
} from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
  // const isAdmin = true;
  const [isAdmin]=useAdmin();
 
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-slate-300">
            {/* Sidebar content here */}
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/adminhome">
                    <FaHome></FaHome> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageClasses">
                     <FaUser></FaUser>Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allusers">
                    <FaUsers></FaUsers> Manage Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/userhome">
                    <FaHome></FaHome> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/selectedClasses">
                     Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/history">
                     Enrolled Classes
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider text-white"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>{" "}
            </li>
            <li>
              <NavLink to="/allClasses"><FaUser></FaUser>All classes</NavLink>
            </li>
            {/* <li>
              <NavLink to="/order/salad">Order Food</NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
