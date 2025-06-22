
import { Container } from 'react-bootstrap';
import ItemColor from './ItemColor'

const ListaColores = ({ colores }) => {
    return (
        <>
            <Container>
                <section className='row row-cols-1 row-cols-md-3'>
                    {colores.map((color, indice) => (
                        <ItemColor key={indice} color={color}></ItemColor>
                    ))}
                </section>
            </Container>
        </>
    );
};

export default ListaColores;