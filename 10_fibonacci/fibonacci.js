const fibonacci = function(nthNumber) {

    if (nthNumber >= 2) {
        let zeroNumber = 0;
        let firstNumber = 1;
        for (i = 1; i < nthNumber; i++) {
        number = zeroNumber + firstNumber;
        zeroNumber = firstNumber;
        firstNumber = number;
    } return number;
    } else if (nthNumber == 0) return 0;
    else if (nthNumber == 1) return 1;
    else if (nthNumber < 0) return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
