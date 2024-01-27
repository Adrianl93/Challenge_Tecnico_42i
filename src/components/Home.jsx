import React from "react";
import { useState } from 'react';
import FindPairWithSum from "./FindPairWithSum";
import NonContructibleChange from "./NonContructibleChange";

const Home = () => {
  
    const [modalOne, setModalOne] = useState(false);
    const [modalTwo, setModalTwo] = useState(false);
  

    function handleModalOne(e){
        setModalOne(true);
    }


    function handleModalTwo(e){
        setModalTwo(true);
    }

    return (
      <div>
        {
            modalOne ?  <FindPairWithSum
            modalTwo={modalTwo}
            setModalOne={setModalOne}/> : <></>
            
        }
        {
            modalTwo ? <NonContructibleChange
            modalTwo={modalTwo}
            setModalTwo={setModalTwo}/> : <></>
        }
        <h1>Challenge 42i</h1>
      
      <button onClick={(e) => {handleModalOne(e)}}>Find Pair With Sum</button>
      <button onClick={(e) => {handleModalTwo(e)}}>Non Constructible Change</button>
      </div>
    );
  }
  
  export default Home;
  