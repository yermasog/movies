import Heading from "./components/Heading";
import Searchbar from "./components/Searchbar";
import Results from "./components/Results";
import Nominations from "./components/Nominations";
import API from "./utils/API"
import React, { useState } from "react";
import ResultContext from "./utils/ResultContext";
import SearchContext from "./utils/SearchContext";


function App() {

  const [searchState, setSearchState] = useState()
  const [resultState, setResultState] = useState(
    {
      results: []
    }
  )

  const handleInputChange = event => {
    setSearchState(event.target.value.toUpperCase())
    console.log(event.target.value);
 }

 const handleSubmit = event => {
    event.preventDefault();
    apiSearch(searchState)
   
 }

  const apiSearch = query => {
    API.search(query)
       .then(res => console.log(res))
       .catch(err => console.log(err));
     
 }

  return (
    <>
   <Heading />
   <SearchContext.Provider value={searchState}>
   <ResultContext.Provider value={resultState}>
   <Searchbar handleSubmit={handleSubmit} handleInputChange={handleInputChange}/>
   <Results />
   <Nominations />
   </ResultContext.Provider>  
   </SearchContext.Provider>
   </>
  );
}

export default App;
