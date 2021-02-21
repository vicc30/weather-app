'use strict';
//Import styles
import './styles/style.css';

// Get elements in HTML
let input = document.querySelector('input');
const search = document.getElementById('search');

//Set example first value Mexico City
const defaultCity = 'mexico city';

//Async function to get weather with API
const getWeather = async (city) => {
    let cityName = city;
    const apiKey = "f07139de5168665d6bee4fde3a729a7c";

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`, { mode: 'cors' });
        const weatherCity = await response.json();
        renderCity(weatherCity);
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

const renderCity = (city) => {
    //set values 
    const feels = city.main.feels_like;
    const humidity = city.main.humidity;
    const temp = city.main.temp;
    const max = city.main.temp_max;
    const min = city.main.temp_min;
    const cityName = city.name;
    const desc = city.weather[0].description;

    //get html element to render
    const card = document.getElementById('cardCity');

    // Clear UI
    card.innerHTML = "";

    // Render card with values

    card.innerHTML += 
        `
            <div class="card mt-3" >
                <div class="card-body">
                    <div class="row">
                        <h3 class="card-title"> ${cityName} 
                            <span><button class="btn btn-primary">° Celsius</button></span>
                        </h3>
                        
                    </div>
                    <div class="row">
                        <div class="col col-12 col-md-4">
                            <p class="card-text"><i class="far fa-sun"></i> ${desc}</p>
                            <p class="card-text"><i class="fas fa-thermometer-half"></i> ${temp}</p>
                        </div>
                        <div class="col col-12 col-md-8">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Feels Like</th>
                                        <th scope="col">Humidity</th>
                                        <th scope="col">Min. Temp.</th>
                                        <th scope="col">Max Temp.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>${feels}</td>
                                        <td>${humidity}%</td>
                                        <td>${min}</td>
                                        <td>${max}</td>
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