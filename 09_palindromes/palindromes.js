const palindromes = function (string) {
    let noPun = string;
    noPun = noPun.replace(/ /g, "");
    noPun = noPun.replace(/,/g, "");
    noPun = noPun.replace(/\./g, "");
    noPun = noPun.replace(/!/g, "");
    noPun = noPun.toLowerCase()

    let reverseArray = [];
    reverseArray = noPun.split("").reverse().join("")
    
    if (reverseArray == noPun) return true;
    else return false;
    
};

// Do not edit below this line
module.exports = palindromes;
