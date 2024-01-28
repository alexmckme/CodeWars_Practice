// Description:
//     Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
//
//     Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s){
    const vowels = "aeiou"
    let finalStringArr = []
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i].toLowerCase())) {
            finalStringArr.push("!")
        } else {
            finalStringArr.push(s[i])
        }
    }
    return finalStringArr.join("")
}