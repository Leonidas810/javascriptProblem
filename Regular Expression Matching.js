/**
 * 
 * Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).
 * 
 * 
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = function(s, p) {
    
    const re = new RegExp(`^${p}$`);
    const r =   re.test(s);
    return r;
};


isMatch("aa","a");