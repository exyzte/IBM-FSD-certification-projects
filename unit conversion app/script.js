const celsius = document.getElementById("celcius");
const fahrenheit = document.getElementById("fahrenheit");
const pounds = document.getElementById("pounds");
const kilograms = document.getElementById("kilo");
const kilometers = document.getElementById("km");
const miles = document.getElementById("miles");

function convertCelsiusToFahrenheit(celsius) {
    let fahrenheitValue  = [celsius *9/5] + 32;
    fahrenheit.value = fahrenheitValue;
    return fahrenheitValue;
}

function convertKilogramsToPounds(kilograms) {
    let poundsValue = kilograms * 2.2;
    pounds.value = poundsValue;
    return poundsValue;
}

function convertKilometersToMiles(kilometers) {
    let milesValue = kilometers / 1.609;
    miles.value = milesValue;
    return milesValue;
}  


