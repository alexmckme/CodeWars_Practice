// Write a function that takes a list of at least four elements as an argument and returns a list of the middle two or three elements in reverse order.

function reverseMiddle(array) {
    if (array.length % 2 === 0) {
        return [array[array.length/2], array[array.length/2 - 1]]
    } else {
        return [array[Math.ceil(array.length/2)], array[Math.floor(array.length/2)], array[Math.floor(array.length/2) - 1]]
    }
}