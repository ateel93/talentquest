import { useOutletContext } from "react-router-dom";
import Skills from "../components/Skills";
import JobSearch from "../components/JobSearchToggle";

function Profile() {
  return (
    <div className="ps-8">
      <div className="grid grid-cols-3 gap-4 px-9 py-10 bg-blue-200 max-w-2xl">
        <div className="w-40">
          <img className="w-44" src='https://ucarecdn.com/d8e27946-9a54-4075-be36-502662302da9/-/resize/960x800/' />
          {/* image will be above */}
          <h3 className="pt-2 ps-4 place-content-center">Name</h3>
          <h3 className="ps-4 place-content-center">Profession</h3>
          <h3 className="ps-4 place-content-center">SKills + Proficiency</h3>
          <h3 className="ps-4 place-content-center">Contact</h3>
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

      <Skills />
    </div>
  );
}

export default Profile;