/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1, ...nums2];
    arr.sort((a, b) => a - b);    
    let length=arr.length;
    let sum;
    if(length%2!=0){
        sum=arr[Math.floor(length/2)];    
    }else{
        sum=(arr[(length/2)]+arr[(length/2)-1])/2;    
    }

    return sum;
};

//let nums1 = [1,3], nums2 = [2];
//let nums1 = [1,2], nums2 = [3,4];
//let nums1 = [1,3,3], nums2 = [2,3,3];
let nums1 = [3], nums2 = [-2,-1];


console.log(findMedianSortedArrays(nums1,nums2));