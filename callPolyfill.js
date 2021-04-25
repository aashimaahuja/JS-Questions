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