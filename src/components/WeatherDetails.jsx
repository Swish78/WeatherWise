import React from 'react';

function WeatherDetails({ data }) {
    return (
        <div className="weather-details p-4 m-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold">Weather Details</h2>
            <p>Temperature: {data.current.temp} K</p>
            <p>Feels Like: {data.current.feels_like} K</p>
            <p>Pressure: {data.current.pressure} hPa</p>
            <p>Humidity: {data.current.humidity}%</p>
            <p>Wind Speed: {data.current.wind_speed} m/s</p>
            <p>Wind Direction: {data.current.wind_deg}°</p>
            <p>Cloudiness: {data.current.clouds}%</p>
            <p>UV Index: {data.current.uvi}</p>
            <p>Visibility: {data.current.visibility} meters</p>
            <p>Sunrise: {new Date(data.current.sunrise * 1000).toLocaleTimeString()}</p>
            <p>Sunset: {new Date(data.current.sunset * 1000).toLocaleTimeString()}</p>
        </div>
    );
}

export default WeatherDetails;
