import React, { useState } from 'react';
import './Dictionary.css';
import axios from 'axios';
import Definition from './Definition';

export default function Dictonary(props) {
    const [wordData, setWordData] = useState({ready: false});
    const [keyword, setKeyword] = useState(props.defaultWord);

    function handleResponse(response) {
        console.log(response.data[0]);
        
        setWordData({
            ready: true,
            word: response.data.word
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
                <input type="search" 
                placeholder="Enter a word"
                onChange={handleKeywordChange} />
                </form>
                <Definition data={setWordData}/>
            </div>
        );
    } else {
        search();

        return "Loading...";
    }
 
}