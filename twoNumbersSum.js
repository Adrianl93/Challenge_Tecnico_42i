//Given an array of integers, no number in this array is repeated, and an integer representing the target sum, implement a function that find whether there's a pair of numbers in the array that adds up to the target sum. Return the pair in an array. If such pair does not exist, return an empty array.

// New arrow function created with name findPairWithSum
const findPairWithSum = (num, targetSum)=>{
    // New set created to save the seen numbers without repeat
    const seenNums = new Set();
    //new const with a Empty Array
    const output = [];

    //For loop that loops through the array
for (let i = 0; i < num.length; i++){

    //aux take value from targetsum and substracts the value of num in the current loop
    const aux = targetSum - num[i];

    // It looks to see if the aux value is in seenNums and if it exists, it pushes it to output and the current value of num[i] too.
    if (seenNums.has(aux)){
    
        output.push(aux);
        output.push(num[i]);
        return output;
    }
    //If aux is not in seenNums it add the current value of num[i] to this Set
    seenNums.add(num[i])
}
    //Finally it return the array with the two numbers that sum the value of targetSum
    return output;
}


module.exports = { findPairWithSum };