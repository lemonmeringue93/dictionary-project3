import React from "react";
import './Information';

export default function Information(props) {
    return (    
        <div className="Information">
            <h1 class="text-capitalize">{props.data.word}</h1>
            <ul>
                <li>{props.data.phonetic}</li>
                <li>{props.data.meanings}</li>
            </ul>
        </div>
    );
}