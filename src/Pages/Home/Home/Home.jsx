// import Banner from "../Banner/Banner";
import Bannert from "../Banner/Bannert";
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import GuideLine from "../GuideLine/GuideLine";
import InstractorsPage from "../InstractorsPage/InstractorsPage";
import PopularClasses from "../PopularClasses/PopularClasses";
import PreviousCamp from "../PreviousCamp/PreviousCamp";

const Home = () => {
    return (
        <div className="">
            {/* <Banner></Banner> */}
            <Bannert></Bannert>
            <div className="lg:px-12 ">
            <PreviousCamp></PreviousCamp>
            <PopularClasses></PopularClasses>
            <InstractorsPage></InstractorsPage>
            <GuideLine></GuideLine>
            <Gallery></Gallery>
            <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;