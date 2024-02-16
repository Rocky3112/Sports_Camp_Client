import { useEffect } from "react";
import useInstractors from "../../Hooks/useInstractors";
import DisplayInstractors from "../Home/InstractorsPage/DisplayInstractors";

const Instractors = () => {
    const [instractors]= useInstractors()
    useEffect(() => {
        window.scrollTo(0,0);   
    },[])
    return (
        <div className=" grid md:grid-cols-3 gap-4 px-5">
        {
            instractors.map(item =><DisplayInstractors
            key ={item._id}
            item ={item}
            ></DisplayInstractors>)
        }
    </div>
    );
};

export default Instractors;