/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var len = s.length;
  var isDouble = len % 2 === 0;
  if (!isDouble) {
    return false;
  }
  var valid = '';
  for (var i = 0; i < len; i++) {
    switch(s[i]) {
      case '{':
        valid += s[i];
        break;
      case '}':
        var index = valid.lastIndexOf('{');
        if (index === -1 || index !== valid.length - 1) {
          return false;
        }
        valid = `${valid.substring(0, index)}${valid.substring(index + 1)}`;
        break 
      case '(':
        valid += s[i];
        break;
      case ')':
        var index = valid.lastIndexOf('(');
        if (index === -1 || index !== valid.length - 1) {
          return false;
        }
        valid = `${valid.substring(0, index)}${valid.substring(index + 1)}`;
        break;
      case '[':
        valid += s[i];
        break;
      case ']':
        var index = valid.lastIndexOf('[');
        if (index === -1 || index !== valid.length - 1) {
          return false;
        }
        valid = `${valid.substring(0, index)}${valid.substring(index + 1)}`;
        break;
      default: 
        break;
    }
  }
  return valid === '';
};

console.log(isValid('()'));
console.log(isValid('(]'));
console.log(isValid('([]'));
console.log(isValid('([)]'));
console.log(isValid('{[]}'));
console.log(isValid('(([]){})'));
console.log(isValid('[([]])'));