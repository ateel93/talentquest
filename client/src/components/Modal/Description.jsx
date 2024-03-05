import React, { useState } from "react";
import "./modal.css";

function Description({job}) {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };


    return(
        <div>
            <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline" onClick={toggleModal}>
                Read more
                <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                </svg>
            </a>

            {modal && (
            <div className="modal">
                <div onClick={toggleModal} className="overlay">
                    <div className="modal-content">
                        <h2 className="font-bold py-1">{job.title}</h2>
                        <h2 className="font-bold py-1">{job.company}</h2>
                        <h2 className="py-1">{job.location}</h2>
                        <h2 className="py-1">{job.salary}</h2>
                        <h2 className="py-1">{job.description}</h2>
                        <button className="close-modal" onClick={toggleModal}>
                        x
                        </button>
                        <button className="bg-gray-400 py-1 px-2 shadow-l rounded-md hover:bg-gray-500">Apply Now</button>
                        <button className="bg-gray-400 py-1 px-2 shadow-l rounded-md hover:bg-gray-500">Follow</button>
                    </div>
                </div>
            </div>
             )}
        </div>
    )
}

export default Description;