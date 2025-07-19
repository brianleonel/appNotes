/**/import { Link } from "react-router-dom"

function HeaderComp(){
    return(
        <header className="header">
            <h2 className="title">Notes App</h2>
            <nav>
                <ul className="nav-list">
                    <li>
{/*cuando se selecciona link cambia el url*/}                        
                        <Link to="/crear" className="link">
                            Crear Notas
                        </Link>
                    </li>
                    <li>
                        <Link to="/notes" className="link">
                            Notas
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default HeaderComp
