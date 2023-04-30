import './campoInputs.css' 
const Campo = (props) => {

    ""
    const {type = "text"} = props

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);
    }

    return <div className={`campo campo-${type}`}>
        <label className="campo-label">{props.titulo}</label>
        <input className="campo-input" type={type} placeholder={props.placeholder} required={props.required} onChange={manejarCambio} />
    </div>
}
export default Campo