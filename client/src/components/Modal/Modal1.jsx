import React, { useState } from "react";
import "./modal.css";

function Modalone () {
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
            <h2 className="font-bold py-1">Mastering the Art of Job Searching on Talent Quest</h2>
            <p>Learn the secrets to becoming a job search maestro on Talent Quest. From creating a standout profile to utilizing advanced search filters, this guide covers everything you need to know to maximize your job hunting experience.
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

export default Modalone