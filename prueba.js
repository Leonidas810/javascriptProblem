function prepareGifts(gifts) {
    let aux = 0;
    gifts.sort((a, b) => {
        return a - b
    });

    return gifts.filter(e => {
        if (e !== aux) {
            aux = e;
            return true;
        }
        return false;
    });
}

console.log(prepareGifts([3, 1, 2, 3, 4, 2, 5]))