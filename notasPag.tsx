/*import HeaderComp from "../components/BarraNav";

function NotasPag(){
  return(<>
    <HeaderComp></HeaderComp>
    <h2>mostrar notaaas</h2>
    </>)
  }
  export default NotasPag;*/
  /*------------------------------------------------------ */
  /*import HeaderComp from "../components/BarraNav";

function NotasPag({ notas }: { notas: string[] }) {
  return(<>
    <HeaderComp></HeaderComp>
    <h2>Mis Notas</h2>
    <ul>
      {notas.map((nota, index) => (
        <li key={index}>{nota}</li>
      ))}
    </ul>
    </>)
}
export default NotasPag;*/
import HeaderComp from "../components/BarraNav";

interface NotasPagProps {
  notas: string[];
  onEliminarNota: (index: number) => void;
}

function NotasPag({ notas, onEliminarNota }: NotasPagProps) {
  return(
    <>
      <HeaderComp />
      <div className="notas-container">
        <h2>Tus Notas</h2>
        {notas.length === 0 ? (
          <p>No hay notas creadas todavía.</p>
        ) : (
          <ul className="lista-notas">
            {notas.map((nota, index) => (
              <li key={index} className="nota-item">
                {nota}
                <button 
                  onClick={() => onEliminarNota(index)}
                  className="boton-eliminar"
                >
                  Marcar como realizada
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default NotasPag;