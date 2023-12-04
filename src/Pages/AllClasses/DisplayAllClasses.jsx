/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useSelect from "../../Hooks/useSelect";
import Swal from "sweetalert2";

const DisplayAllClasses = ({cls}) => {
    // console.log(cls);
    const { name, image, phone, email, details,instructor,seats,price,_id } = cls;
    // const {name, image,price,recipe,_id } = cls;
    const {user} =useContext(AuthContext);
    const navigate =useNavigate();
    const location = useLocation();
    const [, refetch]=useSelect();

    // eslint-disable-next-line no-unused-vars
    const handleAddToSelectClasses = cls =>{
      // console.log(cls);
      if(user && user.email){
        const selectClass ={selectClassId: _id, name,price,image, email:user.email}
        fetch('http://localhost:5000/selects',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(selectClass)

        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Selected',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
}
else{
    Swal.fire({
        title: 'Please login to select class',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}})
        }
      })
}
}
    return (
      <div className="">
        <div className="card card-compact w-96 bg-base-100 shadow-xl  h-[600px] p-4">
          <figure>
            <img className="rounded-xl"
              src={image}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{details}</p>
            <h2 className=" p-1">{email}</h2>
            <h2>{phone}</h2>
            <h2 className="text-2xl text-slate-900 font-semibold">Instractor Name {instructor}</h2>
            <div className="flex text-lg text-orange-700 font-semibold">
                {/* <p>Available seats : {seats}</p> */}
                <p>Course Fee : {price}</p>
            </div>
            <button onClick={ ()=>handleAddToSelectClasses(cls)} className="btn btn-outline ">Select Now</button>
          </div>
        </div>
      </div>
    );
  };
  

export default DisplayAllClasses;