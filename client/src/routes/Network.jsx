import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
// import MessageModal from "../components/Modal/MessageModal";
import ProfileView from "../components/Modal/ProfileView";

function Network () {

    const [users, setUsers] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const params = useParams()

    const newSearch = users.filter(user => {
        return user.name.toLowerCase().includes(searchTerm.toLowerCase())
        ||
        user.profession.toLowerCase().includes(searchTerm.toLowerCase())
    })

    useEffect(() => {
        fetch('http://127.0.0.1:5000/users')
        .then(resp => resp.json())
        .then(data => setUsers(data))
    }, []);


    return(
        <div>
            <h2 className="text-lg font-semibold py-2">Search profiles</h2>
          <div className="pb-2">
            <input type="text" className="py-2 w-96 h-8 text-center shadow-xl" placeholder="Search by name or title..."  value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
          </div>
            <div className="flex flex-wrap overflow-auto max-h-96 px-1.5">
                {newSearch.map(user => (<div key={user.id} className="flex justify-between px-4 pt-4 w-60 max-w-sm bg-blue-100 border border-gray-200 hover:bg-blue-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center pb-10">
                    <img className="rounded-full w-28 h-28" src={user.image} />
                    {/* <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/public/person.jpeg" alt="fake person"/> */}
                    <h5 className="pt-2 mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.name}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{user.profession}</span>
                        <div className="flex mt-4 md:mt-6">
                            <ProfileView key={user.id} user={user}/>
                            {/* <MessageModal key={user.id} user={user}/> */}
                        </div>  
                    </div>
                </div>))}
            </div>
        </div>
    )
}

export default Network;