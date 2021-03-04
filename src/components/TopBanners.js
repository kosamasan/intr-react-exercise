import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const TopBanners = ({ topBanners }) => {

    return (
        <Row>
            {topBanners.map(item =>
                <Col key={item.id} xs={4} style={{ padding: '0px' }}>
                    <Link to={`/article/${item.id}/`}>
                        <Image src={item.social_image} fluid />
                    </Link>
                </Col>
            )}
        </Row>
    );
}

export default TopBanners;
