import React from "react";

const ToggleButtons = ({ onClick, children, isActive }) =>  {
    return (
        <div className="mb-4">
            <button onClick={onClick}
            className={`p-2 ${isActive ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
                {children}
            </button>
        </div>
    )
}

export default ToggleButtons;