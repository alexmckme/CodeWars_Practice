// Count how often sign changes in array.
//
//     result
// number from 0 to ... . Empty array returns 0
//
// example
// const arr = [1, -3, -4, 0, 5];
//
// /*
// | elem | count |
// |------|-------|
// |  1   |  0    |
// | -3   |  1    |
// | -4   |  1    |
// |  0   |  2    |
// |  5   |  2    |
// */
//
// catchSignChange(arr) == 2;

function catchSignChange(arr) {
    let count = 0
    if (arr === []) return 0
    let currentlyPositive = (arr[0] >= 0)
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= 0 && currentlyPositive === false) {
            count += 1
            currentlyPositive = true
        }
        if (arr[i] < 0 && currentlyPositive === true) {
            count += 1
            currentlyPositive = false
        }
    }
    return count
}