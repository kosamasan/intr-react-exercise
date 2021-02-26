import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const axios = require('axios')

const MainPage = ({ articles }) => {
    const [list, setList] = useState([]);
    const [popular, setPopular] = useState([]);
    const [random, setRandom] = useState([]);

    useEffect(() => {
        if (articles === 'all') {
            axios.get('https://dev.to/api/articles').then(resp => {
                setList(resp.data)
                setRandom(resp.data[Math.floor(Math.random() * 29)])
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

    let topBanners = list.slice(0, 2);

    return (
        <div>
            <Container>
            <Row style={{minHeight:'200px'}}>
                    <Col>TopBanner(articles 0-2) - Antonis</Col>
                </Row>
                <Row style={{minHeight:'300px'}}>
                    <Col xs={0} md={1}>
                        
                    </Col>
                    <Col xs={8} md={7}>
                        Articles (articles 3-5) - Antonis
                    </Col>
                    <Col xs={4} md={3}>
                        Popoular - Vasillis<br></br>
                        Random - Vasillis
                    </Col>
                    <Col xs={0} md={1}>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MainPage;