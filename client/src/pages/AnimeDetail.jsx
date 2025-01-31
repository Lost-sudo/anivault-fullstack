import React from "react";
import DataDetails from "../components/DataDetails.jsx";

const AnimeDetail = () => {
    const [selectedAnime, setSelectedAnime] = React.useState(null);

    return (
        <div className="pt-20">
            <DataDetails />
        </div>
    )
}

export default AnimeDetail;