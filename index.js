function mapToNegativize(array) {
    let negArray = [];
    array.forEach(int => negArray.push(int * -1));
    return negArray;
}

function mapToNoChange(array) {
    let noChangeArray = [];
    array.forEach(int => noChangeArray.push(int));
    return noChangeArray;
}

function mapToDouble(array) {
    let doubleArray = [];
    array.forEach(int => doubleArray.push(int * 2));
    return doubleArray;
}

function mapToSquare(array) {
    let squaredArray = [];
    array.forEach(int => squaredArray.push(Math.pow(int, 2)));
    return squaredArray;
}

function reduceToTotal(array, startingPoint = 0) {
    let total = startingPoint;
    array.forEach(int => total += int);
    return total;
}

function reduceToAllTrue(array) {
    return array.every(item => !!item) ? true : false;
}

function reduceToAnyTrue(array) {
    return array.some(item => !!item) ? true : false;
}