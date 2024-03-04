import { useState, useEffect } from "react";
import Description from "../components/Modal/Description";


function Apply() {
    
    const [jobs, setJobs] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        fetch('http://127.0.0.1:5000/jobs')
        .then(resp => resp.json())
        .then(data => setJobs(data))
    }, []);
  
    const newSearch = jobs.filter(job => {
        return job.title.toLowerCase().includes(searchTerm.toLowerCase())
        ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase())
        ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
    })



    return(
        <div>
            
            <h3 className="py-2.5 font-extrabold">Open Roles</h3>
            <input type="text" className="py-2 w-96 h-8 text-center shadow-xl" placeholder="Search by company, location or job..."  value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
            <div className="flex flex-wrap justify-items-center items-center overflow-auto max-h-96 pt-2 px-1.5">
            {newSearch.map(job => (<div className="px-4 pt-4 w-60 max-w-sm p-6 h-60 bg-blue-100 border border-gray-200 hover:bg-blue-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{job.title}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{job.company}</p>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{job.location}</p>
                <Description job={job}/>
                </div>))}
            </div>
        </div>

    )
}

export default Apply;