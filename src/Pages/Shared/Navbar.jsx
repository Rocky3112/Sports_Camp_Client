
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import { FaShoppingCart } from "react-icons/fa";
import useSelect from "../../Hooks/useSelect";

// import { FaShoppingCart } from 'react-icons/fa';


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [select] = useSelect();
  // console.log(user);
  const [isAdmin] = useAdmin()
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="navbar fixed bg-opacity-50 z-10 font-semibold text-white bg-black  mx-auto">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
             <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/instractors">Instractors</Link>
              </li>
              <li>
                <Link to="/allClasses">All Classes</Link>
              </li>
              {
                isAdmin ? <li>
                <Link to='/dashboard/adminhome'>Dashboard</Link>
              </li> :
              <li>
              <Link to='/dashboard/selectedClasses' >Dashboard</Link>
            </li>
              }
               {
                user && !isAdmin? (
                  <Link to="/dashboard/selectedClasses">
                
                <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-secondary">+{select?.length || 0}</div>
             
            </Link>
                ):
                (
                  ''
                )
               }
              {user ? (
                <>
                  <img className=" h-10 rounded-full mx-2" src={user?.photoURL} alt="" />
                  <button onClick={handleLogOut} className="btn btn-ghost">
                    Log-Out
                  </button>
                </>
              ) : (
                <>
                  <li>
                    <Link to="login">Login</Link>
                  </li>
                </>
              )}
            
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl">
            Sports <span className=" text-orange-500">Camp</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-base">
          <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/instractors">Instractors</Link>
              </li>
              <li>
                <Link to="/allClasses">All Classes</Link>
              </li>
              {
                isAdmin ? <li>
                <Link to='/dashboard/adminhome'>Dashboard</Link>
              </li> :
              <li>
              <Link to='/dashboard/selectedClasses' >Dashboard</Link>
            </li>
              }
               {
                user && !isAdmin? (
                  <Link to="/dashboard/selectedClasses">
                
                <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-secondary">+{select?.length || 0}</div>
             
            </Link>
                ):
                (
                  ''
                )
               }
              {user ? (
                <>
                  <img className=" h-10 rounded-full mx-2" src={user?.photoURL} alt="" />
                  <button onClick={handleLogOut} className="btn btn-ghost">
                    Log-Out
                  </button>
                </>
              ) : (
                <>
                  <li>
                    <Link to="login">Login</Link>
                  </li>
                </>
              )}
            
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline border-white text-white hover:bg-white hover:text-black">Blog</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
