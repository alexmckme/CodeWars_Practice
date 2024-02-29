// Given the triangle of consecutive odd numbers:
//
//     1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
//
// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {

    let initialNum = 1

    for (let i = 0; i < n; i++) {
        initialNum += 2 * i
    }

    let somme = initialNum

    for (let j = 1; j < n; j++) {
        initialNum += 2
        somme += initialNum
    }

    return somme
}