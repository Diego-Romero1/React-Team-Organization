import './campoInputs.css' 
const CampoTexto = (props) => {
    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);
    }

    return <div className="campo-texto">
        <label className="campo-texto-label">{props.titulo}</label>
        <input className="campo-texto-input" type="text" placeholder={props.placeholder} required={props.required} onChange={manejarCambio} />
    </div>
}
export default CampoTexto