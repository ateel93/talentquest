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
            <h2 className="font-bold py-1">Navigating Job Alerts Like a Pro</h2>
            <p>Discover how to set up and manage job alerts effectively on Talent Quest. Never miss out on the latest opportunities with personalized alerts tailored to your preferences. 
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

export default Modalone;