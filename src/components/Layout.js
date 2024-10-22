import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from "react-bootstrap";
import Navigator from "./Navigator";

export default function Layout({ children }) {
    return (
        <>
            <Navigator />
            <Container className="p-4">
                {children}
            </Container>
        </>
    );
}
