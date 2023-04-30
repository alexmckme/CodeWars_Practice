// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
//
//     Note: input will never be an empty string

function fakeBin(x){
    let newX = []
    for (let i = 0; i < x.length; i++) {
        if (Number(x[i]) < 5) {
            newX.push('0')
        } else {
            newX.push('1')
        }
    }
    return newX.join('')
}