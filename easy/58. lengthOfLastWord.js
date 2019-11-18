/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  var str = s.trim('');
  var strArr = str.split(' ');
  return strArr[strArr.length - 1] && strArr[strArr.length - 1].length || 0;
};

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord(''));