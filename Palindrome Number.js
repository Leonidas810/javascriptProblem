/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const string  = x.toString();
    const reverString = string.split("").reverse().join("");
    const r = string === reverString ? true : false;
    return r;
};

isPalindrome(21);