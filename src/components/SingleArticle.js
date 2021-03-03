import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'
import ReactHtmlParser from "react-html-parser";
import { Calendar4Week, EyeFill, ChatLeftTextFill } from 'react-bootstrap-icons';

const SingleArticle = ({ article, tag, creator }) => {

    return (

        <Container>

            <Figure>
                <Figure.Image src={article.social_image} />
                <Figure.Caption>
                    <Row>
                        <Col></Col>
                        <Col>{article.tag_list} </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col> <h3> {article.title}</h3> </Col>
                    </Row>
                    <Row>
                        <Col><h6> {creator} </h6></Col>
                        <Col><h6> <Calendar4Week /> {article.published_at}</h6></Col>
                        <Col><h6> <ChatLeftTextFill /> {article.comments_count} </h6></Col>
                        <Col><h6>  <EyeFill /> {article.public_reactions_count}</h6></Col>
                    </Row>
                </Figure.Caption>
            </Figure>

            <Row>
                {ReactHtmlParser(article.body_html)}
            </Row>

        </Container>

    );
}

export default SingleArticle;

