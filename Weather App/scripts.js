

// WEATHER APP


const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');

// const cityDisplay = document.querySelector('cityDisplay');
// const tempDisplay = document.querySelector('tempDisplay');
// const humidityDisplay = document.querySelector('humidityDisplay');
// const descDisplay = document.querySelector('descDisplay');
// const weatherEmoji = document.querySelector('weatherEmoji');
// const errorDisplay = document.querySelector('errorDisplay');

const apiKey = "cbfe7e2b2e26cea85b4912e44b255910"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault(); // to prevent automatic refresh

    const city = cityInput.value.trim();
    if (city) {
    }
    else {
        displayError("Please enter a city name");
    }
});

async function getWeatherData(city) {

}

function displayWeatherInfo(data) {

}

function getWeatherEmoji(weatherId) {

}

function displayError(message) {

    const errorDisplay = document.createElement('p');
    errorDisplay.textContent = message;
    errorDisplay.classList.add('errorDisplay');

    card.textContent = '';
    card.style.display = `flex`;
    card.appendChild(errorDisplay);
}