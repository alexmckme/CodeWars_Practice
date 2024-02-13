// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.
//
//     If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"
//
// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"
//
// If the total of both even and odd numbers are identical return: "Even and Odd are the same"

function evenOrOdd(str) {
    let digitsArr = str.split("")
    let sumEvens = digitsArr.reduce( (acc, digit) => {
        if (Number(digit) % 2 === 0) return acc + Number(digit)
        if (Number(digit) % 2 === 1) return acc
    }, 0)
    let sumOdds = digitsArr.reduce( (acc, digit) => {
        if (Number(digit) % 2 === 1) return acc + Number(digit)
        if (Number(digit) % 2 === 0) return acc
    }, 0)
    if (sumEvens > sumOdds) {
        return 'Even is greater than Odd'
    } else if (sumEvens < sumOdds) {
        return 'Odd is greater than Even'
    } else {
        return 'Even and Odd are the same'
    }
}