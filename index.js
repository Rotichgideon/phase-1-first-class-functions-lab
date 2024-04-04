// Code your solution in this file!
// Code your solution in this file!

const returnFirstTwoDrivers = (newArr) => {
    return newArr.slice(0, 2);
}

const returnLastTwoDrivers = (newArr) => {
    return newArr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (fare) => {
    return function (value) {
        return fare * value;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, selectingDrivers) => {
    return selectingDrivers(drivers);
}