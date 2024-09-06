const removeFromArray = function () {
  const array = arguments[0];
  const res = [];
  for (data of array) {
    let ok = true;
    for (let i = 1; i < arguments.length; ++i) {
      if (data === arguments[i]) {
        ok = false;
        break;
      }
    }
    if (ok) res.push(data);
  }
  return res;
};

// Do not edit below this line
module.exports = removeFromArray;
