import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [isAuthenticated, setIsAuthenticated] = React.useState(!!localStorage.getItem("token"));
    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const linkClass = ({isActive}) =>
        isActive ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
            : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const logout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
    }

    return (
       <nav className="bg-indigo-700 border-b border-indigo-500 fixed top-0 w-full z-50 shadow-md">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        <NavLink to="/" className="flex flex-shrink-0 items-center mr-4">
                            <h1 className="hidden md:block text-white text-2xl font-bold ml-2">AniVault</h1>
                        </NavLink>
                        <div className="md:ml-auto">
                            <div className="flex space-x-2">
                                <NavLink to="/" className={linkClass}>
                                    Home
                                </NavLink>
                                <NavLink to="/anime" className={linkClass}>
                                    Anime
                                </NavLink>
                                <NavLink to="/manga" className={linkClass}>
                                    Manga
                                </NavLink>
                                {!isAuthenticated ? (
                                    <NavLink to="/login" className={linkClass}>
                                        Login
                                    </NavLink>
                                ) : (
                                    <div className="relative">
                                        <button className="flex items-center space-x-2 pt-1 text-white hover:bg-gray-600" onClick={toggleDropdown}>
                                            <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white">
                                                <span>P</span>
                                            </div>
                                        </button>
                                        {dropdownOpen && (
                                            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-48">
                                                <NavLink to="/anime-vault" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                                    My Anime Vault
                                                </NavLink>
                                                <NavLink to="/manga-vault" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                                    My Manga Vault
                                                </NavLink>
                                                <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={logout}>
                                                    Logout
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </nav>
    );
}

export default Navbar;