function findNextSquare(sq) {
    // check for negative;
    if (sq < 0) {
        return -1;
    }

    let myNum = sq;
    // check if square;
    if (Number.isInteger(Math.sqrt(sq))) { // If sqr, loop & check until nxt sqr found
        for (var i = myNum + 1; i < Infinity; i++) {
            if (Number.isInteger(Math.sqrt(i))) {
                return i;
            }
        }
    } else {
        return -1;
    }
}


console.log(findNextSquare(121)); // 144
console.log(findNextSquare(625)); // 676
console.log(findNextSquare(319225)); // 320356

console.log(findNextSquare(155)); // -1
console.log(findNextSquare(342786627)); // -1