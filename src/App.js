import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';


function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='contenedor-titulo'>
        <h3>LISTA DE TAREAS</h3>
      </div>
      <div className='contenedor-tareas'>
        
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
