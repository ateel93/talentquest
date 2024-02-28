import React, { useState } from "react";
import "./modal.css";

function Modalsix () {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

//   if(modal) {
//     document.body.classList.add('active-modal')
//   } else {
//     document.body.classList.remove('active-modal')
//   }

  return (
    <>
        <div className="bg-blue-200 h-8">
            <button onClick={toggleModal} className="btn-modal">
                View
            </button>
        </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className="font-bold py-1">Decoding Company Reviews on Talent Quest</h2>
            <p>Before applying, know what it's really like to work for a company. This article provides tips on interpreting company reviews on Talent Quest, helping you make informed decisions about potential employers.


            </p>
            <button className="close-modal" onClick={toggleModal}>
              x
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modalsix;