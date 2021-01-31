// HTML elements
const button = document.getElementById("calculate-btn")
const result = document.querySelector("div#result");

// When button is clicked
button.addEventListener('click', function(){
    // Take inputs
    [windVelocity, temperature] = [...getInputs()];

    // Break if wind velocity and temperature input are not valid
    if(!checkInputs(windVelocity, temperature)){
        showErrorMessage();
        return;
    }

    // Convert metric to imperial system if necessary
    let isMetric = document.getElementById('metric').checked;
    if(isMetric){
        [temperature, windVelocity] = toImperial(temperature, windVelocity);
    }

    // Calculate wind-chill
    let windChill = calculateWindChill(temperature, windVelocity);

    // Show result in 'result' div
    showResult(windChill);
})

const getInputs = () => {
    return [document.getElementById("wind-velocity-input").value, 
    document.getElementById("temperature-input").value];
}

// Check if inputs are valid
const checkInputs = (windVelocity, temperature) => {
    // If wind speed is 0 or negative, return false
    function isPositive(){
        return windVelocity > 0;
    }

    // If all inputs are not empty ("");
    function isNotEmpty(){ 
        return windVelocity !== "" && temperature !== "";
    }

    return isPositive() && isNotEmpty();
}

// Show error message if data is not valid
const showErrorMessage = () => {
    result.innerText = 'Error! Check if your data is right';
}

// Convert metric to imperial system
const toImperial = (temp, windSpeed) => {
    // Celsius to fahrenheit
    const celsiusToF = () => {
        return temp * 1.8 + 32;
    }

    // km/h to mph
    const toMph = () => {
        return windSpeed / 1.609;
    }

    return [celsiusToF(), toMph().toFixed(2)];
}

// Calculate wind-chill
const calculateWindChill = (temp, windSpeed) => {
    console.log(`35.74 + 0.6215(${temp}) - 35.75(${windSpeed}^0.16) + 0.4275(${temp})(${windSpeed}^0.16)`)

    return 35.74 + 0.6215 * temp - 35.75 * (windSpeed ** 0.16) + 0.4275 * temp * (windSpeed ** 0.16);
}

// Show wind-chill
const showResult = windChill => {
    result.innerText = `It will feel like: ${windChill.toFixed(2)}°F`;
}