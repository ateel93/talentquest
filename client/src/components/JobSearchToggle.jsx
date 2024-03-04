import { useState } from "react";

function JobSearch () {
    const [jobSearch, setJobSearch] = useState('False')

    return(
        <div>
            <div className="flex flex-col me-4">
                <form>
                    <div className="hover:bg-red-100">
                        <label>
                        <input type="radio" className="px-1.5"/>
                        Not Active
                        </label>
                    </div>
                    <div className="hover:bg-orange-100">
                        <label>
                        <input type="radio" />
                        Passively Looking
                        </label>
                    </div>
                    <div className="hover:bg-yellow-100">
                        <label>
                        <input type="radio" />
                        Strategically Looking
                        </label>
                    </div>
                    <div className="hover:bg-green-100">
                        <label>
                        <input type="radio" />
                        Actively Looking
                        </label>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default JobSearch;