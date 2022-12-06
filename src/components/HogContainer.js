import React from "react"
import HogTile from "./HogTile"

function HogContainer( props ) {

    const {hogs} = props
    
    const hogTiles = hogs.map( (hog, index) => <HogTile hog={hog} key={index} />)

    return (
        <div className="ui grid container" >
            {hogTiles}
        </div>
    )
}

export default HogContainer
