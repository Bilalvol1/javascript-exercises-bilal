const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sum = 0;
  arr.forEach( value => sum+= value);
  return sum;
};

const multiply = function(arr) {
  let mul = 1;
  arr.forEach( value => mul*= value);
  return mul;

};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(num) {
	fact = 1;
  for(let i = 1; i < num + 1; i++) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
