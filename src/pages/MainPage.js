import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TopBanners from '../components/TopBanners'
import ArticlesMainPage from '../components/ArticlesMainPage'
const axios = require('axios')

const MainPage = ({ articles }) => {
    const [list, setList] = useState([]);
    const [popular, setPopular] = useState([]);
    const [random, setRandom] = useState([]);
    const [topBanners, setTopBanners] = useState([]);
    const [articlesMainPage, setArticlesMainPage] = useState([]);

    useEffect(() => {
        if (articles === 'all') {
            axios.get('https://dev.to/api/articles').then(resp => {
                setList(resp.data)
                setRandom(resp.data[Math.floor(Math.random() * 29)])
                setTopBanners(resp.data.slice(0, 3))
                setArticlesMainPage(resp.data.slice(3, 6))
            });
            axios.get('https://dev.to/api/articles?top=1&&per_page=3').then(resp => {
                setPopular(resp.data)
            });
        } else if (articles === 'lifestyle') {
            axios.get('https://dev.to/api/articles').then(resp => {
                console.log(resp.data)
            });
        }
    }, [articles])


    return (
        <div>
            {list.length>0 && <Container fluid>
                <TopBanners topBanners={topBanners} />
            </Container>}
            {list.length>0 &&<Container>
                    
                <Row style={{minHeight:'300px'}}>
                    <Col xs={0} md={1}>
                        
                    </Col>
                    <Col xs={8} md={7}>
                        <ArticlesMainPage articlesMainPage={articlesMainPage} />
                    </Col>
                    <Col xs={4} md={3}>
                        Popoular - Vasillis<br></br>
                        Random - Vasillis
                    </Col>
                    <Col xs={0} md={1}>
                        
                    </Col>
                </Row>
            </Container> }
            {list.length===0 && <div></div>}
        </div>
    );
}

export default MainPage;