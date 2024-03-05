import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./profilemodal.css";



function ProfileView ({user}) {
    const [users, setUsers] = useState([])

    const [modal, setModal] = useState(false);
    const [messageModal, setMessageModal] = useState(false);
    const [secondMessage, setSecondMessage] = useState(false);


    const params = useParams()

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/users/${params.user_id}`)
        .then(resp => resp.json())
        .then(data => setUsers(data))
    }, []);

    const toggleModal = () => {
        setModal(!modal);
      };

    const toggleMessageModal = () => {
        setMessageModal(!messageModal);
      };

    const handleThisClick = () => {
        setSecondMessage(!secondMessage)
      }



    return (
        <>
        <div>
            <div className="flex inline-block">
                <button onClick={toggleModal} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-30 -mr-1">View Profile</button>
                <button onClick={toggleMessageModal} className="py-2 px-2 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-30">Message User</button>
            </div>

        {messageModal && (
        <div className="modal">
          <div onClick={toggleMessageModal} className="overlay"></div>
          <div className="modal-content flex flex-col items-center">
            <h1 className="font-semibold">Message:</h1>{user.name}
            <input type="text" placeholder="Subject" className="mb-2 px-1.5 w-80" />
            <input type="text" placeholder="Body" className="mb-2 h-28 px-1.5 w-80" />
            <button className="save-draft mb-2 justify-center bg-gray-300 rounded-md shadow-md">Send</button>
            <button className="close-modal rounded-md" onClick={toggleMessageModal}>
              x
            </button>
          </div>
        </div>)}

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="grid grid-cols-2 gap-4 px-9 py-10 bg-blue-200 max-w-2xl rounded-md shadow-md">
                <div className="justify-center items-center">
                <img className="rounded-full w-28 h-28" src={user.image} />
                    <h2 className="font-bold py-1">{user.name}</h2>
                    <h2 className="font-bold py-1">{user.profession}</h2>

                </div>
                <div className="justify-center items-center">
                    <h2 className="py-1">{user.username}</h2>
                    <h2 className="py-1">{user.contact}</h2>
                    {secondMessage &&
                    <button onClick={handleThisClick} className="py-2 px-2 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-30">Message User</button>
                }

                </div>
                    <button className="close-modal" onClick={toggleModal}>
                    x
                    </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );

}


export default ProfileView;