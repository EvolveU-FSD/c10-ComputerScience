let knownResults = [1,1]

function fib(number) {
    if (knownResults.length >= number)
    {
        return knownResults[number -1];
    }
    
    let newResult = fib(number-1) + fib(number-2)
    knownResults.push(newResult)
    return newResult;
}

var fibNumberToCalc = 75
var result = fib(fibNumberToCalc)
console.log('Fib number', fibNumberToCalc, 'is', result)
// console.log('known results are', knownResults)