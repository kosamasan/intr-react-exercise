import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {

  return (
    <Container fluid className="bg-primary">
      <Row>
        <Col className="p-3 mb-2  text-white text-center">Kosmas Antonis - DG1 , Ladas Vasilis - DG8 , Ziaka Evangelia - DG1</Col>
      </Row>
    </Container>
  );
}

export default Footer;