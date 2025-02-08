import React, {useState, useEffect} from "react";
import DataDetails from "../components/DataDetails.jsx";
import {useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner.jsx";

const AnimeDetail = () => {
    const [selectedAnime, setSelectedAnime] = useState({});
    const [relatedAnime, setRelatedAnime] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const fetchData = async (url) => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error(`Error fetching ${url}`, error);
            return null;
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const loadAnimeDetails = async () => {
            const animeData = await fetchData(`http://localhost:3000/api/anime/${id}`)
            if (animeData) setSelectedAnime(animeData);
        };

        const loadRelatedAnime = async () => {
            const relatedData = await fetchData(`http://localhost:3000/api/anime/${id}/relations`);
            if (relatedData) setRelatedAnime(relatedData.map((item) => item.entry).flat());
        }

        loadAnimeDetails()
        loadRelatedAnime();
    }, [id]);

    return loading ? (
        <Spinner />
    ) : (
        <div className="pt-20">
            <DataDetails
                data={selectedAnime}
                relatedData={relatedAnime}
                title="Related Anime"
                description="Check out the related anime"
                navigateTo="/anime"
            />
        </div>
    );
}

export default AnimeDetail;