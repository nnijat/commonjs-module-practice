const substract = require("./subtract");

module.exports.subtractOne = function (num) {
    return substract(num, 1);
}

module.exports.subtractFive = function (num) {
    return substract(num, 5);
}

module.exports.subtractTen = function (num) {
    return substract(num, 10);
}