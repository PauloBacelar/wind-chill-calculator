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