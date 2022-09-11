import React from "react";

export default function Definition(props) {
    return (    
        <div className="Definition">
            <h1>{props.data.word}</h1>
            <ul>
                <li>{props.data.phonetic}</li>
                <li>{props.data.meanings}</li>
            </ul>
            
        </div>
    );
}