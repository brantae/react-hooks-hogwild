import React, { useState } from "react";
import HogCardFront from "./HogCardFront";
import HogCardBack from "./HogCardBack";


function HogTile({ hog }) {
//We're conditionally rendering the additional pig info with an event therefore we need state to be able to update the page with that data

//We're starting off with the page NOT showing the details, so we should set the showDetails state as false
const [showDetails, setShowDetails] = useState(false)

function toggleDetails() {
    setShowDetails( !showDetails  )
}

    return (
        <div className="ui eight wide column" onClick={toggleDetails}>
            <div className="pigTile">
            {showDetails ? 
            <HogCardBack hog = {hog}/>
            : 
            <HogCardFront hog={hog}/>
            }
            </div>
        </div>
    )
}
export default HogTile