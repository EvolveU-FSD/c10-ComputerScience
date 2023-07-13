function fib(number) {
    if (number < 2)
        return 1;
    return fib(number-1) + fib(number-2)
}

var fibNumberToCalc = 5
var result = fib(fibNumberToCalc)
console.log('Fib number', fibNumberToCalc, 'is', result)