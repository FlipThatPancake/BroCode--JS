

// WEATHER APP


const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');

const apiKey = "cbfe7e2b2e26cea85b4912e44b255910"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";


weatherForm.addEventListener('submit', async (event) => { // async allows use of await inside

    event.preventDefault(); // to prevent automatic refresh

    const city = cityInput.value.trim();
    
    if (city) {
        try {
            const weatherData = await getWeatherData(city); 
            // wait for the Promise (getWeatherData to fetch data) to resolve before executing next line
            displayWeatherInfo(weatherData);
        } catch (error) {
            console.error(error);
            displayError(error);
        }
    } else {
        displayError("Please enter a city name");
    }
});

async function getWeatherData(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

    if (!response.ok) {
        if (response.status === 404) {
            throw new Error("City not found. Please check the city name and try again.");
        } else {
            throw new Error("An error occurred while fetching the weather data. Please try again later.");
        }
    }

    // Parse and return the JSON data
    return await response.json();
}

function displayWeatherInfo(data) {

    const { 
        name: city, 
        main: { temp, humidity }, 
        weather: [ { description, id } ] } = data;

    console.log(data);

    card.textContent = '';
    card.style.display = `flex`;

    const cityDisplay = document.createElement('h1');
    const tempDisplay = document.createElement('p');
    const humidityDisplay = document.createElement('p');
    const descDisplay = document.createElement('p');
    const weatherEmoji = document.createElement('div');

    // City
    cityDisplay.textContent = city;
    cityDisplay.classList.add('cityDisplay');
    card.appendChild(cityDisplay);

    // Temperature
    tempDisplay.textContent = `${Math.round(temp)}°F`;
    tempDisplay.classList.add('tempDisplay');
    card.appendChild(tempDisplay);

    // Humidity
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    humidityDisplay.classList.add('humidityDisplay');
    card.appendChild(humidityDisplay);

    // Description
    descDisplay.textContent = description.charAt(0).toUpperCase() + description.slice(1);
    descDisplay.classList.add('descDisplay');
    card.appendChild(descDisplay);

    // Weather Emoji
    weatherEmoji.textContent = getWeatherEmoji(id);
    weatherEmoji.classList.add('weatherEmoji');
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId) {

    switch (true) {
        case weatherId >= 200 && weatherId < 300:
            return '⛈️'; // Thunderstorm
        case weatherId >= 300 && weatherId < 500:
            return '🌦️'; // Drizzle
        case weatherId >= 500 && weatherId < 600:
            return '🌧️'; // Rain
        case weatherId >= 600 && weatherId < 700:
            return '❄️'; // Snow
        case weatherId >= 700 && weatherId < 800:
            return '🌫️'; // Atmosphere (fog, mist, etc.)
        case weatherId === 800:
            return '☀️'; // Clear
        case weatherId === 801:
            return '🌤️'; // Few clouds
        case weatherId === 802:
            return '⛅'; // Scattered clouds
        case weatherId === 803:
            return '🌥'; // Broken clouds
        case weatherId === 804:
            return '☁️'; // Overcast clouds
        default:
            return '🛸'; // Unknown
    };
}

function displayError(message) {

    const errorDisplay = document.createElement('p');
    errorDisplay.textContent = message;
    errorDisplay.classList.add('errorDisplay');

    card.textContent = '';
    card.style.display = `flex`;
    card.appendChild(errorDisplay);
}