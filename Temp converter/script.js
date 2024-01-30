function convertTemperature() {
    let temp = parseFloat(document.getElementById('tempInput').value);
    let inputType = document.getElementById('inputType').value;
    let outputType = document.getElementById('outputType').value;

    if (isNaN(temp)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    let result;

    if (inputType === outputType) {
        result = temp;
    } else {
        // Convert input to Celsius as an intermediary step
        let tempInCelsius;
        switch (inputType) {
            case 'fahrenheit':
                tempInCelsius = (temp - 32) * 5 / 9;
                break;
            case 'kelvin':
                tempInCelsius = temp - 273.15;
                break;
            default:
                tempInCelsius = temp;
        }

        // Convert from Celsius to the desired output unit
        switch (outputType) {
            case 'fahrenheit':
                result = (tempInCelsius * 9 / 5) + 32;
                break;
            case 'kelvin':
                result = tempInCelsius + 273.15;
                break;
            default:
                result = tempInCelsius;
        }
    }

    displayResult(result, outputType);
}

function displayResult(result, unit) {
    let unitLabel = unit.charAt(0).toUpperCase() + unit.slice(1); // Capitalize the first letter
    document.getElementById('result').textContent = `Result: ${result.toFixed(2)}° ${unitLabel}`;
}

