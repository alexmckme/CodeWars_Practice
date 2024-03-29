// Given a positive integer N, return the largest integer k such that 3^k < N.
//
//     For example,
//
// largest_power(3) == 0
// largest_power(4) == 1
// You may assume that the input to your function is always a positive integer.
//

function largestPower(n){
    let p = 0
    while (3 ** p < n) {
        p += 1
    }
    return p - 1
}