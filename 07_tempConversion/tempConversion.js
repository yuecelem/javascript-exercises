const convertToCelsius = function(fahrenheit) {
  let converted = 0;
  converted = ((fahrenheit - 32) * 5) / 9;
  converted = Math.round((converted + Number.EPSILON) * 10) / 10
  return converted
};

const convertToFahrenheit = function(celsius) {
  let converted = 0;
  converted = ((celsius * 9) / 5) + 32;
  converted = Math.round((converted + Number.EPSILON) * 10) / 10
  return converted
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
