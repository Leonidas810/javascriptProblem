/**
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length === 0) return [];
    const entries = [
        ['2', 'abc'],
        ['3', 'def'],
        ['4', 'ghi'],
        ['5', 'jkl'],
        ['6', 'mno'],
        ['7', 'pqrs'],
        ['8', 'tuv'],
        ['9', 'wxyz'],
    ];
    const map = new Map(entries);
    const res = [];

    function searchDFS(index, string) {
        if (index === digits.length) {
            res.push(string);
            return;
        }
        for(let i = 0; i < map.get(digits[index]).length; i++){
            searchDFS(index+1,string+map.get(digits[index])[i])
        }
    }

    searchDFS(0,"");

    return res
};

letterCombinations("23")