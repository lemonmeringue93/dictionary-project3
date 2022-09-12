import React, { useState } from 'react';
import './Dictionary.css';
import axios from 'axios';
import Results from './Results';

export default function Dictonary(props) {
       let [keyword, setKeyword] = useState([]);
        let [results, setResults] = useState("");

    function handleResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        console.log(event);
        setKeyword(event.target.value);
    }

    return (
            <div className="Dictionary">
                <form onSubmit={search}>  
                <label>What do you want to know?</label> 
                <input type="search" 
                placeholder="Enter a word"
                class="form-control search-input"
                onChange={handleKeywordChange} />
                </form>
                <Results results={results}/>
            </div>
        );
    } 