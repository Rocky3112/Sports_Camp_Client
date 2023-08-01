import { FaTrashAlt } from "react-icons/fa";
import useSelect from "../../../Hooks/useSelect";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const SelectedClasses = () => {

    const [select] = useSelect()
    console.log(select);

    const total = select.reduce((sum, item) => parseInt(item.price) + sum, 0);


    const handleDelete = (cls)=>{

    }
    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | Selected Class</title>
            </Helmet>
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">Total Items: {select.length}</h3>
                <h3 className="text-3xl">Total Price: ${total}</h3>
                <Link to='/dashboard/payment'>
                <button className="btn btn-outline hover:btn-warning ">PAY</button>
                </Link>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>class</th>
                            <th>class Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;