import React, { useEffect, useState } from "react";
import DataDetails from "../components/DataDetails.jsx";
import Spinner from "../components/Spinner.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";

const MangaDetail = () => {
    const [selectedManga, setSelectedManga] = useState({});
    const [relatedManga, setRelatedManga] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const fetchData = async (url) => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error(`Error fetching ${url}:`, error);
            return null;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const loadMangaDetails = async () => {
            const mangaData = await fetchData(`http://localhost:3000/api/manga/${id}`);
            if (mangaData) setSelectedManga(mangaData);
        };

        const loadRelatedManga = async () => {
            const relatedData = await fetchData(`http://localhost:3000/api/manga/${id}/relations`);
            if (relatedData) setRelatedManga(relatedData.map((item) => item.entry).flat());
        };

        loadMangaDetails();
        loadRelatedManga();
    }, [id]);

    return loading ? (
        <Spinner />
        ) : (
        <div className="pt-20">
            <DataDetails
                data={selectedManga}
                relatedData={relatedManga}
                title="Related Manga"
                description="Check out the related manga"
            />
        </div>
    );
};

export default MangaDetail;
