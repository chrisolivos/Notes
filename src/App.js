import './App.css';
import LoginVista from './componentes/loginview'




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
      {/* <div className='contenedor-header'>
        Header
      </div> */}
      <div className='contenedor-principal'>
        <LoginVista /> 
        {/* <BasicExample /> */}

      </div>

      {/* <div className='contenedor-footer'>
        Footer
      </div> */}
    </div>

  );
}

export default App;
