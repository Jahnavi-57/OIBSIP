function convertTemperature() {
    var conversionType = document.getElementById("conversion_types").value;
    var temperature = parseFloat(document.getElementById("inputField").value);
    var resultDisplay = document.getElementById("resultDisplay");

    if (isNaN(temperature)) {
        resultDisplay.textContent = "Please enter a valid temperature value.";
        return;
    }

    var result1, result2;

    if (conversionType === "celsius") {
        result1 = celsiusToFahrenheit(temperature);
        result2 = celsiusToKelvin(temperature);
        resultDisplay.textContent = temperature + " °C = " + result1.toFixed(2) + " °F = " + result2.toFixed(2) + " K ";
    } else if (conversionType === "fahrenheit") {
        result1 = fahrenheitToCelsius(temperature);
        result2 = celsiusToKelvin(result1);
        resultDisplay.textContent = temperature + " °F = " + result1.toFixed(2) + " °C = " + result2.toFixed(2) + " K ";
    } else if (conversionType === "kelvin") {
        result1 = kelvinToCelsius(temperature);
        result2 = celsiusToFahrenheit(result1);
        resultDisplay.textContent = temperature + " K = " + result1.toFixed(2) + " °C = " + result2.toFixed(2) + " °F ";
    }
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}
