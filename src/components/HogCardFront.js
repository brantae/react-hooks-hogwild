import React from "react";

function HogCardFront({ hog }) {

    return (
        <div>
            <h3>
                {hog.name}
            </h3>
            <img className="minPigTile" alt='pic of pig' src={hog.image}/>
        </div>
    )
}

export default HogCardFront