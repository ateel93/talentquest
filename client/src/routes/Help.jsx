import Contact from "../components/Contact";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Modalone from "../components/Modal/Modal1";
import Modaltwo from "../components/Modal/Modal2";
import Modalthree from "../components/Modal/Modal3";
import Modalfour from "../components/Modal/Modal4";
import Modalfive from "../components/Modal/Modal5";
import Modalsix from "../components/Modal/Modal6";
import Modalseven from "../components/Modal/Modal7";


function Help() {
    const [text, setText] = useState()


    return(
        <div>
            <h1 className="py-2.5 font-extrabold">Help Center</h1>
            {/* <input type="text" className='w-96 h-8 text-center shadow-xl' placeholder='Search Help Articles'/> */}
            <div className="py-2.5 px-3.5 grid gap-4 grid-cols-2 grid-rows-8">
                <div className="shadow-md">
                <h3 className="border-black bg-gray-50 h-14 flex items-center justify-center rounded-md ">Mastering the Art of Job Searching on Talent Quest</h3>
                <Modalone />
                </div>
                <div className="shadow-md">
                <h3 className="border-black bg-gray-50 h-14 -inset-0 flex items-center justify-center rounded-md">Navigating Job Alerts Like a Pro</h3>
                <Modaltwo />
                </div>
                <div className="shadow-md">
                <h3 className="border-black bg-gray-50 h-14 -inset-0 flex items-center justify-center rounded-md">Crafting a Stellar Resume for Talent Quest</h3>
                <Modalthree />
                </div>
                <div className="shadow-md">
                <h3 className="border-black bg-gray-50 h-14 -inset-0 flex items-center justify-center rounded-md">Cracking the Code of Job Application Success</h3>
                <Modalfour />
                </div>
                <div className="shadow-md">
                <h3 className="border-black bg-gray-50 h-14 -inset-0 flex items-center justify-center rounded-md">Ace Your Interviews</h3>
                <Modalfive />
                </div>
                <div className="shadow-md">
                <h3 className="border-black bg-gray-50 h-14 -inset-0 flex items-center justify-center rounded-md">Decoding Company Reviews</h3>
                <Modalsix />
                </div>
                <div className="shadow-md">
                <h3 className="border-black bg-gray-50 h-14 -inset-0 flex items-center justify-center rounded-md">Troubleshooting Common Job Search Issues</h3>
                <Modalseven />
                </div>
                <div>
                    <h2 className='text-lg font-semibold'>Not what you're looking for?</h2>
                    <h2 className='text-lg font-semibold'>Reach out to us:</h2>
                    <Contact />
                </div>
            </div>
           

        </div>
    )
}

export default Help;