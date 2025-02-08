import React from "react";

const AddToListButton = (props) => {

    const handleCLick = () => {
        console.log(props.data)
    }

    return (
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors" onClick={handleCLick}>
            Add to List
        </button>
    )
}

export default AddToListButton;