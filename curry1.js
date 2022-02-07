// Given a function , return curried function

multiply(2, 3, 4);

function multiply(a, b, c) {
  return a * b * c;
}
function curry(fn) {
  return function curried() {
    let args = [...arguments];
    if (args.length >= fn.length) return fn(...args);
    return curried.bind(null, ...args);
  };
}

console.log('curry 1');
let curried = curry(multiply);
console.log(curried(2, 3)(3));
