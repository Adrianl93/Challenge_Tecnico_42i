import React from 'react'



export default function FindPairWithSum({setModalOne, modalOne}) {

    function handleClose(e){
        setModalOne(false)
        }

  return (
    
       
    <div class="modal-dialog" className="overlay" >
        <div className="modalContent">
            <div class="row">
                <h1 class="col-sd" id="exampleModalLabel">FindPairWithSum</h1>
                
            </div>
            
            <div class="row">
               
                <button   button type="button" class="col" className="CloseButtonModal" data-bs-dismiss="modal"  onClick={(e) => {handleClose(e)}}>Prueba otra vez!</button>
        
            </div>
    </div>
    </div>
  )
}
