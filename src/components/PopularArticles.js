import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Calendar4Week, EyeFill, ChatLeftTextFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom'

const convertDate = (dateAsString) => {
    var date = new Date(dateAsString);
    return date.toLocaleDateString("en-US")
}

const Article = ({ id, image, date, comments, reactions, description, creator }) => {
    return (
        <Row className="item">
            <Col lg={5}>
                <Link to={`/article/${id}`}>
                    <img img src={image} />
                </Link>
            </Col>
            <Col lg={7} style={{padding:"0"}}>
                <p>{description}</p>
                <Row>
                    <Col lg={3}>
                        <span>{creator}</span>
                    </Col>
                    <Col style={{padding:"0"}} lg={3}>
                        <Calendar4Week /><span>{convertDate(date)}</span>
                    </Col>
                    <Col style={{padding:"0"}} lg={3}>
                        <ChatLeftTextFill /> <span>{comments}</span>
                    </Col>
                    <Col style={{padding:"0"}} lg={3}>
                        <EyeFill /><span>{reactions}</span>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

const PopularArticles = ({ data }) => {
    return (
        <Container className="popular-articles">
            <Row>
                <Col>
                    <h2>Popular Posts</h2>
                    <hr />
                </Col>
            </Row>
            {
                data.length > 0
                    ? (<div>
                        {
                            data.map((item) =>                        
                                <Article key={item.id} creator={item.user.username} id={item.id} image={item.social_image} date={item.published_at} comments={item.comments_count} reactions={item.public_reactions_count} description={item.description} />
                            )
                        }
                    </div>)
                    : <div>Can not find Popular posts</div>
            }
        </Container >
    )
}

export default PopularArticles