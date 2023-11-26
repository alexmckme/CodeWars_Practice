// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
//
//     Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


function longest(s1, s2) {
    let stringObj = {}
    for (let i = 0; i < s1.length; i++) {
        if (stringObj[s1[i]]) {
            stringObj[s1[i]] += 1
        } else {
            stringObj[s1[i]] = 1
        }
    }
    for (let j = 0; j < s2.length; j++) {
        if (stringObj[s2[j]]) {
            stringObj[s2[j]] += 1
        } else {
            stringObj[s2[j]] = 1
        }
    }
    let arrKeys = Object.keys(stringObj)
    arrKeys.sort()
    return arrKeys.join('')
}