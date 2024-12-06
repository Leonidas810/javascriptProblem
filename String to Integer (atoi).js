/**
 * @param {string} s
 * @return {number}
 */


var myAtoi = function(s) {   
    const INT32_MAX = Math.pow(2, 31) - 1;
    const INT32_MIN = -(INT32_MAX + 1);


    const a = s.split("");
    let sign = "";
    let array=[];
    let num;
    for (let e of a) {
        if (e === " "){
            if(array.length === 0 && sign===""){
                continue;
            }else{
                break;
            }
        }
        if (e === "+" || e === "-"){
            if( sign === "" && array.length===0){
                sign = e;
                continue;
            }else{
                break;
            }
        }
        if (e.match(/[A-Za-z.]/)) break;
        array.push(e);
    }
    if(array.length===0) array=[0];
    array.unshift(sign);
    num = array.join("");
    num > INT32_MAX
    ? num = INT32_MAX 
    : num < INT32_MIN
    ? num = INT32_MIN 
    : num;
    return(parseInt(num));
};



console.log(myAtoi("000+85"));
