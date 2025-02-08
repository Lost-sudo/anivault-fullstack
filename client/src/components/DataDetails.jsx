import React from "react";
import SwiperComponent from "./SwiperComponent.jsx";
import AddToListButton from "./AddToListButton.jsx";

const DataDetails = ({ data, relatedData, title, description, navigateTo }) => {
    return (
        <div className="container mx-auto p-8">
            <div className="flex items-start justify-center gap-10">
                <div className="w-1/3">
                    <img className="h-auto w-full rounded-lg shadow-lg"
                         src={data?.images?.webp?.image_url}
                         alt={data.title || "Anime Image"}/>
                </div>
                <div className="w-2/3">
                   <div className="flex items-center justify-between gap-4">
                       <h1 className="text-4xl font-bold text-gray-800">{data.title || "No title available"}</h1>
                       <AddToListButton data={data}  />
                   </div>
                    <div className="mt-2">
                        <p className="text-gray-600">
                            {Array.isArray(data.genres) && data.genres.length > 0
                                ? data.genres.map((genre) => genre.name).join(", ")
                                : "No genres available"}
                        </p>

                    </div>
                    <div className="mt-4">
                        <h2 className="text-2xl font-semibold text-gray-800">Synopsis:</h2>
                        <p className="text-gray-600">{data.synopsis || "No synopsis available."}</p>
                    </div>
                </div>
            </div>
            {relatedData && (
                <SwiperComponent data={relatedData} title={title} description={description} navigateTo={navigateTo} />
            )}
        </div>

    )
}

export default DataDetails;