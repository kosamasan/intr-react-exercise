import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const GetTag = (list) => {
    return list.length == 0 ? null : list[0];
}

const RandomArticles = ({ randomArticle }) => {

    return (

        <Container className="random-article">
            <Row>
                <Col>
                    {/* <span>{GetTag(randomArticle.tag_list)}</span>  */}
                    <h2>Random Post</h2>
                    <hr />
                    <div style={{position:"relative"}}>
                    <Link to={`/article/${randomArticle.id}/`}>
                        <span className="tag_label">test</span>
                        <img img src={randomArticle.social_image} />
                    </Link>
                    </div>
                    <p>{randomArticle.title}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default RandomArticles