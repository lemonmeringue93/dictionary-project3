import React from "react";

export default function Definition(props) {
    return (    
        <div className="Definition">
            <h1>{props.data.word}</h1>
            <h2>{props.data.phonetic}</h2>
        </div>
    );
}