import React from "react";

function HogCardBack({ hog }) {

    //This is the option to take if you do not want to hard-code and write the details using JSX
    const renderHogDetails = []

    for( let key in hog) {
        if( key!== 'name' && key !== 'image')
        renderHogDetails.push( <p>{`${key}: ${hog[key]}`}</p>)
    }
    console.log(renderHogDetails)

    //We could also build everything above in JSX below using dot notation 
    return (
        <div>
           {renderHogDetails}
        </div>
    )
}

export default HogCardBack