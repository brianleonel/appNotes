/*import CrearNotas from "../components/crearNotas";
import HeaderComp from "../components/BarraNav";

function CrearNotasPag(){
    return(<>
        <HeaderComp></HeaderComp>
        <CrearNotas></CrearNotas>
        </>)
  }
  export default CrearNotasPag;*/
  /*---------------------------------------------- */
 /* */import CrearNotas from "../components/crearNotas";
import HeaderComp from "../components/BarraNav";

function CrearNotasPag({ agregarNota }: { agregarNota: (nota: string) => void }) {
    return(<>
        <HeaderComp></HeaderComp>
        <CrearNotas agregarNota={agregarNota}></CrearNotas>
        </>)
}
export default CrearNotasPag;