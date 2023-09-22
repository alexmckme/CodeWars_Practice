// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
//
//     Complete the method which accepts such an array, and returns that single different number.
//
//     The input array will always be valid! (odd-length >= 3)
//
// Examples
//     [1, 1, 2] ==> 2
//     [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
    let dico = {}
    for (let i = 0; i < numbers.length; i++) {
        if (Object.keys(dico).includes(String(numbers[i]))) {
            dico[numbers[i]] += 1
        } else {
            dico[numbers[i]] = 1
        }
    }
    let resultArr = Object.keys(dico).filter( e => dico[e] === 1)
    return Number(resultArr[0])
}