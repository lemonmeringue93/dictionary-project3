import React from "react";
import './Information.css';

export default function Information(props) {
    return (    
        <div className="Information-box">
            <h1 className="text-lowercase">{props.data.word}</h1>
                <div className="row">
                    <div className="Phonetic">
                        <a href={props.data.audio} target="_blank" rel="noopener noreferrer">Listen</a>
                    </div>
                    <div className="pronounce">{props.data.phonetic}</div>
                </div>
        </div>
    );
}