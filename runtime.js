const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

} //multiplies each num then assigns it to new array


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

} //same


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
} //makes array of all numbers leading up to a certain one


const tinyArray = getSizedArray(10); //makes [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], etc
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsXL1 = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsXL2 = perf.stop();



perf.start();                     // Starts timer
doublerAppend(largeArray);
let resultsLarge1 = perf.stop();  // Stops timer and save time results


perf.start();
doublerInsert(largeArray);
let resultsLarge2 = perf.stop();


perf.start();                     // Starts timer
doublerAppend(mediumArray);
let resultsMedium1 = perf.stop();  // Stops timer and save time results


perf.start();
doublerInsert(mediumArray);
let resultsMedium2 = perf.stop();


perf.start();                     // Starts timer
doublerAppend(smallArray);
let resultsSmall1 = perf.stop();  // Stops timer and save time results


perf.start();
doublerInsert(smallArray);
let resultsSmall2 = perf.stop();


perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsTiny1 = perf.stop();  // Stops timer and save time results


perf.start();
doublerInsert(tinyArray);
let resultsTiny2 = perf.stop();


// console.log('Results for the extraLargeArray');
// console.log("insert xl", resultsXL1.preciseWords);
// console.log("append xl", resultsXL2.preciseWords);

// console.log("insert L", resultsLarge1.preciseWords);
// console.log("append L", resultsLarge2.preciseWords);

// console.log("insert m", resultsMedium1.preciseWords);
// console.log("append m", resultsMedium2.preciseWords);

// console.log("insert s", resultsSmall1.preciseWords);
// console.log("append s", resultsSmall2.preciseWords);

// console.log("insert tiny", resultsTiny1.preciseWords);
// console.log("append tiny", resultsTiny2.preciseWords);