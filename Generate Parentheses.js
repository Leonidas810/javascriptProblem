/**
 * @param {number} n
 * @return {string[]}
 */


var generateParenthesis = function (n) {
    let arr = [];

    function DFS(leftP, rightP, s) {
        if (s.length == 2 * n) {
            arr.push(s);
            return;
        }
        if (leftP < n) DFS(leftP + 1, rightP, s + "(");
        if (rightP < leftP) DFS(leftP, rightP +1, s + ")");
    }

    DFS(0, 0, "");
    return arr;
};

console.log(generateParenthesis(3))

/*
First try
var isValid = function (s) {
    const stack = [];
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
        if (i === 0) {
            stack.push(s[i].charCodeAt());
            if (i === 0) continue;
        } else {
            if (
                stack[counter] === s[i].charCodeAt() - 2 ||
                stack[counter] === s[i].charCodeAt() - 1
            ) {
                counter--;
                stack.pop();
            } else {
                counter++;
                stack.push(s[i].charCodeAt());
            }
        }

    }
    return stack.length === 0;
};

var generateParenthesis = function (n) {
    let arr = [];

    function DFS(leftP, rightP, s) {
        if (leftP === 0 && rightP === 0 && isValid(s)) arr.push(s);
        if (leftP !== 0) DFS(leftP - 1, rightP, s + "(");
        if (rightP !== 0) DFS(leftP, rightP - 1, s + ")");
    }

    DFS(n, n, "");
    return arr;
};

*/

/**
 * Second try
 var generateParenthesis = function (n) {
    let arr = [];

    function DFS(leftP, rightP, s) {
        if (s.length == 2 * n) {
            arr.push(s);
            return;
        }
        if (leftP < n) DFS(leftP + 1, rightP, s + "(");
        if (rightP < leftP) DFS(leftP, rightP +1, s + ")");
    }

    DFS(0, 0, "");
    return arr;
};
 */