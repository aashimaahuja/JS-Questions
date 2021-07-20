const skipped = {},
  only = {},
  all = {};
let timerId = null;

function it(testName, callback) {
  all[testName] = callback;
  if (!timerId) {
    timerId = setTimeout(() => {
      timerId = null;
      if (Object.keys(only).length > 0) {
        Object.keys(only).forEach(key => {
          try {
            only[key]();
          } catch (e) {
            console.log('Failed', e);
          }
        });
      } else {
        Object.keys(all).forEach(key => {
          if (!(key in skipped)) {
            all[key]();
          }
        });
      }
    }, 0);
  }
}

it.skip = (testName, callback) => {
  skipped[testName] = callback;
};

it.only = (testName, callback) => {
  only[testName] = callback;
};

it('callback 1', () => {
  console.log('it1');
});
it('callback 2', () => {
  console.log('it2');
});
it.skip('callback 3', () => {
  console.log('it3');
});
