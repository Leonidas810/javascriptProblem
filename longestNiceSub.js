/**
 * 
 *  You are given an array nums consisting of positive integers.
    We call a subarray of nums nice if the bitwise AND of every pair of elements that are in different positions in the subarray is equal to 0.
    Return the length of the longest nice subarray.
    A subarray is a contiguous part of an array.
    Note that subarrays of length 1 are always considered nice.

 * @param {number[]} nums
 * @return {number}
 * 
 */
var longestNiceSubarray = function (nums) {

    let i = 0;
    let j = 0;
    let sumSubArray = nums[i];
    let subarray = [nums[i]];
    let bestSubArray = [];

    while (i < nums.length && j < nums.length) {
        j++;
        const AND = sumSubArray & nums[j];
        sumSubArray = sumSubArray + nums[j];

        if (AND === 0) {
            subarray.push(nums[j])
        } else {
            i++;
            if (subarray.length > bestSubArray.length) bestSubArray = subarray;
            subarray = [nums[j]];
        }
    }
    return bestSubArray.length


};

longestNiceSubarray([744437702,379056602,145555074,392756761,560864007,934981918,113312475,1090,16384,33,217313281,117883195,978927664]);