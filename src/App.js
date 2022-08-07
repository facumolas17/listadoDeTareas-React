import './App.css';
import Tarea from './componentes/Tarea';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='contenedor-titulo'>
        <h3>LISTA DE TAREAS</h3>
      </div>
      <div className='contenedor-tareas'>
        <Tarea texto='Aprender React'/>
      </div>
    </div>
  );
}

export default App;
