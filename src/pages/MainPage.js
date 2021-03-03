import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TopBanners from '../components/TopBanners'
import ArticlesMainPage from '../components/ArticlesMainPage'
import RandomArticle from '../components/RandomArticles'
import PopularArticles from '../components/PopularArticles'
import { useParams, Link } from 'react-router-dom'

const axios = require('axios')

const MainPage = ({ articles }) => {
    const { id, type } = useParams();
    const [list, setList] = useState([]);
    const [popular, setPopular] = useState([]);
    const [random, setRandom] = useState([]);
    const [topBanners, setTopBanners] = useState([]);
    const [articlesMainPage, setArticlesMainPage] = useState([]);

    useEffect(() => {
        axios.get(`https://dev.to/api/articles?tag=${articles}`).then(resp => {
            setList(resp.data)
            setRandom(resp.data[Math.floor(Math.random() * resp.data.length)])
            setTopBanners(resp.data.slice(0, 3))
            setArticlesMainPage(resp.data.slice(3, 6))
        });
        axios.get(`https://dev.to/api/articles?tag=javascript&&top=1&&per_page=3`).then(resp => {
            setPopular(resp.data)
        });
    }, [articles])


    return (
        <div>
            {list.length > 0 && <Container fluid>
                <TopBanners topBanners={topBanners} />
            </Container>}
            {list.length > 0 && <Container style={{ marginTop: '30px' }}>

                <Row style={{ minHeight: '300px' }}>
                    <Col xs={8} md={7}>
                        <ArticlesMainPage articlesMainPage={articlesMainPage} />
                    </Col>
                    <Col xs={4} md={5}>
                        <PopularArticles data={popular} />
                        <RandomArticle randomArticle={random} />
                    </Col>
                </Row>
            </Container>}
            {list.length === 0 && <div></div>}
        </div>
    );
}

export default MainPage;