import React from "react";
import { useState } from 'react';
import ModalFindPair from "./ModalFindPair";
import ModalNonContructible from "./ModalNonContructible";
import "../styles/Home.css"
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
      <div className="containerHome">
        {
            modalOne ?  <ModalFindPair
            modalTwo={modalTwo}
            setModalOne={setModalOne}/> : <></>
            
        }
        {
            modalTwo ? <ModalNonContructible
            modalTwo={modalTwo}
            setModalTwo={setModalTwo}/> : <></>
        }
        <h1>Challenge 42i</h1>
      <div className="buttonBox">
      <button onClick={(e) => {handleModalOne(e)}}>Find Pair With Sum</button>
      <button onClick={(e) => {handleModalTwo(e)}}>Non Constructible Change</button>
      </div>
      </div>
    );
  }
  
  export default Home;
  