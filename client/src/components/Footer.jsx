import React from "react";
import {FaFacebook, FaGithub, FaInstagram, FaLinkedinIn} from "react-icons/fa";

const Footer = () => {

    const [currentYear, setCurrentYear] = React.useState(null);

    React.useEffect(() => {
        const year = new Date().getFullYear();
        setCurrentYear(year);
    }, [])

    return (
       <footer className="bg-gray-800 text-gray-200">
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://github.com/Lost-sudo" target="_blank">
                        <FaGithub className="h-6 w-6 text-gray-400 hover:text-white"/>
                    </a>
                    <a href="https://www.linkedin.com/in/john-patrick-paraon-05a131225/" target="_blank">
                        <FaLinkedinIn className="h-6 w-6 text-gray-400 hover:text-white"/>
                    </a>
                    <a href="https://www.facebook.com/zanpatrik2" target="_blank">
                        <FaFacebook className="h-6 w-6 text-gray-400 hover:text-white"/>
                    </a>
                    <a href="https://www.instagram.com/zanpatrik2/?next=%2F" target="_blank">
                        <FaInstagram className="h-6 w-6 text-gray-400 hover:text-white"/>
                    </a>
                </div>

                <div className="text-center text-gray-400 text-sm">
                    &copy; {currentYear} AniVault. All Rights Reserved.
                </div>
            </div>
       </footer>
    );
}

export default Footer;