import React from "react";
import Hero from "../components/Hero.jsx";
import SwiperComponent from "../components/SwiperComponent.jsx";
import axios from "axios";

const HomePage = () => {

    const [animeData, setAnimeData] = React.useState([]);
    const [mangaData, setMangaData] = React.useState([]);

    console.log(animeData);

    const fetchAnimeData = async () => {
        await axios.get("http://localhost:3000/api/top/anime").
        then((res) => setAnimeData(res.data)).
        catch((err) => console.log("Error fetching data from the server: ", err));
    };

    const fetchMangaData = async () => {
        axios.get("http://localhost:3000/api/top/manga").
        then((res) => setMangaData(res.data)).
        catch((err) => console.log("Error fetching data from the server: ", err));
    }

    React.useEffect(() => {

        fetchAnimeData();
        fetchMangaData();

    }, [])


    return (
        <section className="pt-20">
            <Hero />
            <SwiperComponent data={animeData} title="Top Anime" description="Check out the latest and top-rated anime"/>
            <SwiperComponent data={mangaData} title="Top Manga" description="Check out the latest and top-rated maga" />
        </section>
    )
};

export default HomePage;