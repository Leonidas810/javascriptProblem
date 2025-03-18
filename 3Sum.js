var threeSum = function (nums) {

    const length = nums.length;
    function swap(arr, i, j) {
        let tem = arr[i];
        arr[i] = arr[j];
        arr[j] = tem;
    }
    function partition(arr, low, high) {
        let pivote = arr[high];
        let i = low - 1;
        for (let j = low; j <= arr.length - 1; j++) {
            if (arr[j] < pivote) {
                i++;
                swap(arr, i, j);
            }
        }
        swap(arr, i + 1, high);
        return i + 1;
    }
    function quickSort(arr, low, high) {
        if (low < high) {
            let pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }


    quickSort(nums, 0, length - 1);
    let triplets = [];

    for (let left = 0; left < length - 1; left++) {
        if (left > 0 && nums[left] === nums[left-1]) {
            continue;
        }
        let i = left + 1;
        let right = length - 1;

        while (i < right) {
            let sum = nums[left] + nums[i] + nums[right];
            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                i++;
            } else {
                triplets.push([nums[left], nums[i], nums[right]]);
                i++;
                while (nums[i] === nums[i - 1] && i < right) {
                    i++;
                }
            }
        }
    }
    return (triplets);
};

const arr = [0, 0, 0, 0];


threeSum(arr).map(e => console.log(e));