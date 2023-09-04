// import Banner from "../Banner/Banner";
import Bannert from "../Banner/Bannert";
import Contact from "../Contact/Contact";
import InstractorsPage from "../InstractorsPage/InstractorsPage";
import PopularClasses from "../PopularClasses/PopularClasses";
import PreviousCamp from "../PreviousCamp/PreviousCamp";

const Home = () => {
    return (
        <div>
            {/* <Banner></Banner> */}
            <Bannert></Bannert>
            <PreviousCamp></PreviousCamp>
            <PopularClasses></PopularClasses>
            <InstractorsPage></InstractorsPage>
            <Contact></Contact>
        </div>
    );
};

export default Home;