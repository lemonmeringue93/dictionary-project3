import React from "react";
import Synonyms from './Synonyms';

export default function Meaning(props) {
    console.log(props.meaning);
    return (
        <div className="Meaning">
            <br />
            <h3>{props.meaning.partOfSpeech}</h3>
                {props.meaning.definitions.map(function(definition, index) {
                    return (
                        <div key={index}>
                            <p>
                            <strong>Definition:</strong>
                            {definition.definition}

                            <br />
                            <i>{definition.example}</i>
                
                            <br />
                           
                            </p>
                        </div>
                    );
               })} 
               <br />
               <br />
               <Synonyms synonyms={props.meaning.synonyms} />
        </div>

    );
}