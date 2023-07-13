const array = [9,5,4,2,6,3,1,8]

function bubblePass(myArray){
    let anySwaps = false
    // be careful of off by one errors
    for(var i=0; i< myArray.length-1; i++)
    {
        /* if we the next value is smaller then
            - swap them
            - anySwaps = true
        */
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