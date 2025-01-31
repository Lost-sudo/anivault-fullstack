import React, { useEffect, useState } from "react";
import Hero from "../components/Hero.jsx";
import SwiperComponent from "../components/SwiperComponent.jsx";
import axios from "axios";
import Spinner from "../components/Spinner.jsx";

const HomePage = () => {
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

    return (
        <section className="pt-20" id="exploreNow">
            <Hero />
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <SwiperComponent data={animeData} title="Top Anime" description="Check out the latest and top-rated anime" />
                    <SwiperComponent data={mangaData} title="Top Manga" description="Check out the latest and top-rated manga" />
                </>
            )}
        </section>
    );
};

export default HomePage;
