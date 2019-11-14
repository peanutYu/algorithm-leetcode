/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var str = '';
  for (var i = 0, len = strs.length; i < len; i++) {
    if (i === 0) {
      str = strs[i];
    } else {
      var str = compareCommonPrefix(str, strs[i]);
    }
  }
  return str;
};


var compareCommonPrefix = function(str, compareStr) {
  var index = 0;
  function loop(i) {
    if (!str[i] || !compareStr[i]) {
      return str.slice(0, i);    
    } else if (str[i] === compareStr[i]) {
      return loop(i + 1);
    }
    return str.slice(0, i);
  }

  var str = loop(index);
  return str;
}


console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));