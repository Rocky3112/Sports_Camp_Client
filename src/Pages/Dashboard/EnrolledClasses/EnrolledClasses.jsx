import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";



const EnrolledClasses = () => {
    const {user} = useContext(AuthContext);
    const [enroll, setEnroll] = useState([]);
    console.log(enroll);

    useEffect(()=>{
        fetch(`http://localhost:5000/payments?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setEnroll(data)
            // console.log(data);
        })
    },[])
    return (
        <div>
            <h2>EnrolledClassesvvvvvvvvvvvvv</h2>
        </div>
    );
};

export default EnrolledClasses;