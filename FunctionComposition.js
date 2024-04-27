var compose = function(functions) {
    if (functions.length === 0) {
        return function(x) { return x; };
    };
    
    return function(x) {
        return functions.reduceRight((acumulator, currentValue)=>{
            return acumulator= currentValue(acumulator); 
        },x)
    }
};


const fn = compose([x => x + 1, x => 2 * x]);
console.log(fn(4)); // 9
