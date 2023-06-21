// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
//
//     Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

function shortcut (string) {
    let newArr = []
    let stringArr = string.split("")
    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i].toLowerCase() !== "a" && stringArr[i].toLowerCase() !== "e" && stringArr[i].toLowerCase() !== "i" && stringArr[i].toLowerCase() !== "o" && stringArr[i].toLowerCase() !== "u") {
            newArr.push(stringArr[i])
        }
    }
    return newArr.join("")
}