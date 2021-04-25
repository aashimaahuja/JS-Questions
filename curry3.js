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