/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  var len = nums.length;
  while(len--) {
    if (nums.indexOf(val) > -1) {
      nums.splice(nums.indexOf(val), 1);
    }
  }
  return nums.length;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));