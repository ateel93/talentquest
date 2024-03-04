import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import StepTrack from "../components/StepTrack";

  

function Tracker() {
  
    

    return(
        <div className="object-center">
           <StepTrack/>
        </div>
    )
}

export default Tracker;