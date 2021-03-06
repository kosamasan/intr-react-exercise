import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const ArticlesMainPage = ({ articlesMainPage }) => {

    return (
        <Row>
            {articlesMainPage.map((item) =>
                <Card key={item.id} style={{ width: '100%', margin: '20px' }}>
                <Card.Img variant="top" src={item.social_image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    {item.description}
                  </Card.Text>         
            
                  <Link to={`/article/${item.id}`} className='btn btn-primary btn-details'> details</Link>
                </Card.Body>
              </Card>
            )}
        </Row>
    );

}

export default ArticlesMainPage;