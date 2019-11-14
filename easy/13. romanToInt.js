/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var number = 0;
  var len = s.length;
  for (var i = 0; i < len; i++) {
    switch(s[i]) {
      case 'I': 
        number = number + 1;
        break;
      case 'V':
        number = number + 5;
        break;
      case 'X':
        number = number + 10;
        break;
      case 'L':
        number = number + 50;
        break;
      case 'C':
        number = number + 100;
        break;
      case 'D':
        number = number + 500;
        break;
      case 'M':
        number = number + 1000;
        break;
    }
    if (s[i] === 'I' && s[i + 1] && (s[i + 1] === 'V' || s[i + 1] === 'X')) {
      number = number - 1 * 2;
    }
    if (s[i] === 'X' && s[i + 1] && (s[i + 1] === 'L' || s[i + 1] === 'C')) {
      number = number - 10 * 2;
    }
    if (s[i] === 'C' && s[i + 1] && (s[i + 1] === 'D' || s[i + 1] === 'M')) {
      number = number - 100 * 2;
    }
  }
  return number;
};


console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));