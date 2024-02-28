import React, { useState } from "react";
import "./modal.css";

function Modalfour () {
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
            <h2 className="font-bold py-1">Cracking the Code of Job Application Success</h2>
            <p>Uncover the secrets to submitting successful job applications on Talent Quest. From writing compelling cover letters to mastering the art of follow-up, this article provides insider tips to increase your chances of landing interviews.

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

export default Modalfour;