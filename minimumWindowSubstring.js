/**
 * https://leetcode.com/problems/minimum-window-substring/
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const regexp = new RegExp(`[${t}]`)
    

    for(let i =0 ; i < s.length;i++){
        if(regexp.test(s[i])){
             
        }
    }

};

console.log(minWindow("bdab", "ab"))