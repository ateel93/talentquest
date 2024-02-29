import { useState, useEffect } from "react";
import MessageModal from "../components/Modal/MessageModal";

function Network () {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5000/users')
        .then(resp => resp.json())
        .then(data => setUsers(data))
    }, []);

    // function handleClick(
    //     pass

    // )

    return(
        <div class="flex flex-wrap overflow-auto max-h-96 px-1.5">
            {users.map(user => (<div className="flex justify-end px-4 pt-4 w-60 max-w-sm bg-blue-100 border border-gray-200 hover:bg-blue-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-col items-center pb-10">
                <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/public/person.jpeg" alt="fake person"/>
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.name}</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">{user.profession}</span>
                    <div class="flex mt-4 md:mt-6">
                        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Profile</a>
                        <MessageModal />
                    </div>  
                </div>
            </div>))}
        </div>



// <div className="">
        //     <div className="grid grid-cols-4 gap-4 py-2.5">
        //     {users.map(user => (<h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.name}</h5>))}
        //     </div>
        // </div>
    )
}

export default Network;