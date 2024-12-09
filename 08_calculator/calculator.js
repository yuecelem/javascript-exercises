const add = function(number1, number2) {
	addresult = number1 + number2;
  return addresult;
};

const subtract = function(number1, number2) {
	subresult = number1 - number2;
  return subresult;
};

const sum = function(array) {
  let sumresult = 0;
  array.forEach((item) => {
    sumresult += item;    
  });  
	return sumresult;
};

const multiply = function(array) {
  let multresult = 1;
  array.forEach((item) => {
    multresult = multresult * item;
  })
  return multresult;
};

const power = function(number, powernumber) {
	powerresult = Math.pow(number, powernumber);
  return powerresult;
};

const factorial = function(number) {
  let factresult = 1;
  for (i = 1; i <= number; i++)
    factresult = factresult * i;
  return factresult;
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
