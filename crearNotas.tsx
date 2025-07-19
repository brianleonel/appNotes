
/*
function CrearNotas() {
  // useState defino el tipo de la variable y la inicializo 
  const [notas, setNotas] = useState<string[]>([]); // 
  //([])valor inicial del array, string[] indica el tipo del estado
  const [nuevaNota, setNuevaNota] = useState(""); // Tipo inferido como string

  const agregarNota = () => {
    if (nuevaNota.trim() === "") return;
    setNotas([...notas, nuevaNota]); //agrega el string guardado en nuevanota al final de notas
    setNuevaNota("");//cambiar el valor de nuevaNota con ""
  };

  return (
    <div>
      <h1>Mis Notas</h1>
      <input
        type="text"
        value={nuevaNota}
        onChange={(e) => setNuevaNota(e.target.value)}
        /*-onChange es una funcion q recibe el parametro e
        -onChange captura el valor del input en e
          -target.value lo extrae de e
          -onChange nuevaNota=e al minimo cambio
          lo q recibe setNuevaNota lo retorna a nuevaNota
        placeholder="Escribe una nota..."
      />
      <button onClick={agregarNota}>Guardar</button>
      
    </div>
  );
}

export default CrearNotas;*/
/*------------------------------------------------------ */
import { useState } from "react";
/*el comp agregarNota es una funcion q recibe un string y no retorna nada */
/**/function CrearNotas({ agregarNota }: { agregarNota: (nota: string) => void }) {
  const [nuevaNota, setNuevaNota] = useState("");

  const handleAgregarNota = () => {
    agregarNota(nuevaNota);
    setNuevaNota("");/*el valor dentro de la funcion es el nuevo valor de la variable nuevaNota */
  };

  return (
    <div>
      <h1>Agregar nota nueva</h1>
      <input
        type="text"
        value={nuevaNota}/*? */
        onChange={(e) => setNuevaNota(e.target.value)}
        /*onChange se ejecuta cada ves q se modifica el imput y e es la variable 
        donde vamos a almacenar el valor q del imput, gracias a target.value capturamos el valor */
        placeholder="Escribe una nota nueva..."
      />
      <button onClick={handleAgregarNota}>Guardar</button>
    </div>
  );
}

export default CrearNotas;