import { Link } from "react-router-dom";
import useInstractors from "../../../Hooks/useInstractors";
import PartTitle from "../../../components/PartTitle/PartTitle";
import DisplayInstractors from "./DisplayInstractors";

const InstractorsPage = () => {
    const [instractors] = useInstractors()
    // console.log(instractors);

   
    const popular = instractors.filter(item=>item.category=== 'popular')
    return (
        <div>
            <section className="my-10">
        <PartTitle
        heading={"Popular Instractors"}
        ></PartTitle>

        </section>

        <div className=" grid md:grid-cols-3 gap-3">
            {
                popular.map(item =><DisplayInstractors
                key ={item._id}
                item ={item}
                ></DisplayInstractors>)
            }
        </div>
        <div className="text-center">
        <Link to ='/instractors'>
        <button  className="uppercase btn btn-outline my-3 border-0 border-b-2  mx-auto">View All Instractors</button>
        </Link>
        </div>
        </div>
    );
};

export default InstractorsPage;