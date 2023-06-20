// Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin){
    let somme = 0
    for (let i = 0; i < bin.length; i++) {
        somme += (2 ** (bin.length - 1 - i)) * Number(bin[i])
    }
    return somme
}