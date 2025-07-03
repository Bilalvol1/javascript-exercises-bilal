const palindromes = function (str) {
    str = str.toLowerCase()
    
    let splitCases = ['!', '.', ',',' '];

    for (let i = 0; i < splitCases.length; i++) {
        str = str.split(splitCases[i]).join('');
    }

    let reverse = str.split('').reverse().join('')
    
    return str === reverse;
};

console.log(palindromes("Hello there,!."))

// Do not edit below this line
module.exports = palindromes;
