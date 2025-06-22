
import { Container } from 'react-bootstrap';
import ItemColor from './ItemColor'

const ListaColores = () => {
    return (
        <>
            <Container>
                <section className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                    <ItemColor></ItemColor>
                </section>
            </Container>
        </>
    );
};

export default ListaColores;