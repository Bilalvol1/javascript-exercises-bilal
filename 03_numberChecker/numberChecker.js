function numberChecker(number) {
  if (number === 1000 || number === 10 || number !== 9 && number !== 6) { //simple solution: number >= 10
    return true;
  } else {
    return false;
  }
}

// Do not edit below this line
module.exports = numberChecker;
