import React from "react"

function Filter( props ) {


    return (
        <div>
            Filter by: 
            <select onChange={ (e) => props.changeFilter(e.target.value)}>
                 <option value="All">Show all</option>
                 <option value="Greased">Greased up</option>
                 <option value="Not Greased">Not Greased</option>
            </select>
        </div>
    )
}

export default Filter