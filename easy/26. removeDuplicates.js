/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var len = nums.length;
  var hash = {};
  while (len--) {
    if (!hash[nums[len]]) {
      hash[nums[len]] = true;
    } else {
      nums.splice(len, 1);
    }
  }
  return nums.length;
};

var arr = [1, 2, 3, 3, 4, 5, 6, 5]
console.log(removeDuplicates(arr));
console.log(arr);
