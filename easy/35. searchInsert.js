/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  var len = nums.length;
  if (target > nums[len - 1]) {
    return len;
  }
  for (var i = 0; i < len; i++) {
    var num = nums[i];
    if (target <= num) {
      return i;
    }
  }
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 0));
