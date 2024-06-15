import React from 'react';

function Footer() {
    return (
        <footer className="flex justify-center py-4 mt-8 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 rounded-t-lg shadow-lg">
            <div className="flex flex-1 justify-center items-center">
                <p className="text-white text-sm">&copy; 2024 WeatherWise. All rights reserved.</p>
            </div>
            <div className="flex flex-1 justify-center items-center">
                <a
                    href="https://github.com/Swish78/WeatherWise"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm hover:underline mx-2"
                >
                    GitHub
                </a>
                <a
                    href="https://openweathermap.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm hover:underline mx-2"
                >
                    OpenWeatherMap
                </a>
            </div>
        </footer>
    );
}

export default Footer;
