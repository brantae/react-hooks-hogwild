import React from "react"

function Sort( props ) {


    return (
        <div>
            Sort by: 
            <select onChange={ (e) => props.changeSortBy(e.target.value)}>
                 <option value="None">None</option>
                 <option value="Name">Name</option>
                 <option value="Weight">Weight Ascending</option>
            </select>
        </div>
    )
}

export default Sort