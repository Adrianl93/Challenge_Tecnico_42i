//Given an array of integers, no number in this array is repeated, and an integer representing the target sum, implement a function that find whether there's a pair of numbers in the array that adds up to the target sum. Return the pair in an array. If such pair does not exist, return an empty array.


const findPairWithSum = (num, targetSum)=>{
const output = [];

    for (let i = 0; i < num.length; i++) {
        for (let j = i+1 ; j < num.length; j++){
            if(targetSum - num[i] - num[j] == 0){
                output.push(num[i], num[j])
                
            }
        }
        
    }
    
    return output;
}


module.exports = { findPairWithSum };