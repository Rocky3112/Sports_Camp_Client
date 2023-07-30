import useClasses from "../../../Hooks/useClasses";
import PartTitle from "../../../components/PartTitle/PartTitle";

const PopularClasses = () => {

    const [classes] = useClasses()
    console.log(classes);
    return (
        <div>
            <section className="my-10">
        <PartTitle
        heading={"Popular Classes"}
        ></PartTitle>

        </section>
        </div>
    );
};

export default PopularClasses;