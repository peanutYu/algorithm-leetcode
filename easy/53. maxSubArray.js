/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  var max = null;
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    var newMax = null;
    var calcMax = 0;
    for (var j = i; j < len; j++) {
      calcMax += nums[j];
      if (newMax === null) {
        newMax = calcMax;
      } else {
        newMax = Math.max(newMax, calcMax);
      }
    }
    if (max === null) {
      max = newMax;
    } else {
      max = Math.max(max, newMax);
    }
  }
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-1, 0, -2]));

