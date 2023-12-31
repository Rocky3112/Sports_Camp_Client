import {  useEffect, useState } from "react";
// import { AuthContext } from "../../../Providers/AuthProvider";


const TotalPaymentsInfo = () => {

    // const {user} = useContext(AuthContext);
    const [payment, setPayment] = useState([]);
    console.log(payment);

    useEffect(()=>{
        fetch(`https://sports-camp-server-lemon.vercel.app/payments`)
        .then(res=>res.json())
        .then(data=>{
            setPayment(data)
            // console.log(data);
        })
    },[])
    return (
        <div>
            <h2 className=" text-4xl text-amber-500 px-8">Total payments Information</h2>

            <div className=" p-8">
                <table className="table table-zebra ">
                    {/* head */}
                    <thead>
                        <tr className="">
                            <th className="gap-7">SL</th>
                            <th>Email</th>
                            <th>transactionId</th>
                            <th>Enrolled Classes</th>
                            <th>Date</th>
                            <th>Paid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payment.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td>{user.transactionId}</td>
                                <td>{user.itemNames}</td>
                                <td>{user.date}</td>
                                <td>{user.price}</td>
                                
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TotalPaymentsInfo;