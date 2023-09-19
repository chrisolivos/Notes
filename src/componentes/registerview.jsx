import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../styles/registerview.css";
import { registrarNuevoUsuario } from "../configuracion/funciones";

const valoresInicicalesUsuario = {
  uid: "",
  displayName: "",
  email: "",
  password: "",
  profilePicture: "",
};

export default function RegisterUser() {
  const navigate = useNavigate();

  const [nuevoUsuario, setNuevoUsuario] = useState(valoresInicicalesUsuario);

  //funcion que toma los valores del input
  const cambiosTextoInput = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    //...valores: que mantenga los valores que tiene
    setNuevoUsuario({ ...nuevoUsuario, [name]: value });
    //  console.log(nuevoUsuario)
  };

  //funcion que capture los datos
  const formOnSubmitNuevoUsuario = (e) => {
    e.preventDefault();
    //   console.log(e.preventDefault)
    crearNuevoUsuario();
    async function crearNuevoUsuario() {
      await registrarNuevoUsuario({
        //  uid: '',
        // uid:'eotjnRgEfKhV480ek5QBkRmtz292',
        displayName: nuevoUsuario.displayName,
        email: nuevoUsuario.email,
        password: nuevoUsuario.password,
        profilePicture: nuevoUsuario.profilePicture,
      });
    }
   // setNuevoUsuario(valoresInicicalesUsuario);
    e.target.reset();
  //  sessionStorage.setItem("userIdLogin", user.uid);
    navigate("/dashboard");
    //  console.log('registerview',nuevoUsuario)
  };

  return (
    <>
      <div className="contenedor-form-register">
        <Form
          className="form-register-estilo"
          onSubmit={formOnSubmitNuevoUsuario}
        >
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="displayName"
              placeholder="Enter your name and lastname"
              onChange={cambiosTextoInput}
            />
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={cambiosTextoInput}
              required
            />
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={cambiosTextoInput}
              required
            />
            <Form.Label>Picture</Form.Label>
            <Form.Control
              type="text"
              name="profilePicture"
              size="sm"
              placeholder="Enter url"
              onChange={cambiosTextoInput}
            />
          </Form.Group>
          <div className="contenedor-botones-register">
            <Button variant="danger" className="size-responsive" type="submit">
              Save
            </Button>

            <p className="link-contenedor">
              <Link to={"/"}>Login</Link>
            </p>
          </div>
        </Form>
      </div>
    </>
  );
}
