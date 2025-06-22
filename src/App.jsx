import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import FormularioColor from './components/FormularioColor'

function App() {


  return (
    <>
      <header>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Lista de Colores 🎨</Navbar.Brand>
          </Container>
        </Navbar>
      </header>
      <main>
        <FormularioColor></FormularioColor>
      </main>
      <footer className="bg-body-tertiary py-3 text-center">
        <p>&copy; Todos los derechos reservados</p>
      </footer>

    </>
  )
}

export default App
