// Task:
//     Based on the received dimensions, a and b, of an ellipse, calculare its area and perimeter.
//
//     Example:
// Input: elipse(5,2)
//
// Output: "Area: 31.4, perimeter: 23.1"
// Note: The perimeter approximation formula you should use: π * (3/2(a+b) - sqrt(ab))
//

function elipse(a,b){
    const area = ( Math.PI * a * b ).toFixed(1)
    const perimeter = (Math.PI * ((3 / 2) * (a + b) - Math.sqrt(a * b))).toFixed(1)
    return `Area: ${area}, perimeter: ${perimeter}`
}