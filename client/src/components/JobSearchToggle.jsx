import { useState } from "react";

function JobSearch () {
    const [checked, setChecked] = useState('first')

   

    return(
        <div className="flex flex-col me-4">
                <div className="hover:bg-red-100 rounded-md">
                <label>
                    <input
                        type="radio"
                        value="Not Active"
                        checked={checked === "Not Active"}
                        onChange={() => setChecked("Not Active")}
                    />
                    Not Active
                </label>
            </div>
            <div className="hover:bg-orange-100 rounded-md">
                <label>
                    <input
                        type="radio"
                        value="Passively Looking"
                        checked={checked === "Passively Looking"}
                        onChange={() => setChecked("Passively Looking")}
                    />
                    Passively Looking
                </label>
            </div>
            <div className="hover:bg-yellow-100 rounded-md">
                <label>
                    <input
                        type="radio"
                        value="Strategically Looking"
                        checked={checked === "Strategically Looking"}
                        onChange={() => setChecked("Strategically Looking")}
                    />
                    Strategically Looking
                </label>
            </div>
            <div className="hover:bg-green-100 rounded-md">
                <label>
                    <input
                        type="radio"
                        value="Actively Looking"
                        checked={checked === "Actively Looking"}
                        onChange={() => setChecked("Actively Looking")}
                    />
                    Actively Looking
                </label>
            </div>
        </div>
    )
};

export default JobSearch;