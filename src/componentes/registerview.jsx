import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import '../styles/registerview.css'


export default function RegisterUser() {
    const navigate = useNavigate();
    return (
        <>
            <div className="contenedor-form-register">

                <Form className='form-register-estilo'>
                    <Form.Group   >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name and lastname" />
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        <Form.Label>Picture</Form.Label>
                        <Form.Control type="file" size="sm" placeholder="search file" />


                    </Form.Group>
                    <div className="contenedor-botones-register">
                        <Button variant="danger" className="size-responsive">
                            Save
                        </Button>

                        <p  className="link-contenedor">
                            <Link to={"/"}>
                                Login
                            </Link>
                        </p>
                    </div>


                </Form>
            </div>


        </>
    )
}
