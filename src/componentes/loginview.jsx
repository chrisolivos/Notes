import React, { useState } from "react";
import { auth } from "../configuracion/firebaseConfig.js";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Autenticacion from "./AuthProvider.jsx";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/loginview.css";
import { Link } from "react-router-dom";
import { RegisterUser } from "./registerview.jsx";

export default function LoginVista() {
  const navegar = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [estado, setEstado] = useState(0);

  //logeando con google
  async function loginConGoogle() {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);

    async function signInWithGoogle(googleProvider) {
      try {
        const res = await signInWithPopup(auth, googleProvider);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    }
  }

  async function funcionUsuarioLogueado(user) {
    // setCurrentUser(user)

    //   const todasLasNotas = await mostrarNotas(user.id);
    //   setNotas([...todasLasNotas])
    // navegar('/mostrarNotas/'+(user.uid))
    navegar("/dashboard");
    sessionStorage.setItem("userIdLogin", user.uid);

    // navegar('/newnotes/'+(user.uid))
  }

  function funcionUsuarioNoRegistardo(user) {
    setCurrentUser(user);
    //  navegar('/register')
    setEstado(3);
  }

  function funcionUsuarioNoLogueado() {
    //  navegar('/')
    setEstado(4);
  }

  //segun el estadoo realizara algo
  // if (estado===2){
  //     return (
  //     <div>logueado y registrado
  //         <button onClick={cerrarSesion}>Logout</button>
  //         </div>
  //         //TODO  notas
  //   // navegar('/notes')

  //     )
  // }
  // // navegar('/notes')
  // if (estado === 3) {
  //     //TODO: registrarse
  //     return (
  //         // navegar('/notes')
  //         <div>logueado sin registro,
  //             <button onClick={Signoutview}>Logout</button>
  //         </div>
  //     )
  // }
  if (estado === 4) {
    return (
      <>
        <div className="contenedor-form-login">
          <Form className="form-estilo">
            <Form.Group
              className="form-control-sm texto-login"
              controlId="formBasicEmail"
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted text-responsive">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group
              className="form-control-sm texto-login"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="danger" className="boton-login">
              Login
            </Button>
            <Button className="boton-google" onClick={loginConGoogle}>
              {/* <img src={require("../img/BotonSesionGoogle.png")} className='boton-google-imagen' /> */}
              <img className="boton-google-imagen" />
            </Button>
            {/* <button className=" boton-google" onClick={loginConGoogle}>
              <img className='boton-google-imagen' />
               </button> */}
            <div>
              <p className="texto-register">
                Don't have an account?
                <Link to={"./registerview"}>Register</Link>
              </p>
            </div>
          </Form>
        </div>
      </>
    );
  }
  return (
    <Autenticacion
      usuarioLogueado={funcionUsuarioLogueado}
      usuarioNoLogueado={funcionUsuarioNoLogueado}
      usuarioNoRegistrado={funcionUsuarioNoRegistardo}
    />
  );
}
