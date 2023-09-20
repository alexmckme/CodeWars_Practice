// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.
//
//     Good luck!
//
//     If you like substring Katas, please try:
//
// Non-even substrings
//
// Vowel-consonant lexicon

function solve(s){
    let sArr = []
    let vowels = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            sArr.push(s[i])
        } else {
            sArr.push(" ")
        }
    }
    let finalArr = sArr.join("")
    finalArr = finalArr.trim().replace(/\s+/g, " ")
    finalArr = finalArr.split(" ")
    let longest = 0
    for (let i = 0; i < finalArr.length; i++) {
        if (finalArr[i].length > longest) {
            longest = finalArr[i].length
        }
    }
    return longest
}