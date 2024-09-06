const reverseString = function (string) {
  let result = "";
  for (let id = string.length - 1; id >= 0; --id) {
    result += string.at(id);
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
