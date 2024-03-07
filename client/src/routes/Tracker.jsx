import { useOutletContext, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "../components/Login";
import StepTrack from "../components/StepTrack";

  

function Tracker() {

    const [applied, setApplied] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5000/apply')
        .then(resp => resp.json())
        .then(data => setApplied(data))
    }, []);

    function handleDelete() {
        fetch(`http://127.0.0.1:5000/deleteapp/${applied.id}`, {
          method: "DELETE",})
    }
  


    return(
        <div className="justify-items-center items-center overflow-auto max-h-96 pt-2 px-1.5 ">
            <h1 className="font-semibold pb-4">Track where you are per job process:</h1>
            <div className="flex flex-wrap overflow-auto space-x-2">
            {applied.map(app =>(
                <div key={app.id} className="px-4 py-4 space-x-2 w-80 max-w-sm p-6 h-75 bg-blue-100 border border-gray-200 hover:bg-blue-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h1 className="font-semibold pb-4 ">{app.job.title} role @ {app.job.company}</h1>
                   <StepTrack />
                   <button className="bg-red-300 rounded-md" onClick={handleDelete}>Delete</button>
                </div>
            ))}
           </div>
            {/* <Login /> */}
        </div>
    )
}

export default Tracker;