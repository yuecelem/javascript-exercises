const sumAll = function(firstNumber, secondNumber) {
    let sum = 0;
    let largerNumber = 0;
    let smallerNumber = 0;
    if (firstNumber < 0 || secondNumber < 0) {
        return "ERROR";
    }
    if (firstNumber % 1 != 0 || secondNumber % 1 != 0) {
        return "ERROR";
    }
    if (typeof(firstNumber) != 'number' || typeof(secondNumber) != 'number') {
        return "ERROR";
    }
    if (firstNumber > secondNumber){
        largerNumber = firstNumber;
        smallerNumber = secondNumber;
    } else {
        largerNumber = secondNumber;
        smallerNumber = firstNumber;
    }
    for (let i = smallerNumber; i <= largerNumber; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
