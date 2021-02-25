'use strict';
//Import styles
import './styles/style.css';

// Get elements in HTML
let input = document.querySelector('input');
const search = document.getElementById('search');
const card = document.getElementById('cardCity');

//Set example first value Mexico City
const defaultCity = 'mexico city';

//Async function to get weather with API
const getWeather = async (city) => {
    let cityName = city;
    const apiKey = "f07139de5168665d6bee4fde3a729a7c";

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`, { mode: 'cors' });
        onLoad();
        const weatherCity = await response.json();
        await setAsyncTimeout(() => {
            cleanUi();
            renderCity(weatherCity);
        }, 2000);
    }
    catch {
        console.log("Can't connect with getWeather");
    }
}

//Event listener click for search city
search.addEventListener("click", e => {
    e.preventDefault();
    getWeather(input.value);
});

//To Celsius
const toCelsius = (kTemp) => {
    return Math.round((kTemp - 273.1) * 10) / 10;
}

const cleanUi = () => {
    //get html element to render
    card.innerHTML = "";
}
const onLoad = () => {

    cleanUi();
    card.innerHTML +=
        `
            <h3 class="loading" id="loading"> <i class="fas fa-sun fa-spin loading"></i> Loading ... </h3>
        `

}

const setAsyncTimeout = (cb, timeout = 0) => new Promise(resolve => {
    setTimeout(() => {
        cb();
        resolve();
    }, timeout);
});

const renderCity = (city) => {
    //set values 
    const feels = toCelsius(city.main.feels_like);
    const humidity = city.main.humidity;
    const temp = toCelsius(city.main.temp);
    const max = toCelsius(city.main.temp_max);
    const min = toCelsius(city.main.temp_min);
    const cityName = city.name;
    const icon = city.weather[0].icon;
    const weatherClass = city.weather[0].main;

    cleanUi();

    // Render card with values

    card.innerHTML +=
        `
            <div class="card mt-3 ${weatherClass.toLowerCase()}" >
                <div class="card-body">
                    <div class="row">
                        <h3 class="card-title"> ${cityName}
                        <img src=" http://openweathermap.org/img/wn/${icon}@2x.png"/ alt="${weatherClass}">
                        </h3>
                    </div>
                    <div class="row">
                        <div class="col col-12 col-md-4">
                            <p class="card-text"> ${weatherClass}</p>
                            <p class="card-text"><i class="fas fa-thermometer-half"></i> ${temp} °C</p>
                        </div>
                        <div class="col col-12 col-md-8">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Feels Like °C</th>
                                        <th scope="col">Humidity</th>
                                        <th scope="col">Min. Temp. °C</th>
                                        <th scope="col">Max Temp. °C</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>${feels} °C</td>
                                        <td>${humidity} %</td>
                                        <td>${min} °C</td>
                                        <td>${max} °C</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `
}

getWeather(defaultCity);