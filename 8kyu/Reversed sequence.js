// Build a function that returns an array of integers from n to 1 where n>0.
//
// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    let numArr = []
    for (let i = 1; i <= n; i++) {
        numArr.unshift(i)
    }
    return numArr;
};