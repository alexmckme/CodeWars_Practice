// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
    let somme = 0
    numbers.forEach(x => somme += x*x)
    return somme
}