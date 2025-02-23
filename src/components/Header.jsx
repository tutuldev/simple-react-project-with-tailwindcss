import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className="text-white text-xl font-semibold">Navbar</Link>

                    <form className="flex items-center text-white">
                        <input
                            className="p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 transition duration-300"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Header;
