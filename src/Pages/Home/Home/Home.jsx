import Banner from "../Banner/Banner";
import InstractorsPage from "../InstractorsPage/InstractorsPage";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <InstractorsPage></InstractorsPage>
        </div>
    );
};

export default Home;