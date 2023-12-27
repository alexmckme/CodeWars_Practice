// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56
//
// Function:
//
//     getNumberFromString(s)

function getNumberFromString(s) {
    let finalString = ""
    for (let i = 0; i < s.length; i++) {
        if ("0123456789".includes(s[i])) finalString += s[i]
    }
    return Number(finalString)
}