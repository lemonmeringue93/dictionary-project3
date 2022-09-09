import React, { useState } from 'react';
import './Dictionary.css';

export default function Dictonary() {
    let [keyword, setKeyword] = useState("")

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);
    }

    function handleKeywordChange(event) {
        console.log(event);
    }

    return (
    <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} />
        </form>
    </div>
    )
}