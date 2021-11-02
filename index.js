// Code your solution in this file!
// const returnFirstTwoDrivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
// (function () {
//     return returnFirstTwoDrivers.slice(0,2)
// });


const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers () {
    return drivers.slice(0,2);
}

function returnLastTwoDrivers() {
    return drivers.slice(drivers.length - 2, drivers.length);
}

let selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(driversArray, driversSelectFunction) {
    return driversSelectFunction(driversArray);
}