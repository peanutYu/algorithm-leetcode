/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (countAndSay.cache) {
    return countAndSay.cache[n];
  }
  
  countAndSay.cache = {};
  var getInfo = function(num, len, prev) {
    var cur = '';
    var accum = 1;


    for (var i = 0, length = prev.length; i < length; i++) {
      var item = prev[i];
      if (item === '0') {
        cur += '1';
        accum = 1;
      } else if (prev[i + 1] && prev[i + 1] === item) {
        // cur += '21';
        accum++;
      } else if (prev[i - 1] && prev[i - 1] === item) {
        cur += (accum + item);
        accum = 1;
      } else if (item === '1') {
        cur += '11';
        accum = 1;
      } else {
        cur += ('1' + item);
        accum = 1;
      }
    }
    countAndSay.cache[num] = cur;
    
    if (num < len) {
      num++;
      getInfo(num, len, cur);
    }
  }

  getInfo(1, 30, '0');

  return countAndSay.cache[n]
};

console.log(countAndSay(6));
console.log(countAndSay.cache);