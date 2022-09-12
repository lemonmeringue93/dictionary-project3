import React from 'react';

export default function Definition(props) {
    return (    
        <div className="Definition-box">
            <div className="row">
            {props.data.partOfSpeech}
            </div>
            <div className="row">
            {props.data.meanings}
            </div>
            <div className="row"v>
            Sample sentences   
            </div>
            
        </div>
    );
}