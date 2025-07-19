/*import { Routes,Route } from "react-router-dom";
import InicioPag from "./paginas/inicioPag";
import NotasPag from "./paginas/notasPag";
import CrearNotasPag from "./paginas/crearPag";
route me permite renderizar un componente con el url, el url se define en path y se asocia
el componente 
function App(){*/
  /*return(<Routes>{/*me permite crear secciones de una app }*/
    /*<Route path="/" element={<InicioPag/>}/>{route nesecita un path y un elemnt }
    <Route path="/notes" element={<NotasPag/>}/>
    <Route path="/crear" element={<CrearNotasPag/>}/>
  </Routes>)
}
export default App;*/
/*---------1-------*/
/*-me permite hacer una comparacion entre los route con la url actual
  -cuando la Url coincida con una direccion de los route, se renderiza ese componente*/
/*import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import InicioPag from "./paginas/inicioPag";
import NotasPag from "./paginas/notasPag";
import CrearNotasPag from "./paginas/crearPag";

function App() {
  const [notas, setNotas] = useState<string[]>([]);

  const agregarNota = (nuevaNota: string) => {
    if (nuevaNota.trim() === "") return;
    setNotas([...notas, nuevaNota]);
  };

  return (
    <Routes>
      <Route path="/" element={<InicioPag />} />
      <Route 
        path="/notes" 
        element={<NotasPag notas={notas} />}
      />
      <Route 
        path="/crear" 
        element={<CrearNotasPag agregarNota={agregarNota} />} 
      />
    </Routes>
  );
}

export default App;*/
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import InicioPag from "./paginas/inicioPag";
import NotasPag from "./paginas/notasPag";
import CrearNotasPag from "./paginas/crearPag";

function App() {
  const [notas, setNotas] = useState<string[]>([]);
/*notas es un array de string y setNotas es la funcion q modifica a notas */
  const agregarNota = (nuevaNota: string) => {
    if (nuevaNota.trim() === "") return;
    setNotas([...notas, nuevaNota]);/*setnotas almacena nuevas notas en notas,[] crea un 
    nuevo array*/
  };
/*no me queda claro como funciona la funcion setNotas, los [] me confunden y la funcion setNuevanota
y setnuevanota solo recibe parametros? */
  // Función para eliminar una nota por su índice
  const eliminarNota = (index: number) => {
    const nuevasNotas = notas.filter((_, i) => i !== index);
    setNotas(nuevasNotas);
  };

  return (
    <Routes>
      <Route path="/" element={<InicioPag />} />
      <Route 
        path="/notes" 
        element={<NotasPag notas={notas} onEliminarNota={eliminarNota} />} 
      />
      <Route 
        path="/crear" 
        element={<CrearNotasPag agregarNota={agregarNota} />} 
      />
    </Routes>
  );
}

export default App;





