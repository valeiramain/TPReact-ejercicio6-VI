import { Form, Button } from "react-bootstrap";
import ListaColores from "./ListaColores";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const FormularioColor = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    // const tareasLocalStorage = JSON.parse(localStorage.getItem("tareas")) || [];
    const [colores, setColores] = useState([]);

    // state que contiene el color ingresado
    const [color, setColor] = useState('');

    const agregarColor = (dato) => {
        console.log('desde agregar color')
        console.log(dato)
        //color para pintar cuadrado
        const colorIngresado = dato.nombreColor.trim();
        setColor(colorIngresado);
        setColores([...colores, colorIngresado])
        reset()
    }
    return (
        <>
            <Form className="container mt-4 mb-5" onSubmit={handleSubmit(agregarColor)}>
                <Form.Group
                    className="d-flex gap-2"
                    controlId="exampleForm.ControlInput1"
                >
                    <div
                        className="cuadrado border"
                        style={{
                            backgroundColor: color,
                        }}
                    ></div>
                    <Form.Control type="text" placeholder="Ingrese color (Ej:Red)" {
                        ...register("nombreColor", {
                            required: 'El color debe ser ingresado en ingles o hexadecimal',
                            minLength: {
                                value: 3,
                                message: 'El color debe tener más de 3 caracteres'
                            },
                            maxLength: {
                                value: 8,
                                message: 'El color debe tener como máximo 8 caracteres'
                            },
                        })
                    } />
                    <Button variant="info" type="submit">
                        Agregar
                    </Button>
                </Form.Group>
                <Form.Text className="text-warning">{errors.nombreColor?.message}</Form.Text>
            </Form>
            <ListaColores colores={colores}></ListaColores>
        </>
    );
};

export default FormularioColor;
