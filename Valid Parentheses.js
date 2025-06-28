/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    if (i === 0) stack.push(s[i].charCodeAt());
    if (i === 0) continue;

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
  return stack.length === 0;
};

console.log(isValid("([])"));
