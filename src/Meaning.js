import React from "react";
import Synonyms from './Synonyms';
import "./Meaning.css";

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
                        <li>
                        {definition.definition}
                        </li>
                        <i>{definition.example}</i> 
                        </p>
                        </div>
                    );
               })} 
           

               <div className="synonyms">
               <Synonyms synonyms={props.meaning.synonyms} /> 
               </div>
               
        </div>

    );
}