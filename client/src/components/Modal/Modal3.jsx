import React, { useState } from "react";
import "./modal.css";

function Modalthree () {
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
            <h2 className="font-bold py-1">Crafting a Stellar Resume</h2>
            <p>Your resume is your first impression. Learn how to create an attention-grabbing resume that stands out to employers on Talent Quest. From formatting tips to showcasing your skills, this guide will help you craft a resume that gets noticed.

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

export default Modalthree;