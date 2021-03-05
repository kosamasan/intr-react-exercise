import Row  from 'react-bootstrap/Row'
import Col  from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const GalleryItems = ({ galleryImages }) => {

    return (
        <div>       
            {galleryImages.map((item) =>
                <Row key={item.row}>      
                { item.gallery_images.map((gim) =>
                
                <Col key={gim.id}>
                <Card key={gim.id} style={{ width: '100%', margin: '20px' }}>
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
        </div>
    );

}

export default GalleryItems;