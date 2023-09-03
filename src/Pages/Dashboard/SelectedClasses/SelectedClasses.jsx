/* eslint-disable no-unused-vars */
import { FaTrashAlt } from "react-icons/fa";
import useSelect from "../../../Hooks/useSelect";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SelectedClasses = () => {

    const [select,refetch] = useSelect()
    console.log(select);

    const total = select.reduce((sum, item) => parseInt(item.price) + sum, 0);


    const handleDelete = (cls)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          })
          .then((result) => {
           fetch(`http://localhost:5000/selects/${cls._id}`, {
            method:'DELETE'
           })
           .then(res=>res.json())
           .then(data=>{
            if(data.deletedCount > 0){
                refetch();
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
            }
           })
           
          })
      }
    return (
        <div className="w-full bg-slate-100">
            <Helmet>
                <title>Sports Camp | Selected Class</title>
            </Helmet>
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">Total Items: {select.length}</h3>
                <h3 className="text-3xl">Total Price: ${total}</h3>
                <Link to='/dashboard/payment'>
                <button className="btn btn-outline hover:btn-warning ">PAY</button>
                </Link>
            </div>
            <div className="overflow-x-auto w-full m-12">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className=" text-center text-xl font-semibold">
                            <th>#</th>
                            <th>class</th>
                            <th>class Name</th>
                            <th className=" text-end">Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className=" text-center">
                        {
                            select.map((cls, index) => <tr
                                key={cls._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-14 h-30">
                                            <img src={cls.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className=" text-lg">
                                    {cls.name}
                                </td>
                                <td className="text-end text-xl">${cls.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(cls)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;