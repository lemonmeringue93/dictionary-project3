
import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <body>
      <header className="App-header">
        Dictionary    
    </header>
    <main> 
     <Dictionary defaultWord="Halo"/>
    </main>
    <footer className="App-footer">Coded by Belle Hamner.</footer>
    </body>
    </div>
  );
}


