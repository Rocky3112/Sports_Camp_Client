/* eslint-disable react/prop-types */

import "./ActiveLink.css";
import { NavLink } from "react-router-dom";
const ActiveLink = ({ to, children }) => {
  return (
    <NavLink style={{padding:'0', marginRight:'25px'}} to={to} className={({ isActive }) => (isActive ? "active" : "") }>
      {children}
    </NavLink>
  );
};

export default ActiveLink;