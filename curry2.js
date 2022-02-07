
function sum(...args) {
  function inner(...more) {
    return sum(...args, ...more);
  }
  let total = args.reduce((a, b) => a + b, 0);
  inner.toString = () => total;

  return inner;
}
console.log('curry 2');
console.log(sum(2, 3));
console.log(sum(1)(2)(2)(3)());
console.log(sum(1)(2)(2)(3));