import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./profilemodal.css";



function ProfileView ({user}) {
    const [users, setUsers] = useState([])

    const [modal, setModal] = useState(false);

    const params = useParams()

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/users/${params.user_id}`)
        .then(resp => resp.json())
        .then(data => setUsers(data))
    }, []);

    const toggleModal = () => {
        setModal(!modal);
      };



    return (
        <>
        <div>
        <div className="">
            <button onClick={toggleModal} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Profile</button>
        </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="grid grid-cols-2 gap-4 px-9 py-10 bg-blue-200 max-w-2xl rounded-md shadow-md">
                <div>
                <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/public/person.jpeg" alt="fake person"/>
                    <h2 className="font-bold py-1">{user.name}</h2>
                    <h2 className="font-bold py-1">{user.profession}</h2>

                </div>
                <div>
                    <h2 className="py-1">{user.username}</h2>
                    <h2 className="py-1">{user.contact}</h2>
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