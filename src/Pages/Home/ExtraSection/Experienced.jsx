import { HiOutlineLightBulb } from "react-icons/hi";
import aboutImg from '../../../assets/images/about-1.webp'

const Experienced = () => {
    return (
        <div className="lg:px-32 md:px-28 sm:px-18 px-12">
            <div className="flex items-center gap-7">
                <div className="w-1/2">
                    <img src={aboutImg} alt=""  className="h-[500px] w-full" />
                </div>

                <div className='lg:mt-[25vh] w-1/2'>
                    <p className='text-[#CDB30C] uppercase text-sm font-medium'>welcome to Sport Academy</p>
                    <h2 className='py-4 lg:text-4xl md:text-4xl sm:text-4xl text-2xl font-bold lg:w-[60%] leading-snug'>HIGHEST CREATIVE STANDARDS</h2>
                    <p className='leading-7 text-[#5c5c5c]'>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
                    </p>

                    <div className='bg-[#CDB30C] px-4 py-8 flex items-center gap-4 lg:mt-16 mt-4 lg:ml-[-26vh]'>
                          <div className='py-4 px-4 text-2xl text-[#fff] bg-[#262626] rounded-full'>
                            <p><HiOutlineLightBulb /></p>
                          </div>
                          <div>
                            <p className='text-4xl font-bold text-[#fff]'>42</p>
                            <p className='py-1 text-[#fff] font-bold'>YEAR OF EXPERIENCED</p>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Experienced