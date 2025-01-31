import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const SwiperComponent = ({ data, title, description }) => {
    return (
        <div className="max-w-10xl p-10">
            {/* Header Section */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
                <p className="text-gray-600 text-lg">{description}</p>
            </div>

            {/* Swiper Section */}
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                loop={true}
                // pagination={{ clickable: true }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {data.map((item, index) => (  // ✅ FIX: Added curly braces { }
                    <SwiperSlide key={index}>
                        <div className="max-w-xs rounded-lg overflow-hidden shadow-xl bg-gray-100 transition-transform transform hover:scale-105 duration-300 ease-in-out">
                            <img
                                className="w-full h-70 object-cover"
                                src={item?.images?.webp?.image_url}  // ✅ FIX: Added optional chaining to prevent errors
                                alt={item.title || "Anime Image"}
                            />
                            <div className="p-6">
                                <h3 className="font-bold text-xl mb-2 text-gray-800">
                                    {item.title ? item.title.substring(0, 15) + "..." : "No Title"}
                                </h3>
                                <p className="text-gray-600 text-base mb-4">
                                    {item.synopsis ? item.synopsis.substring(0, 100) + "..." : "No Synopsis Available"}
                                </p>
                                {/*<button className="bg-indigo-600 text-white rounded-lg px-5 py-2 hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50">*/}
                                {/*    Learn More*/}
                                {/*</button>*/}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperComponent;
