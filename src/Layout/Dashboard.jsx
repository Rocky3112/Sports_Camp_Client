
import { Link, Outlet } from 'react-router-dom'
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    // const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="toolDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-4">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="toolDrawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-300 rounded-md text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Profile</Link></li>
                        {!isAdmin && <>
                            <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                            <li><Link to='/dashboard/addreview'>Add a Review</Link></li>
                        </>}
                        {isAdmin && <>
                            <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                            <li><Link to='/dashboard/manageProducts'>Manage Products</Link></li>
                            <li><Link to='/dashboard/manageOrders'>Manage All Orders</Link></li>
                            <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
                        </>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;