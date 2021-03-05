import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ContactPage = () => {
    return (
        <div>
            <Container style={{ marginTop: '30px', marginBottom: '150px', maxWidth:'700px' }}>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your message</Form.Label>
                        <Form.Control as="textarea" rows={5} />
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled>
                        Send
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default ContactPage;