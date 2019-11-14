/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x === 0 || x === -0) {
    return x;
  }
  var isNegative =  false;
  var str = x.toString();
  var result = '';
  if (str.indexOf('-') > -1) {
    isNegative = true;
    str = str.substring(1);
  }

  result = (isNegative ? '-' : '') + str.split('').reverse().join('').replace(/\b(0+)/gi, '');
  if (result > Math.pow(2, 31) - 1 || result < Math.pow(-2, 31)) {
    return 0;
  }
  return parseInt(result, 10); 
};

console.log(reverse(120));
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(0));



