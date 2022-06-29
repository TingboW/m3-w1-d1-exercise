const { PI } = Math;  // private to this file

module.exports.area = (r) => PI * r ** 2;  // exported
module.exports.circumference = (r) => 2 * PI * r;  // exported