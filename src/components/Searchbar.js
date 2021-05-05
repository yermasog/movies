import React, { useContext } from "react";
import SearchContext from "../utils/SearchContext"

function Searchbar(props) {

    const stateName = useContext(SearchContext)

    return (
        <>
        <div>
            <form id="form">
                <input 
                type="search" 
                id="query" 
                name="movie" 
                placeholder="Search movie title"
                value={stateName}
                onChange={props.handleInputChange}/>
                <button onClick={props.handleSubmit} >Search</button>
            </form>
        </div>
        </>
    )

}

export default Searchbar;