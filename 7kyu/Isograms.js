// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// Example: (Input --> Output)
//
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
//
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str){
    let strArr = str.toLowerCase().split("")
    for (let i = 0; i < strArr.length; i++) {
        let count = 0
        for (let j = 0; j < strArr.length; j++) {
            if (strArr[i] === strArr[j]) {
                count += 1
            }
        }
        if (count > 1) {
            return false
            break
        }
    }
    return true
}