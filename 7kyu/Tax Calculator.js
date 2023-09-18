// Write a function to calculate compound tax using the following table:
//     For $10 and under, the tax rate should be 10%.
// For $20 and under, the tax rate on the first $10 is %10, and the tax on the rest is 7%.
// For $30 and under, the tax rate on the first $10 is still %10, the rate for the next $10 is still 7%, and everything else is 5%.
// Tack on an additional 3% for the portion of the total above $30.
//     Return 0 for invalid input(anything that's not a positive real number).
// Examples:
//     An input of 10, should return 1 (1 is 10% of 10)
// An input of 21, should return 1.75 (10% of 10 + 7% of 10 + 5% of 1)
// * Note that the returned value should be rounded to the nearest penny.

function taxCalculator(total) {
    if (total <= 0 || typeof(total) !== "number") {
        return 0
    } else if (total <= 10) {
        return Math.round(100 * total * 0.1) / 100
    } else if (total <= 20) {
        return Math.round(100 * (10 * 0.1 + (total - 10) * 0.07)) / 100
    } else if (total <= 30) {
        return Math.round(100 * (10 * 0.1 + 10 * 0.07 + (total - 20) * 0.05)) / 100
    } else {
        return Math.round(100 * (10 * 0.1 + 10 * 0.07 + 10 * 0.05 + (total - 30) * 0.03)) / 100
    }

}