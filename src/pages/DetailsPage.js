import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useParams, Link } from 'react-router-dom'
import SingleArticle from '../components/SingleArticle'
import Image from 'react-bootstrap/Image'
import RandomArticle from '../components/RandomArticles'
import PopularArticles from '../components/PopularArticles'

const axios = require('axios')

const DetailsPage = () => {

    const { id, type } = useParams();
    const [singleArticle, setSingleArticle] = useState([]);
    const [creator, setCreator] = useState([]);
    const [popular, setPopular] = useState([]);
    const [random, setRandom] = useState([]);

    useEffect(() => {
        axios.get(`https://dev.to/api/articles/${id}/`).then(resp => {
            setSingleArticle(resp.data)
            setCreator(resp.data.user.username);
        });
        axios.get(`https://dev.to/api/articles?tag=${type}`).then(resp => {
            setRandom(resp.data[Math.floor(Math.random() * resp.data.length)])
        });
        axios.get('https://dev.to/api/articles?tag=lifestyle&&top=1&&per_page=3').then(resp => {
            setPopular(resp.data)
        });
    }, [id])

    return (
        <div>
            <Container fluid>
                <Row>
                    <Image style={{ width: '100%' }} src={singleArticle.social_image} fluid />
                </Row>
            </Container>
            <Container style={{ marginTop: '30px' }}>
                <Row style={{ minHeight: '300px' }}>
                    <Col xs={8} md={7}>
                        <SingleArticle article={singleArticle} creator={creator} />
                    </Col>
                    <Col xs={4} md={5}>
                        <PopularArticles data={popular} />
                        <RandomArticle randomArticle={random} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DetailsPage;