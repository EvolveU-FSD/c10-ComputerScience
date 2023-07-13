const array = [9,5,4,2,6,3,1,8]

function bubblePass(myArray){
    let anySwaps = false
    for(var i=0; i< myArray.length-1; i++)
    {
        if (myArray[i] > myArray[i+1]){
            var swap = myArray[i]
            myArray[i] = myArray[i+1]
            myArray[i+1] = swap
            anySwaps = true
        }
    }
    return anySwaps
}

function bubbleSort(myArray){
    do {
        // nothing
    } while (bubblePass(myArray))
}

console.log('raw', array)
bubbleSort(array)
console.log('sorted', array)