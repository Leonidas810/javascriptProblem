/**
 * https://leetcode.com/problems/sort-colors/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
    // ez solution: return nums.sort((a,b)=>a-b)
    
    function swap(arr,a,b){
        let aux = arr[a];
        arr[a] = arr[b];
        arr[b] = aux;
    }

    function selectPiv(arr,start,end){
        let piv = end; //select end piv
        let j=start-1;
        for(let i =start; i< arr.length ; i++){
            if(arr[i] < arr[piv]){
                j++;
                swap(arr,i,j);
            }
        }
        swap(arr,j+1,end);
        return j+1;
    }

    
    function binarySort(nums,start,end){
        if(start< end){
            let piv = selectPiv(nums,start,end);
            binarySort(nums,start,piv-1);
            binarySort(nums,piv+1,end);
        }
    }

    return binarySort(nums,0,nums.length-1);
};

sortColors([2,0,2,1,1,0]);