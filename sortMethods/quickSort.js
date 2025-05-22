

function swap(arr, n, m) {
    const aux = arr[n];
    arr[n] = arr[m];
    arr[m] = aux;
}


function partition(arr, left, right) {
    let piv = arr[right];
    let j = left - 1;
    for (let i = left; i <= right - 1; i++) {
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
        const pivot = partition(arr, left, right);
        quickSort(arr, left, pivot - 1);
        quickSort(arr, pivot + 1, right);
    }
}

const arr = [4, 2, 3, 1, 4, 5, 5, 1, 6]

quickSort(arr, 0, arr.length - 1)
console.log(arr)

