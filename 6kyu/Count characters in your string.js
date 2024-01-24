// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
//
// What if the string is empty? Then the result should be empty object literal, {}.
//

function count(string) {
    if (string.length === 0) {
        return {}
    } else {
        let obj = {}
        for (let i = 0; i < string.length; i++) {
            if (string[i] in obj) {
                obj[string[i]] += 1
            } else {
                obj[string[i]] = 1
            }
        }
        return obj
    }
}