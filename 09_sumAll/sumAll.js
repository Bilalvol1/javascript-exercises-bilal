const sumAll = function(a, b) {
    let sum = 0
    if ( a < 0 || b < 0 || 
        a % 1 != 0 || b % 1 != 0 || 
        typeof a !== 'number' || typeof b !== 'number') {
        return 'ERROR';
    }
    if (a <= b) {
        for (let i = a; i <= b; i++) {
        sum += i;
        }
    } else {
        for (let i = a; i >= b; i--) {
        sum += i;
        }
    }
    return sum;
}

console.log(sumAll(4, 1))

// Do not edit below this line
module.exports = sumAll;
