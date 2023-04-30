import { useState } from 'react'
import {v4 as uuid } from 'uuid'
import './App.css';
import Header from './components/header/header';
import Formulario from './components/formulario/formulario';
import MiOrg from './components/miOrg';
import Equipo from './components/equipo';
import Footer from './components/footer';

function App() {
  const [formulario, ocultarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    nombre: "Harland Lahora",
    puesto: "Instructor",
    foto: "https://github.com/harlandlohora.png",
    equipo: "Front End",
    fav: false
    },
    {
      id: uuid(),
      nombre: "Genesys Rondon",
      puesto: "Instructora",
      foto: "https://github.com/genesysaluralatam.png",
      equipo: "Programación",
      fav: false,
    },
    {
      id: uuid(),
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      equipo: "Innovación y Gestión",
      fav: false,
    },
    {
      id: uuid(),
      nombre: "Christian Velasco",
      puesto: "Instructor",
      foto: "https://github.com/christianpva.png",
      equipo: "Programación",
      fav: false,
    },
    {
      id: uuid(),
      nombre: "Jose Dario Gonzales",
      puesto: "Instructor",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      equipo: "UX y Diseño",
      fav: false,
    }

  ])

  const [equipos, actualizarEquipos] = useState(
    [
      {
        id: uuid(),
        "titulo": "Programación",
        "colorPrimario": "#57C278",
        "colorSecundario": "#D9F7E9"
      },
      {
        id: uuid(),
        "titulo": "Front End",
        "colorPrimario": "#82CFFA",
        "colorSecundario": "#E8F8FF"
      },
      {
        id: uuid(),
        "titulo": "Data Sience",
        "colorPrimario": "#A6D157",
        "colorSecundario": "#F0F8E2"
      },
      {
        id: uuid(),
        "titulo": "DevOps",
        "colorPrimario": "#E06B69",
        "colorSecundario": "#FDE7E8"
      },{
        id: uuid(),
        "titulo": "UX y Diseño",
        "colorPrimario": "#DB6EBF",
        "colorSecundario": "#FAE9F5"
      },{
        id: uuid(),
        "titulo": "Móvil",
        "colorPrimario": "#FFBA05",
        "colorSecundario": "#FFF5D9"
      },{
        id: uuid(),
        "titulo": "Innovación y Gestión",
        "colorPrimario": "#FF8A29",
        "colorSecundario": "#FFEEDF"
      }
    ]
  )
  
  //ternary operator
  const cambiarFormulario = () => {
    ocultarMostrar(!formulario);
}

//Spread operator
const crearEquipo = (nuevoEquipo) => {
  actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
}

const registrarColaborador = (colaborador) => {
  console.log("Nuevo colaborador", colaborador)
  //Spread operator
  actualizarColaboradores([...colaboradores, colaborador])
}

//eliminar colaborador
const eliminarColaborador = (id) => {
  const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
  actualizarColaboradores(nuevosColaboradores);
}


const actualizarColor = (color, id) => {
  console.log("Actualizando color", color, id);
  const equiposActualizados = equipos.map((equipo) => {
    if (equipo.id === id) {
      equipo.colorPrimario = color
    }
    return equipo
  })
  actualizarEquipos(equiposActualizados)
}

const like = (id) => {
  const colaboradoresLike = colaboradores.map((colaborador) => {
    if (colaborador.id === id) {
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  }) 
  actualizarColaboradores(colaboradoresLike)
}


  return (
    <div className="App">
        <Header />
        {
          formulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)}
           registrarColaborador={registrarColaborador}
           crearEquipo={crearEquipo}

           />
        }
         
         <MiOrg cambiarFormulario={cambiarFormulario}/> 
         
        {
          equipos.map((equipo) => {
             return <Equipo datos={equipo} key={equipo.titulo}
             colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} 
             eliminarColaborador={eliminarColaborador}
             actualizarColor={actualizarColor}
             like={like}
            />
          })
        }
        <Footer />
        
    </div>
  )
}

export default App;
