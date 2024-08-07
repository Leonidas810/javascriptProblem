/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    let stack=[];
    let current=-1;
    for (let index = 0; index < s.length; index++) {
        if(!stack.includes(s[index])){
            stack.push(s[index]);
            current++;
        }else if(stack[current]==s[index] || stack[current-1]==s[index]){
            stack.reverse();
            if(!stack[current--]==s[index]){
                stack=longestPalindrome(s.slice(0,1));
            }else{
                stack.push()
            }

        }else{
            stack=longestPalindrome(s.slice(0,1));
        }
    }
    return stack;
};


console.log(longestPalindrome("baba"));




console.log(longestPalindrome("abcdcba"));
console.log(longestPalindrome("abccba"));



//abcdcba
//abccba