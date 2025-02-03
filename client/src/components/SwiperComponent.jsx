import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useNavigate} from "react-router-dom";

const SwiperComponent = ({ data, title, description, navigateTo }) => {
    const navigate = useNavigate();

    return (
        <div className="container pt-10 mx-auto">
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
                {data.map((item, index) => (
                    <SwiperSlide key={index} onClick={() => navigate(`${navigateTo}/${item.mal_id}`)}>
                        <div className="max-w-xs rounded-lg overflow-hidden shadow-xl bg-gray-100 transition-transform transform hover:scale-105 duration-300 ease-in-out">
                            {item.images?.webp?.image_url && (
                                <img
                                    className="w-full h-70 object-cover"
                                    src={item.images.webp.image_url}
                                    alt={item.title || "Anime Image"}
                                />
                            )}

                            <div className="p-6">
                                <h3 className="font-bold text-xl mb-2 text-gray-800">
                                    { item.title ? item.title.substring(0, 15) + "..." : item.name}
                                </h3>
                                {item.synopsis && (
                                    <p className="text-gray-600 text-base mb-4">
                                        {item.synopsis.substring(0, 100) + "..."}
                                    </p>
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperComponent;
