import React from "react";

const List = ({ dataList, viewMode }) => {
    return (
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4' : 'space-y-4'}>
            {dataList.map((data) => (
                <div
                    key={data.mal_id}
                    className={`cursor-pointer transition-shadow hover:shadow-lg ${viewMode === 'grid' ? 'border p-4 rounded-lg' : 'flex items-center border p-4 rounded-lg'}`}
                >
                    <img
                        src={data.images.webp.image_url}
                        alt={`Thumbnail of ${data.title}`}
                        className={viewMode === 'grid' ? 'w-full h-48 object-cover mb-2 rounded-lg' : 'w-24 h-24 object-cover mr-4 rounded-lg'}
                    />
                    <div>
                        <h2 className="text-xl font-semibold">{data.title}</h2>
                        <p className="text-gray-600">Rating: {data.rating || "N/A"}</p>
                        <p className="text-gray-600">Year: {data.year || "N/A"}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default List;
