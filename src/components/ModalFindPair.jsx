import React from 'react'
import { useState } from 'react';
import "../styles/Modal.css"




export default function ModalFindPair({setModalOne, modalOne}) {

    //create a new local state to store the input value, it is initialized empty
    const [input,setInput]=useState({
        numbers: [],
        targetSum: ""
    })

    const [results, setResults] = useState([])
    const [resultsH2, setResultsH2] = useState(false);

    function handleChange(e){
        // store the new input value into the Input Local State
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
        setResults(findPairWithSum(input.numbers, input.targetSum));
    }
    function handleArray(e){

    // create a constant and assign it the value of the input
       const inputValue = e.target.value;

    //creates a constant in which the comma is replaced by an empty string space ' '
       const inputNumbers = inputValue.replace(/[\s,]+/g, ' ');

    //divide the array using ' ' as separation
       let arrayNumbers = inputNumbers.split(' ');
    
    //filters empty array fragments so as not to store them
       arrayNumbers = arrayNumbers.filter(number => number !== '');

    //convert each element of the array into a number
       arrayNumbers = arrayNumbers.map(Number);

    // store the new input value into the Input Local State
        setInput({
            ...input,
            [e.target.name]:arrayNumbers
        })
        setResults(findPairWithSum(input.numbers, input.targetSum));
    }

    function handleClose(e){
        setModalOne(false)
        }
    function handleSubmit(e){
        e.preventDefault();
        setResults(findPairWithSum(input.numbers, input.targetSum));
        setResultsH2(true)
            
            }

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
  

  return (
    
       
    <div  className="overlay" >
        <div className="modalContent">
            <div className="containerModal">
                <h3 className='modalTitle'>Find Pair With Sum</h3>
                
                <button button type="button" className="closeButtonModal" data-bs-dismiss="modal"  onClick={(e) => {handleClose(e)}}>X</button>
                <form className='formModal'>
                    <label>List of numbers</label>
                    <input
                    value={input.name}
                    name="numbers"
                    onChange={handleArray}></input>
                    <br></br>

                    <label>Target Sum</label>
                    <input type='number'
                    value={input.name}
                    name="targetSum"
                    onChange={handleChange}></input>
                    <br></br>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </form>
                
                {( results.length > 0)  ? <h4 className='results'>The numbers {results[0]} and {results[1]} sums {input.targetSum}</h4> : resultsH2 && <h4 className='results'>Sorry, no pair found for the target sum</h4>}
                
            </div>
            
            <div className="row">
               
               
        
            </div>
    </div>
    </div>
  )
}
