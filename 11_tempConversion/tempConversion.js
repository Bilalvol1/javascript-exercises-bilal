const convertToCelsius = function(number) {
  let fahrenheit = (number - 32) * (5/9);
  return parseFloat(fahrenheit.toFixed(1));
};

const convertToFahrenheit = function(number) {
  let celsius = (number * (9/5)) + 32;
  return parseFloat(celsius.toFixed(1));
};

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(0))


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
