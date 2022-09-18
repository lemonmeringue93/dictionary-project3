import React from 'react';
import Meaning from './Meaning';

export default function Results(props) {
    console.log(props.results);
    if (props.results) {
        return (
            <div className="Results">
                <h2>{props.results.word}</h2>
                <br />
                <a href={props.phonetics[0].audio} target="_blank" rel="noreferrer">
                Listen
            </a>
            <br />
            {props.phonetic.text}
                {props.results.meanings.map(function(meaning, index) {
                   return (
                   <div key={index}>
                    <Meaning meaning={meaning}/>
                    </div>
                    );
                })}
            </div>
        );
    } else {
        return null;
    }
}