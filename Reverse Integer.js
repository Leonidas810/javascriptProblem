/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let s=x.toString();
    let reversedString = s.split("").reverse().join("");
    let reversedNum =parseInt(reversedString) * Math.sign(x);
    return (reversedNum > 2147483648 || reversedNum < -2147483648) ? 0 : reversedNum;
};