# WeatherWise

WeatherWise is a modern weather dashboard application that allows users to search for current weather conditions by city name and manage their favorite cities for quick access to weather updates.

## Features

- **Search for Weather**: Users can search for current weather conditions by city name.
- **Display Weather Details**: Shows details like temperature, weather condition, humidity, and wind speed.
- **Add to Favorites**: Users can save favorite cities to quickly view their weather conditions.
- **Remove from Favorites**: Users can remove cities from their favorites.
- **Responsive Design**: The application is mobile-friendly.

## Technologies Used

- React
- JavaScript (ES6+)
- Tailwind CSS for styling
- Fetch API for getting weather data from OpenWeatherMap

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/weatherwise.git
   cd weatherwise
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Get your OpenWeatherMap API key:**
   Sign up at [OpenWeatherMap](https://openweathermap.org/) to get an API key.

4. **Create a `.env` file in the root directory and add your API key:**
   ```plaintext
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```

5. **Start the development server:**
   ```bash
   npm start
   # or
   yarn start
   ```

## Usage

1. **Search for Weather:**
    - Enter a city name in the search bar and press enter or click the search button.
    - The current weather details for the city will be displayed.

2. **Add to Favorites:**
    - Click the "Add to Favorites" button to save the city to your favorites list.
    - Favorite cities will be listed under the "Favorites" section.

3. **Remove from Favorites:**
    - Click the "Remove" button next to a city in the favorites list to remove it.


## Components

- **App.js**: The main component that holds the state and renders child components.
- **Search.js**: A form to input the city name and trigger the weather search.
- **WeatherDetails.js**: Displays the weather details of the searched city.
- **Favorites.js**: Displays a list of favorite cities with their current weather.

## Additional Enhancements

1. **Weather Forecast**: Add a feature to display a 5-day weather forecast for the searched city.
2. **Geolocation**: Use the Geolocation API to show weather details based on the user's current location.
3. **Unit Conversion**: Allow users to toggle between Celsius and Fahrenheit.
4. **Dark Mode**: Implement a dark mode for the application.
5. **Weather Alerts**: Display weather alerts for severe conditions like storms or heavy rain.
6. **Background Images**: Change the background image based on the current weather conditions.
7. **Hourly Forecast**: Include an hourly forecast for the current day.
8. **Language Support**: Add support for multiple languages.
9. **Customizable Dashboard**: Allow users to customize the layout and components of the dashboard.
10. **Save Settings**: Save user settings (like unit preference and dark mode) in local storage.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

---

Enjoy using WeatherWise! 🌤️

---