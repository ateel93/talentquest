import React from "react";
import Stepper from 'awesome-react-stepper'
import './step.css';


function StepTrack() {
    

    
    

    return(
        <div className="w-96 h-8 object-center pt-6 ">
        <input type="text"></input>

        <Stepper
            strokeColor="#17253975"
            fillStroke="#172539"
            activeColor="#172539"
            activeProgressBorder="2px solid #17253975"
            submitBtn={<button className="stepperBtn">Submit</button>}
            continueBtn={<button className="stepperBtn">Next</button>}
            backBtn={<button className="stepperBtn">Back</button>}
            onSubmit={(step) => alert(`Congratulations!`)}>
            <div className="stepperSubDiv">
                <h1>Applied</h1>
            </div>
            <div className="stepperSubDiv">
                <h1>HR Call</h1>
            </div>
            <div className="stepperSubDiv">
                <h1>Hiring Manager</h1>
            </div>
            <div className="stepperSubDiv">
                <h1>Case Study</h1>
            </div>
            <div className="stepperSubDiv">
                <h1>Final Round</h1>
            </div>
            <div className="stepperSubDiv">
                <h1>References/Hired</h1>
            </div>
        </Stepper>

            
                    
                    
                </div>
    )
}

export default StepTrack;