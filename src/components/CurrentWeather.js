import React from 'react';

const getWeatherAnimation = (weatherMain) => {
  switch (weatherMain.toLowerCase()) {
    case 'rain':
      return 'rain';
    case 'clouds':
      return 'clouds';
    case 'clear':
      return 'clear';
    default:
      return '';
  }
};

const CurrentWeather = ({ cityName, weatherItem }) => (
  <div className="current-weather">
    <div className="details">
      <h2>{`${cityName} (${weatherItem.dt_txt.split(" ")[0]})`}</h2>
      <h6>{`Temperature: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C`}</h6>
      <h6>{`Wind: ${weatherItem.wind.speed} M/S`}</h6>
      <h6>{`Humidity: ${weatherItem.main.humidity}%`}</h6>
    </div>
    <div className="icon">
      <img
        src={`https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png`}
        alt="weather-icon"
        className={getWeatherAnimation(weatherItem.weather[0].main)}
      />
      <h6>{weatherItem.weather[0].description}</h6>
    </div>
  </div>
);

export default CurrentWeather;
