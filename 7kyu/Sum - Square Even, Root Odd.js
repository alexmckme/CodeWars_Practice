// Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.
//
//     The list will never be empty and will only contain values that are greater than or equal to zero.
//
//     Good luck!
//

const sumSquareEvenRootOdd = nums => {
    let finalArr = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            finalArr.push(nums[i]**2)
        } else {
            finalArr.push(nums[i]**(1/2))
        }
    }
    let finalResult = finalArr.reduce((acc,e) => acc + e, 0)
    return Number(finalResult.toFixed(2))
};