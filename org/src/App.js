import { useState } from 'react'
import './App.css';
import Header from './components/header/header';
import Formulario from './components/formulario/formulario';
import MiOrg from './components/miOrg';
import Equipo from './components/equipo';
import Footer from './components/footer';
function App() {
  const [formulario, ocultarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([{
    nombre: "Harland Lahora",
    puesto: "Instructor",
    foto: "https://github.com/harlandlohora.png",
    equipo: "Front End"
    },
    {
      nombre: "Genesys Rondon",
      puesto: "Instructora",
      foto: "https://github.com/genesysaluralatam.png",
      equipo: "Programación"
    },
    {
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      equipo: "Innovación y Gestión"
    },
    {
      nombre: "Christian Velasco",
      puesto: "Instructor",
      foto: "https://github.com/christianpva.png",
      equipo: "Programación"
    },
    {
      nombre: "Jose Dario Gonzales",
      puesto: "Instructor",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      equipo: "UX y Diseño"
    }

  ])

  const [equipos, actualizarEquipos] = useState(
    [
      {
        "titulo": "Programación",
        "colorPrimario": "#57C278",
        "colorSecundario": "#D9F7E9"
      },
      {
        "titulo": "Front End",
        "colorPrimario": "#82CFFA",
        "colorSecundario": "#E8F8FF"
      },
      {
        "titulo": "Data Sience",
        "colorPrimario": "#A6D157",
        "colorSecundario": "#F0F8E2"
      },
      {
        "titulo": "DevOps",
        "colorPrimario": "#E06B69",
        "colorSecundario": "#FDE7E8"
      },{
        "titulo": "UX y Diseño",
        "colorPrimario": "#DB6EBF",
        "colorSecundario": "#FAE9F5"
      },{
        "titulo": "Móvil",
        "colorPrimario": "#FFBA05",
        "colorSecundario": "#FFF5D9"
      },{
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

const registrarColaborador = (colaborador) => {
  console.log("Nuevo colaborador", colaborador)
  //Spread operator
  actualizarColaboradores([...colaboradores, colaborador])
}

//eliminar colaborador
const eliminarColaborador = (equipo) => {
  console.log("Eliminando equipo", equipo)
}


const actualizarColor = (color, titulo) => {
  console.log("Actualizando color", color, titulo);
  const equiposActualizados = equipos.map((equipo) => {
    if (equipo.titulo === titulo) {
      equipo.colorPrimario = color
    }
    return equipo
  })
  actualizarEquipos(equiposActualizados)
}


  return (
    <div className="App">
        <Header />
        {
          formulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)}
           registrarColaborador={registrarColaborador}
          />
        }
         
         <MiOrg cambiarFormulario={cambiarFormulario}/> 
         
        {
          equipos.map((equipo) => {
             return <Equipo datos={equipo} key={equipo.titulo}
             colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} 
             eliminarColaborador={eliminarColaborador}
             actualizarColor={actualizarColor}
            />
          })
        }
        <Footer />
        
    </div>
  )
}

export default App;
