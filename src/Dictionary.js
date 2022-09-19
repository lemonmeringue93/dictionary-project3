import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';

export default function Dictonary(props) {
       let [keyword, setKeyword] = useState(props.defaultKeyword);
        let [results, setResults] = useState(null);
        let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }

    function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse); 
     }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        console.log(event);
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true)
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary">
               
                <form onSubmit={handleSubmit}>  
                <input type="search" 
                placeholder="Enter a word"
                class="search-bar"
                onChange={handleKeywordChange} />
                </form>
               
                 <div className="hint">
                    Suggested words: sunset, wine, cell, powerhouse..
                </div>

                <br />

                <Results results={results}/>

            </div>
        );
    } else {
        load();
        return "Loading..."
    }
    } 