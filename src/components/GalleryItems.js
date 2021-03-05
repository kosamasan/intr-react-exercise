import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

const GalleryItems = ({ galleryImages }) => {

    return (
        <Container fluid>
            {galleryImages.map((item) =>
                <Row key={item.row}>
                    {item.gallery_images.map((gim) =>
                        <Col lg={4} key={gim.id}>
                            <Card key={gim.id} style={{ margin: '20px' }}>
                                <Link to={`/article/${gim.id}/`}>
                                    <Card.Img variant="top" src={gim.social_image} />
                                </Link>

                                <Card.Body>
                                    <Card.Title>{gim.title}</Card.Title>
                                    <Card.Text>
                                        {gim.description}
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                    )}

                </Row>
            )}
        </Container>
    );
}

export default GalleryItems;