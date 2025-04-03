/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const rows = matrix.length;

    const searchRow = ()=>{
        for(let i=0; i < rows;i++){
            if(target < matrix[i][0]){
                if(i===0){
                    return (i);
                }else{
                    return(i-1);
                }
            }else if(target === matrix[i][0]){
                return (i);
            }  
        }
        return rows-1;
    }

    const selectRow = matrix[searchRow()]


    function binarySearch(arr,target,start,end){
        let piv  = Math.floor((start+end)/2);
        if(start > end)return false;
        if (arr[piv] === target) {
            return true;
        } else if (arr[piv] < target) {
            return binarySearch(arr, target, piv + 1, end);
        } else {
            return binarySearch(arr, target, start, piv - 1);
        }
    }


    return binarySearch(selectRow,target,0,selectRow.length);
};