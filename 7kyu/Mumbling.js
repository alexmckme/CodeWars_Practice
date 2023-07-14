// This time no story, no theory. The examples below show you how to write function accum:
//
//     Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    let strS = s.split("")
    let newStrArr = []
    for (let i = 0 ; i < strS.length ; i++) {
        let interLetter = []
        interLetter.push(strS[i].toUpperCase())
        for (let j = 0; j < i; j++) {
            interLetter.push(strS[i].toLowerCase())
        }
        newStrArr.push(interLetter.join(""))
    }
    let finalStr = newStrArr.join("-")
    return finalStr
}