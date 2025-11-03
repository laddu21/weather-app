import { useEffect, useState } from "react";
import Search from "./components/Search/Search";

// Weather.jsx
// This component fetches and displays weather data based on user input or default city
export default function Weather() {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    // Function to fetch weather data from OpenWeatherMap API
    async function fetchWeatherData(param) {
        setLoading(true);
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
            );

            // Check if the response is ok (status in the range 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            if (data) {
                setWeatherData(data);
                setLoading(false);
            }
        } catch (e) {
            setLoading(false);
            console.error("Error fetching weather data:", e);
            alert("Failed to fetch weather data. Please check the city name and try again.");
        }
    }

    // Function to handle search input and fetch weather data
    async function handleSearch() {
        fetchWeatherData(search);
    }

    function getCurrentDate() {
        return new Date().toLocaleDateString("en-us", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    }

    useEffect(() => {
        fetchWeatherData("bangalore");
    }, []);

    console.log(weatherData);

    // Render the component
    return (
        <div className="weather-container">
            <Search
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            />
            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <div>
                    <div className="city-name">
                        <h2>{weatherData?.name},<span>{weatherData?.sys?.country}</span></h2>
                    </div>
                    <div className="date">
                        <span>{getCurrentDate()}</span>
                    </div>
                    <div className="temp">
                        {weatherData?.main?.temp}
                    </div>
                    <p className="description">
                        {weatherData && weatherData.weather && weatherData.weather[0]
                            ? weatherData.weather[0].description
                            : ""}
                    </p>
                    <div className="weather-info">
                        <div className="column">
                            <div>
                                <p className="wind">{weatherData?.wind?.speed}</p>
                                <p>Wind Speed</p>
                            </div>
                        </div>
                        <div className="column">
                            <div>
                                <p className="humidity">{weatherData?.main?.humidity}%</p>
                                <p>Humidity</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
