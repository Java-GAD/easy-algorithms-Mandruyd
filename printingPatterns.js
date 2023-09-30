function printingPatternTriangle(n) {
    let numberToBePrinted = 1;
    for (let i = 1; i <= n; i++) {
        let result = "";
        for (let j = 1; j <= i; j++) {
            result += numberToBePrinted + " ";
            numberToBePrinted++;
        }
        console.log(result.trim());
    }
}

printingPatternTriangle(5);
