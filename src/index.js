'use strict';
//Import styles
import './styles/style.css';

console.log('JS content loaded');

const getWeather = async (city) => {
    let cityName = city;
    const apiKey = "f07139de5168665d6bee4fde3a729a7c";
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`, { mode: 'cors' });
        const weatherCity = await response.json();
        console.log(weatherCity);
    }
    catch {
        console.log("Can't connect with getWeather");
    }
}

getWeather("ciudad de mexico");