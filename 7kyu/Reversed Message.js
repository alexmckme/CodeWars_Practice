// Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.
//
//     Example:
//
// reverseMessage('This is an example of a Reversed Message!');
// Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht'


function reverseMessage(str) {
    if (str === "") {
        return ""
    }
    const intStr = str.split(" ")
    let newStr = []
    for (let i = 0; i < intStr.length; i++) {
        let word = intStr[i].toLowerCase()
        word = word.split("").reverse().join("")
        word = word[0].toUpperCase() + word.slice(1)
        newStr.unshift(word)
    }
    return newStr.join(" ")
}