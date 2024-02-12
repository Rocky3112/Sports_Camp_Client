import { Swiper, SwiperSlide } from 'swiper/react';
import { Slide, Fade } from "react-awesome-reveal";
import { Navigation, Pagination, History } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { useEffect, useState } from 'react';
import Rating from 'react-rating';
import RatingStar from './RatingStar';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <div className='mt-14'>
            <div>
                <p className='text-center text-3xl font-bold font-serif text-rose-800 md:-mb-16'>
                    <Fade duration={1000} cascade damping={1e-1}>
                        Our Students Says
                    </Fade>
                </p>
            </div>

            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination
                modules={[Navigation, Pagination, History]} // Use modules prop
                className="mySwiper"
            >
                {reviews.map(review => (
                    <SwiperSlide key={review.id} data-history="1">
                        <div className='flex flex-col items-center md:mt-12'>
                            <div className='text-[#F26924] text-lg py-10'>
                                <RatingStar rating={review.rating} ></RatingStar>
                            </div>
                            <Slide>
                                <Fade duration={1000} cascade damping={1e-1}>
                                    <p className='mx-auto w-9/12'>{review.details}</p>
                                </Fade>
                            </Slide>
                            <h3 className='text-2xl font-serif mt-2'>{review.name}</h3>
                            <div className='w-36 h-36 flex justify-center items-center'>
                                <img className='rounded-xl mt-4' src={review.image} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Review;
