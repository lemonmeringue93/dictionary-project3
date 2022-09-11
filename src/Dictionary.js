import React, { useState } from 'react';
import './Dictionary.css';
import axios from 'axios';
import Information from './Information';

export default function Dictonary(props) {
    const [wordData, setWordData] = useState({ready: false});
    const [keyword, setKeyword] = useState(props.defaultWord);

    function handleResponse(response) {
        console.log(response.data[0]);
        
        setWordData({
            ready: true,
            word: response.data[0].word,
            phonetic: response.data[0].phonetic,
            meanings: response.data[0].meanings[0].definitions[0].definition,
            audio: response.data[0].phonetics[0].audio
        })
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
        //search for a word
    }

    function handleKeywordChange(event) {
        console.log(event);
        setKeyword(event.target.value);
    }

    if (wordData.ready) {
        return (
            <div className="Dictionary">
                <form onSubmit={handleSubmit}>  
                <label>What do you want to know?</label> 
                <input type="search" 
                placeholder="Enter a word"
                class="form-control search-input"
                onChange={handleKeywordChange} />
                </form>
                <Information data={wordData}/>
            </div>
        );
    } else {
        search();

        return "Loading...";
    }
 
}