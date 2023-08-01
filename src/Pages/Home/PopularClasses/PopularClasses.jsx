import { Link } from "react-router-dom";
import useClasses from "../../../Hooks/useClasses";
import PartTitle from "../../../components/PartTitle/PartTitle";
import DisplayPopular from "./DisplayPopular";


const PopularClasses = () => {

    const [classes] = useClasses()
    // console.log(classes);

   
    const popular = classes.filter(item=>item.category=== 'popular')
    return (
        <div>
            <section className="my-10">
        <PartTitle
        heading={"Popular Classes"}
        ></PartTitle>

        </section>

        <div className=" grid md:grid-cols-3 gap-4">
            {
                popular.map(item =><DisplayPopular
                key ={item._id}
                item ={item}
                ></DisplayPopular>)
            }
        </div>
        <div className="text-center">
        <Link to ='/allClasses'>
        <button  className="uppercase btn btn-outline my-3 border-0 border-b-2  mx-auto">View All Classes</button>
        </Link>
        </div>
        </div>
    );
};

export default PopularClasses;