module.exports = function check(str, bracketsConfig) {
  let currentStr = str;
  let prevStr;

  while (prevStr !== currentStr) {
    prevStr = currentStr;
    for (const [open, close] of bracketsConfig) {
      const pair = open + close;
      while (currentStr.includes(pair)) {
        currentStr = currentStr.replace(pair, '');
      }
    }
  }

  return currentStr.length === 0;
}
