// import { useOutletContext } from "react-router-dom";
import Skills from "../components/Skills";
import JobSearch from "../components/JobSearchToggle";
import { useState, useEffect } from "react";

function Profile() {

  const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5000/users')
        .then(resp => resp.json())
        .then(data => setUsers(data))
    }, []);


  return (
    <div className="ps-8 pt-6">
      <div className="flex">
        <div className="grid grid-cols-3 gap-4 px-9 py-10 bg-blue-200 max-w-2xl rounded-md shadow-md">
          <div className="w-40">
            <img className="w-44" src="/public/person.jpeg" />
            {/* image will be above */}
            <h3 className="pt-2 ps-4 place-content-center">Name/Username</h3>
            <h3 className="ps-4 place-content-center">Profession</h3>
            <h3 className="ps-4 place-content-center">SKills + Proficiency</h3>
            <h3 className="ps-4 place-content-center">Contact</h3>
            {/* add in bio that works? */}
          </div>
          <div className="col-span-2">
            <h3 className="font-medium">About You: </h3>
            <input type='text' className='text-center shadow-md h-28 w-44' />
            <button className="flex items-center justify-center bg-gray-300 rounded-md shadow-md">Submit</button>
          </div>
          <div className="col-span-3">
            <h1 className="font-medium">Tell us about your search:</h1>
            <JobSearch />
          </div>
        </div>
          <div className="px-9 bg-blue-200 max-w-2xl rounded-md shadow-md">
            <h1>featured jobs here</h1>
          </div>
      </div>

      <Skills />
    </div>



      /* <div className="col-span-2">
          <h3 className="font-medium">About You: </h3>
          <input type='text' className='text-center shadow-md h-28 w-44' />
          <button className="flex items-center justify-center bg-gray-300 rounded-md shadow-md">Submit</button>
        </div> */
  );
}

export default Profile;