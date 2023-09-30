var countBits = function(n) {
    const result = new Array(n + 1).fill(0);
    for (let i = 0; i <= n; i++) {
        result[i] = i.toString(2).split('1').length - 1;
    }
    return result;
}

console.log(countBits(6));
// this ones would return 0, 1, 1, 2, 1, 2, 2