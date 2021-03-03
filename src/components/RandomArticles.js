import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const RandomArticles = ({ randomArticle }) => {
    
    return (
        <Container className="random-article">
            <Row>
                <Col>
                    <h2>Random Post</h2>
                    <hr />
                    <Link to={`/article/${randomArticle.id}/`}><img img src={randomArticle.social_image} /></Link>                    
                    <p>{randomArticle.description}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default RandomArticles