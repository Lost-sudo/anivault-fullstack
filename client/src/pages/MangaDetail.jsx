import React from "react";
import DataDetails from "../components/DataDetails.jsx";

const MangaDetail = () => {
    const [selectedManga, setSelectedManga] = React.useState(null);

    return (
        <div className="pt-20">
            <DataDetails />
        </div>
    )
}

export default MangaDetail;