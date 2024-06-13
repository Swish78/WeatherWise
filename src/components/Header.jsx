import React from 'react';

function Header() {
    const handleSearch = () => {
        // Add search functionality here
        console.log('Searching...');
    };

    return (
        <header className="flex justify-center py-4 my-4 mx-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg shadow-lg">
            <div className="flex flex-1 justify-center items-center">
                <h1 className="text-3xl font-extrabold text-white p-2 rounded-lg">WeatherWise</h1>
            </div>
            <div className="flex flex-2 justify-center items-center mx-4">
                <div className="flex space-x-4">
                    <input
                        type="text"
                        placeholder="Enter location..."
                        className="w-80 p-2 bg-white rounded-lg shadow-inner text-gray-800 focus:outline-none focus:ring focus:ring-indigo-300"
                    />
                    <button
                        className="w-20 p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 text-white hover:from-indigo-600 hover:to-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
            </div>
            <div className="flex flex-1 justify-center items-center">
                <button className="p-2 bg-gradient-to-r from-green-400 to-green-500 rounded-lg text-white hover:from-green-500 hover:to-green-600 focus:outline-none focus:ring focus:ring-green-300">
                    DM
                </button>
            </div>
        </header>
    );
}

export default Header;
