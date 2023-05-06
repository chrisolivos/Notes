import './App.css';
import Notas from './componentes/notas';
import Boton from './componentes/boton';
import { NuevaNota } from './componentes/nuevanota';
import Loginview from './componentes/loginview'



// class Note extends Component {
//   constructor(props){
//     super(props);
//     this.noteId=props.id;
//     this.noteTitle= props.titulo;
//     this.noteContent=props.contenido;
//   }
// }

// const opcionClic = (props) => {
//   if (props.valor = 1) {
//     console.log("Agregar")
//   }
//   if (props.valor = 2) {
//     console.log("Editar")
//   }
//   if (props.valor = 3) {
//     console.log("ELiminar")
//   }
// }

function App() {
  return (
    <div className="App">
      <div className='contenedor-header'>
        Header
      </div>
      <div>
        <Loginview />
      </div>
      {/* <div className='contenedor-principal-nueva-nota'>
        <NuevaNota />
      </div> */}

      {/* <div className="contenedor-principal">


        <Notas
          titulo="Primera Nota"
          contenido="contenido 1"
        />
        <Notas
          titulo="Segunda Nota"
          contenido="contenido 2"
        />

      </div>
      <div className='boton-agregar-nota'>
        <Boton
          texto='+'
          // esBotonDeClic={true}
          // opcionClic={opcionClic(1)}
        />
      </div> */}
      <div className='contenedor-footer'>
        Footer
      </div>
    </div>

  );
}

export default App;
