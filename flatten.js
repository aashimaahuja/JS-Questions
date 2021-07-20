function flatten(arr) {
  const res = [];
  function recur(arr) {
    for (let el of arr) {
      if (Array.isArray(el)) {
        recur(el);
      } else {
        res.push(el);
      }
    }
  }

  recur(arr);
  return res;
}

function flattenIterative(arr) {
  let stack = [...arr];
  let res = [];
  while (stack.length > 0) {
    let el = stack.pop();
    if (Array.isArray(el)) {
      stack.push(...el);
    } else {
      res.push(el);
    }
  }
  return res.reverse();
}
