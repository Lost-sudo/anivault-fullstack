import React, { useState, useEffect } from 'react';
import ToggleButtons from "../components/ToggleButtons";
import List from "../components/List";
import axios from "axios";
import Spinner from "../components/Spinner.jsx";

const AnimePage = () => {
    const [animeData, setAnimeData] = useState([]);
    const [viewMode, setViewMode] = useState('grid');
    const [loading, setLoading] = useState(true);

    const fetchAnime = async () => {
        try {
            await axios.get("http://localhost:3000/api/anime").
                then((response) => {setAnimeData(response.data)});
        } catch (error) {
            console.log("Error fetching data from the server: ", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAnime();
    }, []);

    return (
        <div className="p-20">
            <h1 className="text-3xl font-bold mb-4">Anime Page</h1>

            <div className="mb-4 flex gap-2 pt-20">
                <ToggleButtons onClick={() => setViewMode('grid')} isActive={viewMode === 'grid'}>
                    Grid View
                </ToggleButtons>
                <ToggleButtons onClick={() => setViewMode('list')} isActive={viewMode === 'list'}>
                    List View
                </ToggleButtons>
            </div>

            {loading ? (
                <Spinner />
            ) : (
                <List dataList={animeData} viewMode={viewMode} />
            )}
        </div>
    );
};

export default AnimePage;
