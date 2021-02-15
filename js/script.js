const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");
const temperatureInputs = document.querySelectorAll("input");

function handleInputChange(event) {
  let tempValue = parseInt(event.target.value);
  let inputName = event.target.name;

  if (event.target.value == "") {
    celsiusInput.value = null;
    fahrenheitInput.value = null;
    kelvinInput.value = null;
    return;
  }

  if (inputName === "celsius") {
    // Celsius to Fahrenheit
    let fahrenheitValue = tempValue * 1.8 + 32;
    fahrenheitInput.value = fahrenheitValue.toFixed(2);

    // Celsius to kelvin
    let kelvinValue = tempValue + 273.15;
    kelvinInput.value = kelvinValue.toFixed(2);
  } else if (inputName === "fahrenheit") {
    // Fahrenheit to Celsius
    let celsiusValue = (tempValue - 32) / 1.8;
    celsiusInput.value = celsiusValue.toFixed(2);

    // Fahrenheit to kelvin
    let kelvinValue = (tempValue - 32) / 1.8 + 273.15;
    kelvinInput.value = kelvinValue.toFixed(2);
  } else if (inputName === "kelvin") {
    // Kelvin to Celsius
    let celsiusValue = tempValue - 273.15;
    celsiusInput.value = celsiusValue.toFixed(2);

    // Kelvin to Fahrenheit
    let fahrenheitValue = (tempValue - 273.15) * 1.8 + 32;
    fahrenheitInput.value = fahrenheitValue.toFixed(2);
  }
}

function iterateTemperatureInputs(input) {
  input.addEventListener("input", handleInputChange);
}

temperatureInputs.forEach(iterateTemperatureInputs);
