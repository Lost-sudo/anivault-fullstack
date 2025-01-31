import React, {useEffect, useState} from "react";
import axios from "axios";
import SwiperComponent from "./SwiperComponent.jsx";

const DataDetails = () => {

    // Sample delete this later
    const [animeData, setAnimeData] = useState([]);
    const [mangaData, setMangaData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch Anime and Manga Data in Parallel
    const fetchData = async () => {
        try {
            const [animeRes, mangaRes] = await Promise.all([
                axios.get("http://localhost:3000/api/top/anime"),
                axios.get("http://localhost:3000/api/top/manga")
            ]);
            setAnimeData(animeRes.data);
            setMangaData(mangaRes.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // end here
    return (
        <div className="container mx-auto p-8">
            <div className="flex items-start justify-center gap-10">
                <div className="w-1/3">
                    <img className="h-auto w-full rounded-lg shadow-lg"
                         src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                         alt="img"/>
                </div>
                <div className="w-2/3">
                    <h1 className="text-4xl font-bold text-gray-800">Anime Title</h1>
                    <div className="mt-2">
                        <p className="text-gray-600">Genres: Isekai, Comedy, Love</p>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-2xl font-semibold text-gray-800">Synopsis:</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper
                            sem sed posuere placerat. Pellentesque felis lorem, efficitur quis turpis quis, porttitor
                            tempus ante. Curabitur id lectus laoreet, porttitor mauris pulvinar, tincidunt arcu. Mauris
                            eu cursus justo. Duis dapibus libero ut nisi malesuada condimentum. Donec condimentum est
                            nulla, vel imperdiet est congue a. Donec bibendum nunc a mollis vestibulum. Vivamus dapibus
                            varius ligula, id pharetra nisl molestie non.</p>
                    </div>
                </div>
            </div>
            <SwiperComponent data={animeData} title="Top Anime" description="Check out the latest and top-rated anime" />
            <div className="flex justify-items-start gap-10 mt-12">
                <h2 className="text-3xl font-bold text-center text-gray-800">
                    Comments:
                </h2>
            </div>
            <div className="flex justify-items-start gap-10">
                <textarea name="" id="" cols="10" rows="1" className="w-full p-4 mt-4 border rounded-lg"
                          placeholder="Leave a comment"></textarea>
                <button className="bg-blue-600 text-white py-2 px-6 mt-4 rounded-lg">
                    Submit
                </button>
            </div>
        </div>

    )
}

export default DataDetails;