import './App.css';
import { Container, Row } from 'react-bootstrap'
import Output from './components/Output'

function App() {
  return (
    <Container fluid >
      <Row>
        <Output />
      </Row>
    </Container>
  );
}

export default App;
