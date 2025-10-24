import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

import slide01 from "@/assets/images/slide-01.jpg"
import slide02 from "@/assets/images/slide-02.jpg"
import slide03 from "@/assets/images/slide-03.jpg"

const NextArrow = ({onClick}) => {
    return (
        <div
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
            onClick={onClick}
        >
            <FaArrowRight/>
        </div>
    );
};

const PrevArrow = ({onClick}) => {
    return (
        <div
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
            onClick={onClick}
        >
            <FaArrowLeft/>
        </div>
    );
};

function Carousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <div className="relative w-full mx-auto mt-10">
            <Slider {...settings}>
                <div>
                    <img src={slide01} alt=""/>
                </div>
                <div>
                    <img src={slide02} alt=""/>
                </div>
                <div>
                    <img src={slide03} alt=""/>
                </div>
            </Slider>
        </div>
    );
}

export default Carousel