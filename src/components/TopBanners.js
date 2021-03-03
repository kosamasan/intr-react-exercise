import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const TopBanners = ({ topBanners }) => {

    return (
        <Row>
            {topBanners.map(item =>
                <Col key={item.id} xs={4} style={{ padding: '0px' }}><Image src={item.social_image} fluid /></Col>
            )}
        </Row>
    );
}

export default TopBanners;
