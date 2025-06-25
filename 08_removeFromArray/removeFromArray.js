const removeFromArray = function(arr, ...toRemove) {
    for(i = 0; i < toRemove.length; i++) {
    arr = arr.filter((character) => character !== toRemove[i]);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
