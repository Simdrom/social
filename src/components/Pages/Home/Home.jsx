import { Container, Col } from 'react-bootstrap'
import VerticalMenu from './VerticalMenu/VerticalMenu'

const Home = () => {
  return (
    <Container fluid>
      <Col>
        <VerticalMenu></VerticalMenu>
      </Col>
      <Col xs={6}>Content column</Col>
      <Col>Other column</Col>
    </Container>
  )
}

export default Home