/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// [2, 7, 11, 15]  9
var twoSum = function (nums, target) {
  var hash = {};
  for (var i = 0, len = nums.length; i < len; i++) {
    var rest = target - nums[i];
    if (hash[rest] !== undefined) {
      return [hash[rest], i];
    }
    hash[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
