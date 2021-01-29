// HTML elements
const button = document.getElementById("calculate-btn")

// When button is clicked
button.addEventListener('click', function(){
    // Take inputs
    [windVelocity, temperature] = [...getInputs()];

    // Check if wind velocity and temperature input are valid
    checkInputs(windVelocity, temperature);
    console.log(checkInputs(windVelocity, temperature));
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