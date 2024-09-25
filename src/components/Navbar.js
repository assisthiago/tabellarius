import { Button, Container, Form, FormControl, Navbar as NavbarRB } from "react-bootstrap";

export default function Navbar() {
    return (
        <NavbarRB
            sticky="top"
            className="shadow-sm p-3 bg-body justify-content-between"
        >
            <Container fluid>
                <NavbarRB.Brand href="/">TABELLARIUS</NavbarRB.Brand>
                <Form className="d-flex ms-auto">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                    />
                    <Button className="ms-2">Search</Button>
                </Form>
            </Container>
        </NavbarRB>
    )
}
