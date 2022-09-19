import React from 'react';
import Dictionary from './Dictionary';
import './App.css';

export default function App() {
  return (
      <div className="App">
        
        <main> 
          <Dictionary defaultKeyword="truth" />
        </main>
        
        <footer className="App-footer">Coded by Belle Hamner.</footer>
      </div>
  );
}


