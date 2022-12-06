import React, { useState } from "react";
import Nav from "./Nav";
import HogContainer from "./HogContainer";
import Filter from "./FilterHogs";
import Sort from "./SortHogs";

import hogs from "../porkers_data";

function App() {

	const [filter, setFilter] = useState('All')
	const [sort, setSort] = useState('None')

	function changeFilter( newFilter ) {
		setFilter(newFilter)
	}

	//hogs is already a global variable so we do not need to pass it in as an arg
	function filterHogs() {
		if( filter === 'Greased')
			return hogs.filter( hog => hog.greased ) //greased is a boolean already
		else if (filter === 'Not Greased')
		return hogs.filter( hog=> !hog.greased ) 
		else return [...hogs]
	}

	function changeSortBy(newSortBy) {
		setSort(newSortBy)
	}

	function sortHogs() {
		let sortedHogs = filterHogs()
		if(sort === 'Weight')
			return sortedHogs.sort((hog1, hog2) => hog1.weight - hog2.weight)
		else if(sort === 'Name')
			return sortedHogs.sort((hog1, hog2) => hog1.name.toLowerCase().localeCompare(hog2.name.toLowerCase()))
	 	else return sortedHogs
	}

	return (
		<div className="App">
			<Nav />
			<Filter changeFilter={changeFilter} />
			<Sort changeSortBy={changeSortBy}/>
			<br></br>
			{/* invoke the function here */}
			<HogContainer hogs={sortHogs()}/>
		</div>
	);
}

export default App;
