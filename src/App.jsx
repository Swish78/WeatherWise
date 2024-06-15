import React, { useState } from 'react';
import Header from './components/Header';
import WeatherDetails from './components/WeatherDetails';
import WeatherDetails from './components/Footer';
import axios from 'axios';

function App() {
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeatherData = async (city) => {
        try {
            // Replace with your own API key
            const API_KEY = 'af9cfaf7b045f7a1af41633c649abc8d';
            // Get coordinates from city name
            const geoResponse = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`);
            const { lat, lon } = geoResponse.data[0];

            // Get weather data
            const weatherResponse = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${API_KEY}`);
            setWeatherData(weatherResponse.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    return (
        <div className="App">
            <Header onSearch={fetchWeatherData} />
            {weatherData && <WeatherDetails data={weatherData} />}
            <Footer /> 
        </div>
    );
}

export default App;
