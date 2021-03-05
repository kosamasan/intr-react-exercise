import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const RandomArticles = ({ randomArticle }) => {

    const [item, setItem] = useState('');

    useEffect(() => {
        let fetchArticle = randomArticle.tag_list && randomArticle.tag_list.length > 0 ? randomArticle.tag_list[0] : "";
        setItem(fetchArticle);
    }, [randomArticle])

    return (

        <Container className="random-article">
            <Row>
                <Col>
                    <h2>Random Post</h2>
                    <hr />
                    <div style={{ position: "relative" }}>
                        <Link to={`/article/${randomArticle.id}/`}>
                            {item != '' &&
                                <span className="tag_label">{item}</span>
                            }
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