import { Form, Button } from 'react-bootstrap';
import ListaColores from './ListaColores';

const FormularioColor = () => {
    return (
        <>
            <Form className='container mt-3 mb-5'>
                <Form.Group className="d-flex gap-2" controlId="exampleForm.ControlInput1">
                    <div className='cuadrado border'></div>
                    <Form.Control type="text" placeholder="Ingrese color (Ej:Red)" />
                    <Button variant="info" type="submit">
                        Agregar
                    </Button>
                </Form.Group>
            </Form>
            <ListaColores></ListaColores>
        </>
    );
};

export default FormularioColor;