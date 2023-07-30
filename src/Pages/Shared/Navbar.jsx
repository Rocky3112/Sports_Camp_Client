
import { Link } from "react-router-dom";

// import { FaShoppingCart } from 'react-icons/fa';


const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const handleLogOut = () => {
//     logOut()
//       .then(() => {})
//       .catch((error) => console.log(error));
//   };
  return (
    <div>
      <div className="navbar fixed bg-opacity-30 z-10 text-white bg-black max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/classes">Classes</Link>
              </li>
              <li>
                <Link to="/">Enrolled Classes</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl">
            Sports <span className=" text-orange-500">Camp</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/classes">Classes</Link>
              </li>
              <li>
                <Link to="/instractors">Instractors</Link>
              </li>
              <li>
                <Link to="/allClasses">All Classes</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
