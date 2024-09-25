import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/global.css';

import Breadcrumb from './Breadcrumb';
import Nav from './Nav';
import Navbar from './Navbar';
import { Col, Container, Row } from 'react-bootstrap';


export default function Layout({ children }) {
    return (
        <div className="min-vh-100">
            <Navbar />
            <Container fluid>
                <Row>
                    <Col md={2} className="p-0">
                        <Nav />
                    </Col>
                    <Col md={10}>
                        <Container className="pt-3">
                            <Breadcrumb />
                            {children}
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
