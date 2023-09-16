// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.
//
//     For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.
//
//     Good luck!
//
//     Please also try Simple remove duplicates
//


function solve(s){
    let arr = s.split("")
    let transformedArr = arr.map( (e) => {
        if (isNaN(Number(e))) {
            return " "
        } else {
            return e
        }
    })
    let newArr = transformedArr.join("").trim().split(" ")
    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = Number(newArr[i])
    }
    return Math.max(...newArr)
}