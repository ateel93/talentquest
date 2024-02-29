import React, { useState } from "react";
import "./modal.css";

function MessageModal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };

    return(
        <>
        <div>
        <button onClick={toggleModal} class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message User</button>
        </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content flex flex-col items-center">
            <input type="text" placeholder="Subject" className="mb-2" />
            <input type="text" placeholder="Body" className="mb-2" />
            <button className="save-draft mb-2 justify-center bg-gray-300 rounded-md shadow-md">Send</button>
            <button className="close-modal rounded-md" onClick={toggleModal}>
              x
            </button>
          </div>
        </div>
      )}
    </>
    )
}

export default MessageModal;