import { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { BellFill, DoorClosedFill, List, Search, SendFill } from "react-bootstrap-icons";
import Notifications from "./Notifications";
import Sidebar from "./Sidebar";

export default function Navigator() {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);

    const handleCloseNotifications = () => setShowNotifications(false);
    const handleShowNotifications = () => setShowNotifications(true);

    const handleCloseSidebar = () => setShowSidebar(false);
    const handleShowSidebar = () => setShowSidebar(true);

    return (
        <>
            <Navbar sticky="top" className="bg-white shadow-sm">
                <Container fluid className="d-flex justify-content-between">
                    <Navbar.Brand>
                        <Button
                            variant="outline-light"
                            className="me-3"
                            onClick={handleShowSidebar}
                        >
                            <List color="black" size={20} />
                        </Button>
                        <SendFill color="black" size={30} />
                    </Navbar.Brand>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Buscar"
                            aria-label="Search"
                            className="me-2"
                        />
                        <Button variant="outline-light">
                            <Search color="black" />
                        </Button>
                    </Form>
                    <Nav>
                        <Nav.Item>
                            <Button variant="outline-light" onClick={handleShowNotifications}>
                                <BellFill color="black" />
                            </Button>
                        </Nav.Item>
                        <Nav.Item className="ms-3">
                            <Button variant="outline-light">
                                <DoorClosedFill color="black" />
                            </Button>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
            <Notifications _show={showNotifications} _handleClose={handleCloseNotifications} />
            <Sidebar _show={showSidebar} _handleClose={handleCloseSidebar} />
        </>
    )
}
