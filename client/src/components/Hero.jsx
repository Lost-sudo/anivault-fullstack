import React from "react";

const Hero = () => {
    return (
        <section className="bg-indigo-500 text-white h-200 flex flex-col justify-center items-center text-center p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl mb-4">Welcome to AniVault</h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-6">Your Ultimate Anime and Manga Hub</p>
                <a className="bg-indigo-800 hover:bg-indigo-700 text-white py-3 px-6 rounded-full text-lg transition-all duration-300">Explore Now</a>
            </div>
        </section>
    )
}

export default Hero;