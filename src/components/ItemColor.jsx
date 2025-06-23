
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const ItemColor = ({color}) => {
    return (
        <div className="col my-3">
            <Card className='sombraCard'>
                <Card.Header as="h5">{color}</Card.Header>
                <Card.Body className="d-flex justify-content-center bg-tertuary" >
                    <Card.Text className='cuadrado border' style={{
                            backgroundColor: color,
                        }}>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <Button variant="danger" className="ms-auto d-block" >Borrar</Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default ItemColor;