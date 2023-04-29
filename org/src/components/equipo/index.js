import './equipo.css'
import Colaborador from '../colaboradores';
import hexToRgba from 'hex-to-rgba';
const Equipo = (props) => {
    const { colorPrimario, titulo, id } = props.datos;
    const { colaboradores, eliminarColaborador, actualizarColor } = props;


    return <> {colaboradores.length > 0 &&
        <section className="equipo" style={{ backgroundColor: hexToRgba(colorPrimario, 0.6 )}}>

            <input
                className='input-color'
                type="color"
                value={colorPrimario}
                onChange={(e) => {
                    actualizarColor(e.target.value, id)
                    }
                }
            />

            <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>

            <div className="colaboradores">

                {
                    colaboradores.map((colaborador, index) => <Colaborador
                        datos={colaborador}
                        key={index}
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                    />)
                }
            </div>

        </section>
    }
    </>
}

export default Equipo