/**
 * @param {string} s
 * @return {number}
 */
/*
var lengthOfLongestSubstring = function(s) {
    
    let aux;
    let M=0;
    let map = new Map();
    let stack = new Array();
    for (let index = 0; index < s.length; index++) {
        if(!stack.includes(s[index])){
            map.set(s[index],index);
            stack.push(s[index]);
        }else{
            M < stack.length ? M=stack.length : M;
            aux=index;
            index = map.get(s[index]);
            map.set(s[index],aux);
            stack=[];
        }        
    }
    
    return M < stack.length ? M=stack.length : M;
}*/

var lengthOfLongestSubstring = function(s) { 
    let left =0; 
    let M=0;
    let set = new Set()
    for (let index = 0; index < s.length; index++) {
        while(set.has(s[index])){
            set.delete(s[left]);
            left++;
        }

        set.add(s[index]);
        M=Math.max(M,index-left+1);
    }
    return M;
}
console.log(lengthOfLongestSubstring("bpfbhmipx"));

console.log(lengthOfLongestSubstring("dvdf"));

console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("au"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("pdvaedpfg"));