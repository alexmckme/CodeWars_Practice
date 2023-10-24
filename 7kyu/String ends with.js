// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
//
// Examples:
//
//     solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    for (let i = 0; i < ending.length; i++) {
        if (ending[ending.length - (1 + i)] !== str[str.length - (1 + i)]) {
            return false
        }
    }
    return true
}