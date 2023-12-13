// Define a method/function that removes from a given array of integers all the values contained in a second array.
//
// Examples (input -> output):
// * [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
// * [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
// * [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]
// Enjoy it!!

Array.prototype.remove_ = function(integer_list, values_list){
    for (let i = 0; i < values_list.length; i++) {
        for (let j = 0; j < integer_list.length; j++) {
            if (integer_list[j] === values_list[i]) {
                integer_list.splice(j, 1)
                j--
            }
        }
    }
    return integer_list
}