let numberFormat = function (number) {
  const isNegative = number < 0;
  const digits = Math.abs(number).toString();
  let resultString = "";

  for (let i = digits.length - 1; i >= 0; i--) {
    resultString = digits[i] + resultString;
    const currentNumbers = resultString.replaceAll(",", "").split("");

    if (currentNumbers.length % 3 === 0 && i) {
      resultString = "," + resultString;
    }
  }

  return isNegative ? "-" + resultString : resultString;
};
