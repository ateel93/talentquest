import { useState, useEffect } from "react";


function Apply() {
    
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5000/jobs')
        .then(resp => resp.json())
        .then(data => setJobs(data))
    }, []);
  
    console.log(jobs)


    return(
        <div><h3 className="py-2.5 font-extrabold">Open Roles</h3>
            <div className="flex flex-wrap overflow-auto max-h-96 pt-2 px-1.5">
            {jobs.map(job => (<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{job.title}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{job.company}</p>
                        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{job.location}</p>
                        <a href="#" class="inline-flex font-medium items-center text-blue-600 hover:underline">
                            Read more
                            <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                            </svg>
                        </a>
                </div>))}
            </div>
        </div>







        // <div>
        //     
        //     {/* <button>Apply</button> */}
        //     <div className="grid grid-cols-4 gap-4 bg-indigo-100 px-0.5 py-2.5">
        //         {jobs.map(job => (<h3 className="hover:bg-indigo-200 rounded flex items-center justify-center">{job.title} <br /> {job.location}</h3>))}
        //     </div>
            
        // </div>
    )
}

export default Apply;