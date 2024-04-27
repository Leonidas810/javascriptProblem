
var once = function(fn) {
    let obj = {
        calls: 0,
        value: 0
    };
    return function(...args){
        if(obj.calls==0){
            obj.calls=1;
            obj.value=fn(...args);
            return obj;
        }
    }
};

let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)

console.log(onceFn(1,2,3)); // 6
onceFn(2,3,6); // returns undefined without calling fn