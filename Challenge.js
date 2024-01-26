// exercise 1:
//Given an array of integers, no number in this array is repeated, and an integer representing the target sum, implement a function that find whether there's a pair of numbers in the array that adds up to the target sum. Return the pair in an array. If such pair does not exist, return an empty array.

// New arrow function created with name findPairWithSum
const findPairWithSum = (num, targetSum) => {
  // New set created to save the seen numbers without repeat
  const seenNums = new Set();
  //new const with a Empty Array
  const output = [];

  //For loop that loops through the array
  for (let i = 0; i < num.length; i++) {
    //aux take value from targetsum and substracts the value of num in the current loop
    const aux = targetSum - num[i];

    // It looks to see if the aux value is in seenNums and if it exists, it pushes it to output and the current value of num[i] too.
    if (seenNums.has(aux)) {
      output.push(aux);
      output.push(num[i]);
      return output;
    }
    //If aux is not in seenNums it add the current value of num[i] to this Set
    seenNums.add(num[i]);
  }
  //Finally it return the array with the two numbers that sum the value of targetSum
  return output;
};


// exercise 2:

// Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you *cannot* create. The given coins can have any positive integer value and aren’t necessarily unique (i.e., you can have multiple coins of the same value).

// For example, if you’re given coins = [1, 2, 5], the minimum amount of change that you can’t create is 4. If you’re given no coins, the minimum amount of change that you can’t create is 1.

// ### *Sample Input*

// coins = [5, 7, 1, 1, 2, 3, 22]

// ### *Sample Output*

// 20


const NonConstructibleChange = (coins) => {
  coins.sort((a, b) => a - b);
  let currentChange = 0;

  for (const coin of coins) {
    if(coin <= currentChange + 1){
      currentChange += coin;
    } else {
      return currentChange + 1;
    }
  }

return currentChange + 1;
}

const exampleCoins = [5,7,1,1,2,3,22];
const resultado = NonConstructibleChange(exampleCoins);

console.log("Cantidad minima de cambio no contruible: ",resultado)



module.exports = { findPairWithSum, NonConstructibleChange };
