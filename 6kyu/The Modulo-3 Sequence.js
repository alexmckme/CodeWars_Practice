// Task:
//     Consider a sequence where the first two numbers are 0 and 1 and the next number of the sequence is the sum of the previous 2 modulo 3. Write a function that finds the nth number of the sequence.
//
//     Constraints:
// 1 ≤ N ≤ 10^19
// Example:
//     sequence(1);
// 0
// sequence(2);
// 1
// sequence(3);
// 1

// function sequence(n){
//   if (n === 1) {
//     return 0
//   } else if (n === 2) {
//     return 1
//   } else {
//     let seqA = 0
//     let seqB = 1
//     let seqC
//     for (let i = 3; i <= n; i++) {
//       seqC = (seqA + seqB) % 3
//       seqA = seqB
//       seqB = seqC
//     }
//     return seqC
//   }
// }

function sequence(n) {
    let det = n % 8
    switch(det) {
        case 1:
            return 0;
        case 2:
            return 1;
        case 3:
            return 1;
        case 4:
            return 2;
        case 5:
            return 0;
        case 6:
            return 2;
        case 7:
            return 2;
        case 0:
            return 1;
    }
}