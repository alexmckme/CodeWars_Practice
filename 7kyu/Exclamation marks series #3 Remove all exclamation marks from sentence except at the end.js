// Description:
//     Remove all exclamation marks from sentence except at the end.
//
//     Examples
// "Hi!"     ---> "Hi!"
// "Hi!!!"   ---> "Hi!!!"
// "!Hi"     ---> "Hi"
// "!Hi!"    ---> "Hi!"
// "Hi! Hi!" ---> "Hi Hi!"
// "Hi"      ---> "Hi"

function remove (string) {
    let nbEndingExcl = 0
    let i = 1
    while (i < string.length) {
        if (string[string.length - i] === "!") {
            nbEndingExcl += 1
            i += 1
        } else {
            break
        }
    }
    let newStr = string.replaceAll("!", "")
    for (let j = 0; j < i-1; j++) {
        newStr += "!"
    }
    return newStr
}