import React from 'react';
import {useState} from 'react';
import '../styles/Modal.css';
import PropTypes from 'prop-types';

export default function ModalNonContructible({setModalTwo, modalTwo}) {
  // create a new local state to store the input value, it is initialized empty
  const [input, setInput] = useState({
    coins: [],
  });
  // props validation
  ModalNonContructible.propTypes = {
    setModalTwo: PropTypes.func.isRequired,
    modalTwo: PropTypes.bool.isRequired,
  };

  const [results, setResults] = useState([]);
  const [resultsH2, setResultsH2] = useState(false);

  function handleArray(e) {
    // create a constant and assign it the value of the input
    const inputValue = e.target.value;

    // creates a constant in which the comma
    // is replaced by an empty string space ' '
    const inputNumbers = inputValue.replace(/[\s,]+/g, ' ');

    // divide the array using ' ' as separation
    let arrayNumbers = inputNumbers.split(' ');

    // filters empty array fragments so as not to store them
    arrayNumbers = arrayNumbers.filter((number) => number !== '');

    // convert each element of the array into a number
    arrayNumbers = arrayNumbers.map(Number);

    // store the new input value into the Input Local State
    setInput({
      ...input,
      [e.target.name]: arrayNumbers,
    });
    setResults(nonConstructibleChange(arrayNumbers));
  }

  function handleClose(e) {
    setModalTwo(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setResults(nonConstructibleChange(input.coins));
    setResultsH2(true);
  }

  // New arrow function created with name nonConstructibleChange
  const nonConstructibleChange = (coins) => {
    // Sort the numbers of the array from min to max
    coins.sort((a, b) => a - b);
    // currentChange variable is initialized to 0
    let currentChange = 0;

    // loop for... of to iterate the array coins
    for (const coin of coins) {
      // checks if the current coin is less than or equal to the current change

      //  +1, if it is it adds coin to the currentChange, otherwise it returns
      // the currentChange and adds 1 to it
      if (coin <= currentChange + 1) {
        currentChange += coin;
      } else {
        return currentChange + 1;
      }
    }
    // Once the array has been traversed and the value of currentChange
    // has been updated, it returns the value of currentChange
    // and add 1 to it
    return currentChange + 1;
  };

  return (
    <div className="overlay">
      <div className="modalContent">
        <div>
          <div className="containerModal">
            <h3 className="modalTitle">Non Contructible Change</h3>
            <button
              type="button"
              className="closeButtonModal"
              data-bs-dismiss="modal"
              onClick={(e) => {
                handleClose(e);
              }}
            >
              X
            </button>
          </div>
          <form className="formModal">
            <label>Coins you have:</label>
            <input
              value={input.name}
              name="coins"
              onChange={handleArray}
            ></input>

            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>
          <div className="containerModal">
            {results ? (
              <h4 className="results">
                The minimal Non contructible change is: {results}
              </h4>
            ) : (
              resultsH2 && (
                <h4 className="results">
                  Sorry,The minimal Non contructible change is 1{' '}
                </h4>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
