/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  function binarySearch(arr, target, start, end) {
    if (start >= end) return nums[start] >= target ? start : start + 1;
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      return binarySearch(nums, target, mid + 1, end);
    } else {
      return binarySearch(nums, target, start, mid - 1);
    }
  }
  const index = binarySearch(nums, target, 0, nums.length - 1);
  return index;
};

console.log(searchInsert([1, 3], 0));
