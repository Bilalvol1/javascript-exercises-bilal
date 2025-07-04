const findTheOldest = function(arr) {
    getAge(arr);
    sortByAge(arr);
    return arr[0];
};

function getAge(arr) {
    arr.forEach( value => {
        if (!value.yearOfDeath) {
            let currentDate = new Date();
            return value.age = currentDate.getFullYear() - value.yearOfBirth;
        }
        else {
            value.age = value.yearOfDeath - value.yearOfBirth;
        }
    });
}

function sortByAge(arr) {
    return arr.sort(( a, b ) => b.age - a.age);
}

// Do not edit below this line
module.exports = findTheOldest;


