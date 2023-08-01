import useClasses from "../../Hooks/useClasses";
import DisplayAllClasses from "./DisplayAllClasses";

const AllClasses = () => {
    const [classes] = useClasses()

    return (
        <div>
            <section className="my-10">
        

        </section>

        <div className=" grid md:grid-cols-3 gap-4">
            {
                classes.map(cls =><DisplayAllClasses
                key ={cls._id}
                cls ={cls}
                ></DisplayAllClasses>)
            }
        </div>
        </div>
    );
};

export default AllClasses;