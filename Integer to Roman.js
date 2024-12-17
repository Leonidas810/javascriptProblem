/**
 * @param {number} num
 * @return {string}
*/


var intToRoman = function(num) {
    let romanNum = "";  
    let prevKey= null;

    romanNumbers = {
        M: 1000,
        C: 100,
        X: 10,
        I: 1,
    }
    romanMediumNumbers={
        D: 500,
        L: 50,
        V: 5,
    }

    for(const key in romanNumbers){
        let cociente = Math.floor(num / romanNumbers[key]);
        if (cociente===9) {
            romanNum=romanNum.concat(key+prevKey);
        }else if(cociente >= 4){
            for (const midKey in romanMediumNumbers) {
                if(romanNumbers[key] * 5 === romanMediumNumbers[midKey]){
                    cociente === 4 ?
                    romanNum = romanNum.concat(key + midKey) 
                    : cociente === 5 ?
                    romanNum = romanNum.concat(midKey) 
                    : romanNum = romanNum.concat(midKey + key.repeat(cociente-5))
                }
            }

        }
        else{
            romanNum=romanNum.concat(key.repeat(cociente));
        }
        num = num - (cociente * romanNumbers[key]);

        prevKey=key;
    }

    return romanNum;
};

intToRoman(58);