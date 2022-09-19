import React from 'react';
import Meaning from './Meaning';
import './Results.css';

export default function Results(props) {
    console.log(props.results);
    if (props.results) {
        return (
            <div className="Results">
                
                <div className="word">
                <h2>{props.results.word}</h2>
                <br />
                <a  href={props.results.phonetics[0].audio} target="_blank" rel="noreferrer">
                Listen
                </a>
                <br />
                <section className="text">{props.results.phonetic}</section>
                </div>

                {props.results.meanings.map(function(meaning, index) {
                   return (
                   <section key={index}>
                    <Meaning meaning={meaning}/>
                    </section>
                    );
                })}
            </div>
        );
    } else {
        return null;
    }
}