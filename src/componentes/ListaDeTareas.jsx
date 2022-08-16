import React from 'react';
import { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';

const ListaDeTareas = () => {

  const [tareas,setTareas] = useState([]);

  const agregarTarea = tarea => {
    console.log('Tarea agregada');
    console.log(tarea);
  }

  return (
    <>
        <TareaFormulario onSubmit={agregarTarea} />
        <div className='tareas-lista-contenedor'>
            {
              tareas.map((tarea) =>
                <Tarea
                  texto={tarea.texto}
                />
              )

            }

        </div>
    </>
  )
}

export default ListaDeTareas;