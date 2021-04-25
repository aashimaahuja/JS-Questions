// Import stylesheets
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

let curried = curry(multiply);
console.log(curried(2, 3)(3));

function sum(...args) {
  function inner(...more) {
    return sum(...args, ...more);
  }
  let total = args.reduce((a, b) => a + b, 0);
  inner.toString = () => total;

  return inner;
}

console.log(sum(2, 3));
console.log(sum(1)(2)(2)(3)());
console.log(sum(1)(2)(2)(3));

function sum2(...args){
  function inner(...more){
    if(more.length == 0)
      return total;
    return sum2(...args,...more);
  }
  let total = args.reduce((ac,cv) => ac+cv,0);
  return inner;
}
console.log(sum2(1)(2)(4)())


// Bind Pollyfill
Function.prototype.mybind = function(context, ...args){
  let fn = this;

  if(!(fn instanceof Function)){
    console.log('Not an instance of function')
    return null;
  }

  return function(...args2){
    fn.apply(context,[...args,...args2]);
  }
}

let obj = {
  foo: 'bar'
}

function fn(){
  console.log(this.foo);
}

fn.mybind(obj)();

// Call Pollyfill

Function.prototype.myCall = function(context, ...args){
  context = context || window;
  context = Object(context);

  const fn = Symbol();
  context[fn] = this;
  let res = context[fn](...args);
  delete context[fn];

  return res;

}

// Apply Pollyfill

Function.prototype.myCall = function(context,args){
  context = context || window;
  context = Object(context);

  const fn = Symbol();
  context[fn] = this;
  let res = context[fn](...args);
  delete context[fn];

  return res;

}