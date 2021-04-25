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