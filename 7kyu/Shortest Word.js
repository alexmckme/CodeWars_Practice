// Simple, given a string of words, return the length of the shortest word(s).
//
//     String will never be empty and you do not need to account for different data types.

function findShort(s){
    let arrS = s.split(" ")
    let arrLength = arrS.map( element => element.length)
    let minLength = Math.min(...arrLength)
    return minLength
}