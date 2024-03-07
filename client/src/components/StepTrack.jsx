import React from "react";
import { useState } from "react";

function StepTrack() {
    const [checked, setChecked] = useState('first')   

    return(
        <div className="flex flex-col me-4">
                <div className="hover:bg-green-100 rounded-md">
                <label>
                    <input
                        type="radio"
                        checked={checked === "Application"}
                        onChange={() => setChecked("Application")}
                    />
                    Application
                </label>
            </div>
            <div className="hover:bg-green-200 rounded-md">
                <label>
                    <input
                        type="radio"
                        checked={checked === "HR Call"}
                        onChange={() => setChecked("HR Call")}
                    />
                    HR Call
                </label>
            </div>
            <div className="hover:bg-green-300 rounded-md">
                <label>
                    <input
                        type="radio"
                        checked={checked === "Hiring Manager"}
                        onChange={() => setChecked("Hiring Manager")}
                    />
                    Hiring Manager
                </label>
            </div>
            <div className="hover:bg-green-400 rounded-md">
                <label>
                    <input
                        type="radio"
                        checked={checked === "Case Study"}
                        onChange={() => setChecked("Case Study")}
                    />
                    Case Study
                </label>
            </div>
            <div className="hover:bg-green-500 rounded-md">
                <label>
                    <input
                        type="radio"
                        checked={checked === "Final Round"}
                        onChange={() => setChecked("Final Round")}
                    />
                    Final Round
                </label>
            </div>
            <div className="hover:bg-green-600 rounded-md">
                <label>
                    <input
                        type="radio"
                        checked={checked === "References"}
                        onChange={() => setChecked("References")}
                    />
                    References
                </label>
            </div>
        </div>
    )
};

export default StepTrack;