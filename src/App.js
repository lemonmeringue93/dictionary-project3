
import './App.css';
import Dictionary from './Dictionary';
import logoswan from './logoswan.png';

export default function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logoswan} className="App-logo img-fluid" alt="logo" />
    </div>
    <main> 
     <Dictionary defaultWord="Halo"/>
    </main>
    <footer className="App-footer">Coded by Belle Hamner.</footer>
    </div>
  );
}


