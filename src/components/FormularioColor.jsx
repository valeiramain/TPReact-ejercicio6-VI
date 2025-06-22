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

    const agregarColor = (dato) => {
        console.log('desde agregar color')
        console.log(dato)
        setColores([...colores,dato.nombreColor])
        reset()
    }
    return (
        <>
            <Form className="container mt-3 mb-5" onSubmit={handleSubmit(agregarColor)}>
                <Form.Group
                    className="d-flex gap-2"
                    controlId="exampleForm.ControlInput1"
                >
                    <div className="cuadrado border"></div>
                    <Form.Control type="text" placeholder="Ingrese color (Ej:Red)" {
                        ...register('nombreColor',{
                            required: 'El color debe ser ingresado en ingles o hexadecimal',
                            minLength:{
                                value: 3,
                                message:'El color debe tener más de 3 caracteres'
                            },
                            maxLength:{
                                value: 8,
                                message:'El color debe tener como máximo 8 caracteres'
                            },
                        })
                        }/>
                    <Button variant="info" type="submit">
                        Agregar
                    </Button>
                </Form.Group>
                <Form.Text className="text-warning">{errors.nombreColor?.message}</Form.Text>
            </Form>
            <ListaColores></ListaColores>
        </>
    );
};

export default FormularioColor;
