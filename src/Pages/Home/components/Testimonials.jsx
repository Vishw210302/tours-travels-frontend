import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { useGetTestimonialQuery } from '../../../Api/Api';
import StarIcon from '@mui/icons-material/Star';
import testimonialImage from "../../../assets/image.jpg";

const Testimonials = () => {
    const { isError, error, data, isLoading, isSuccess } = useGetTestimonialQuery();
    const [testimonialListing, setTestimonialListing] = useState([]);

    useEffect(() => {
        if (isSuccess) {
            setTestimonialListing(data?.data);
        } else if (isError) {
            console.log("error", isError);
        }
    }, [error, data, isSuccess, isError]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className='p-3 bg-[#f7f7f7]'>
                <Slider {...settings}>
                    {testimonialListing && testimonialListing.map((items, index) => {
                        return (
                            <div className='w-[100%]' key={index}>
                                <div className='card mt-10 bg-white shadow-[0_.5rem_1rem_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-lg p-1 my-2 relative  w-[480px] h-[150px] rounded-xl'>
                                    <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden w-[70px] h-[70px]'>
                                        <img
                                            src={testimonialImage}
                                            alt='review_image'
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                    <div className='mt-[40px]'>
                                        <div className='text-center'>
                                            <span className='text-lg'>{items?.reviewPersonName}</span>
                                        </div>
                                        <div className='text-center'>
                                            <StarIcon sx={{ color: '#f9d41e' }} />
                                            <StarIcon sx={{ color: '#f9d41e' }} />
                                            <StarIcon sx={{ color: '#f9d41e' }} />
                                            <StarIcon sx={{ color: '#f9d41e' }} />
                                        </div>
                                        <div className='text-center pb-2'>
                                            <span>
                                                {items?.reviewDescription}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </>
    );
};

export default Testimonials;
