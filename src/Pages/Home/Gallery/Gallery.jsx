import pic1 from '../../../assets/images/Forest.jpg'
import pic2 from '../../../assets/images/hiking.jpg'
import pic3 from '../../../assets/images/image4.jpeg'
import pic4 from '../../../assets/images/img-2.webp'
import pic5 from '../../../assets/images/img-4.webp'
import pic6 from '../../../assets/images/keyekingjpg.jpg'
import pic7 from '../../../assets/images/Mountain.jpeg'
import pic8 from '../../../assets/images/img-3.webp'
import PartTitle from '../../../components/PartTitle/PartTitle'

const Gallery = () => {
    return (
        <div>
            <div className="my-20 mx-10">
           <PartTitle heading={'Photo Gallery'}></PartTitle>
            <div className=" relative  grid lg:grid-cols-4 sm:grid-cols-1 gap-7 justify-between"> 
            <img className="transition-transform duration-300 w-full lg:w-64 lg:h-64 hover:scale-110 rounded-lg" src={pic1} alt="" />
            <img className="transition-transform duration-300 w-full lg:w-64 lg:h-64 hover:scale-110 rounded-lg" src={pic2} alt="" />
            <img className="transition-transform duration-300 w-full lg:w-64 lg:h-64 hover:scale-110 rounded-lg" src={pic3} alt="" />
            <img className="transition-transform duration-300 w-full lg:w-64 lg:h-64 hover:scale-110 rounded-lg" src={pic4} alt="" />
            <img className="transition-transform duration-300 w-full lg:w-64 lg:h-64 hover:scale-110 rounded-lg" src={pic5} alt="" />
            <img className="transition-transform duration-300 w-full lg:w-64 lg:h-64 hover:scale-110 rounded-lg" src={pic6} alt="" />
            <img className="transition-transform duration-300 w-full lg:w-64 lg:h-64 hover:scale-110 rounded-lg" src={pic7} alt="" />
            <img className="transition-transform duration-300 w-full lg:w-64 lg:h-64 hover:scale-110 rounded-lg" src={pic8} alt="" />
        </div>
        </div>
        </div>
    );
};

export default Gallery;