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

    const coloresLocalStorage = JSON.parse(localStorage.getItem('colores')) || [];
    const [colores, setColores] = useState(coloresLocalStorage);

    // state que contiene el color ingresado
    const [color, setColor] = useState('');

    useEffect(() => {
        // useEffect ejecuta automaticamente el codigo cuando sucede el ciclo de vida (montaje y actualizacion)
        console.log('✔ useEffect: guardando en localStorage', colores);
        localStorage.setItem('colores', JSON.stringify(colores))
    }, [colores]);


    const agregarColor = (dato) => {
        //color para pintar cuadrado
        const colorIngresado = dato.nombreColor.trim();
        setColor(colorIngresado);
        setColores([...colores, colorIngresado])
        reset()
    }

    const borrarColor = (nombreColor) => {
        console.log('en borrar color' + nombreColor)
        // filtrar el state con array tareas
        const coloresFiltrados = colores.filter((itemColor) => itemColor !== nombreColor);
        console.log(coloresFiltrados)
        // actualizar el state
        setColores(coloresFiltrados);
    };
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
                                value: 10,
                                message: 'El color debe tener como máximo 10 caracteres'
                            },
                        })
                    } />
                    <Button variant="info" type="submit">Agregar</Button>
                </Form.Group>
                <Form.Text className="text-warning">{errors.nombreColor?.message}</Form.Text>
            </Form>

            <ListaColores colores={colores} borrarColor={borrarColor}></ListaColores>
        </>
    );
};

export default FormularioColor;
