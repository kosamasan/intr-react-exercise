import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

const ArticlesMainPage = ({ articlesMainPage }) => {

    return (
        <Row>
            {articlesMainPage.map((item) =>
                <Card style={{ width: '100%', margin: '20px' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            )}
        </Row>
    );
}

export default ArticlesMainPage;