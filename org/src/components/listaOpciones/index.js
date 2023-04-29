import '../campoTexto/campoInputs.css'
const ListaOpciones = (props) => {

    const manejarCambio = (e) => {
        props.actualizarEquipo(e.target.value)
    }

    return <div className="campo-select" >
        <label className="campo-select-label">Equipos</label>
        <select className="campo-select-option" value={props.valor} onChange={manejarCambio} >
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>            
            {props.equipos.map((e, i) => <option key={i} value={e}>{e}</option>)}
        </select>
    </div>
}

export default ListaOpciones