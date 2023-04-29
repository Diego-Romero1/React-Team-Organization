import './miOrg.css'
const MiOrg = (props) => {
    return <section className="orgSection">
        <h1 className="title">My Organization</h1>
        <img src={process.env.PUBLIC_URL + '/img/add.png'} alt="Icono de agregar" onClick={props.cambiarFormulario} />
    </section>
}

export default MiOrg