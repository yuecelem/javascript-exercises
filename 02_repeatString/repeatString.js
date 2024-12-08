const repeatString = function(string, num) {
    let combinedString = [];
    for (i = 0; i < num; i++) {
        combinedString = combinedString.concat(string);
    }
    return combinedString;
};
// Do not edit below this line
module.exports = repeatString;
