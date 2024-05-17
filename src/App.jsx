import { useState } from "react"
import { useEffect } from "react"
import { useCallback } from "react"
import { useMemo } from "react"
import { getSearchResults } from "./fetchers/getSearchResults";
import { getInstantResults } from "./fetchers/getInstantResults";
import SearchResults from "./components/SearchResults";
import { AutoSuggest } from "./components/AutoSuggest";
import "./App.css"
import debounce from "./utils/debounce";


function App() {

  const [searchValue , setSearchValue] = useState('');
  const [autoSuggestProducts, setAutoSuggestProducts] = useState([]);
  const [searchResultProducts, setSearchResultsProducts] = useState([]);
  const [hasToShowAutoSuggest, setHasToShowAutoSuggest] = useState(false);

  const inputHandler = useCallback(debounce(function(e){
    setHasToShowAutoSuggest(true);
    setSearchValue(e.target.value);
  },3000),[])

  const submitHandler = useCallback(function(e){
    e.preventDefault();
    setHasToShowAutoSuggest(false);
    console.log(searchValue);
    console.log(getSearchResults(searchValue).length)
    setSearchResultsProducts(getSearchResults(searchValue));
  },[searchValue])

  useEffect(function(){
    setAutoSuggestProducts(getInstantResults(searchValue))
  },[searchValue])
  
  return (
    <>

      <form className="formContainer" onSubmit={submitHandler}>
      <input className="searchbar" placeholder="Search Here" onChange={inputHandler} />
      <button className="button" type="submit">submit</button>
      </form>

      {hasToShowAutoSuggest && <AutoSuggest autoSuggestProducts={autoSuggestProducts} />}

      <SearchResults searchResultProducts={searchResultProducts}/>


    </>
  )
}

export default App
