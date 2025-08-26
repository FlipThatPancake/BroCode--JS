// TEMPERATURE CONVERSION
// Convert Celsius to Fahrenheit and vice versa

const tempInput = document.getElementById('tempInput');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');
let temp;

function convertTemperature() {
    
    if (toFahrenheit.checked) {
        temp = parseFloat(tempInput.value);
        if (isNaN(temp)) {
            result.textContent = 'Please enter a valid number.';
            return;
        }
        const fahrenheit = (temp * 9/5) + 32;
        result.textContent = `${temp}°C is equal to ${fahrenheit.toFixed(1)}°F`;
    } 
    else if (toCelsius.checked) {
        temp = parseFloat(tempInput.value);
        if (isNaN(temp)) {
            result.textContent = 'Please enter a valid number.';
            return;
        }
        const celsius = (temp - 32) * 5/9;
        result.textContent = `${temp}°F is equal to ${celsius.toFixed(1)}°C`;
    }
    else {
        result.textContent = 'Please select a conversion option.';
        return;
    }
};