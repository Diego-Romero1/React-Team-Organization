import {useState} from 'react'
import './formulario.css'
import CampoTexto from '../campoTexto/index'
import ListaOpciones from '../listaOpciones'
import Boton from '../boton/index'

const Formulario = (props) => {
    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const { registrarColaborador } = props

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log(e);

        const datos = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datos)
    }

   return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingrese el nombre" required valor={nombre} actualizarValor={actualizarNombre} />
            <CampoTexto titulo="Puesto" placeholder="Ingrese el pueste" required valor={puesto} actualizarValor={actualizarPuesto} />
            <CampoTexto titulo="Foto" placeholder="Ingrese enlace de la foto" required valor={foto} actualizarValor={actualizarFoto} />
            <ListaOpciones valor={equipo} actualizarEquipo={actualizarEquipo} equipos={props.equipos} />
            <Boton texto="Crear" />
        </form>
    </section>
}

export default Formulario