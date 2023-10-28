// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
//
//     The returned value must be a string, and have "***" between each of its letters.
//
//     You should not remove or add elements from/to the array.

function twoSort(s) {
    s.sort()
    let firstString = s[0]
    let defString = ""
    for (let i = 0; i < firstString.length - 1; i++) {
        defString += firstString[i] + "***"
    }
    defString += firstString[firstString.length - 1]
    return defString
}