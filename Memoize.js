
function memoize(fn) {
    let cache = new Map();
    return (...args) => {
        let key = JSON.stringify(args); // Convertir args en una cadena
        if (!cache.has(key)) {
            cache.set(key, fn(...args));
        }
        return cache.get(key);
    };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
});

console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5
console.log(callCount); // 1

