import React, { useEffect, useState } from "react";
import "./App";
import axios from "axios";

const App = () => {
  let [personajes, setPersonajes] = useState([]);
  let [pagina, setPagina] = useState(42);

  useEffect(() => {
    let obtenerPersonajes = async () => {
      // Es el fetch
      let resultado = await axios.get(`https://rickandmortyapi.com/api/character/?page=${pagina}`);
      setPersonajes(resultado.data.results);
    };
    obtenerPersonajes();

    // document.title ="componente montado"
  }, [pagina]);

  // Funciones
  function irSiguiente() {
    setPagina(pagina + 1);
    console.log(pagina);
  }

  return (
    <div>
      <button onClick={irSiguiente} disabled={pagina <= 42 ? "" : "disabled"}   >Pagina Siguiente</button>
      {personajes.map((personaje) => (
        <div key={personaje.id}>
          <h2>{personaje.name}</h2>
          <img src={personaje.image} alt={personaje.name} />
        </div>
      ))}
    </div>
  );
};

export { App };
