import React, { useState, useEffect } from 'react';
import './App.css';
import Personaje from '../../../Src/models/personaje';

function App() {
  const [personaje, setpersonaje] = useState([]);

  useEffect(() => {
    fetch('/personaje')
      .then(response => response.json())
      .then(data => setpersonaje(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <h1>Listado de Personajes</h1>
      <ul>
        {Personaje.map(personaje => (
          <li key={personaje.id}>{personaje.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
