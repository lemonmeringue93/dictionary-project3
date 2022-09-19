import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';
import './Dictionary.css';

export default function Dictonary(props) {
       let [keyword, setKeyword] = useState(props.defaultKeyword);
        let [results, setResults] = useState(null);
        let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
         console.log(response.data);

    }

    function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse); 

    let pexelsApiKey = "563492ad6f91700001000001d4b3ce8b922143368e97af586ea049a0";
    let pexelsApiUrl = `https:api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
                    Suggested words: sunset, thwart, egregious
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