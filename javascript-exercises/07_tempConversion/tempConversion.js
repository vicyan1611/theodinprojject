const convertToCelsius = function (ftemp) {
  let ctemp = (5.0 / 9.0) * (ftemp - 32);
  return (Math.round(ctemp * 10) * 1.0) / 10.0;
};

const convertToFahrenheit = function (ctemp) {
  let ftemp = (ctemp * 9.0) / 5.0 + 32;
  return (Math.round(ftemp * 10) * 1.0) / 10.0;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
