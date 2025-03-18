/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    const length = nums.length;


    function swap(arr, i, j) {
        let aux = arr[i];
        arr[i] = arr[j];
        arr[j] = aux;
    }

    function partition(arr, left, right) {
        let piv = arr[right];
        let j = left - 1;
        for (let i = left; i <= arr.length - 1; i++) {
            if (arr[i] < piv) {
                j++;
                swap(arr, i, j);
            }
        }
        swap(arr, j + 1, right);
        return j + 1;

    }

    function quickSort(arr, left, right) {
        if (left < right) {
            let piv = partition(arr, left, right);
            quickSort(arr, left, piv - 1);
            quickSort(arr, piv + 1, right);
        }
    }
    quickSort(nums, 0, length - 1);

    let sumMoreClosedT = Infinity;

    for (let left = 0; left < length - 1; left++) {
        if (left > 0 && nums[left] === nums[left - 1]) {
            continue;
        }
        let i = left + 1;
        let right = length - 1;

        while (i < right) {
            let sum = nums[left] + nums[i] + nums[right];
            if (sum > target) {
                if (Math.abs(sumMoreClosedT - target) > Math.abs(sum - target) ) {
                    sumMoreClosedT = sum;
                }
                right--;
            } else if (sum < target) {
                if (Math.abs(sumMoreClosedT - target) > Math.abs(sum - target) ) {
                    sumMoreClosedT = sum;
                } 
                i++;
            } else {
                return sum;
            }
        }
    }
    return sumMoreClosedT;
};

const nums = [-1, 2, 1, -4];

console.log(threeSumClosest(nums, 1));
