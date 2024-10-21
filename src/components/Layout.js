import { Container, Row } from "react-bootstrap";
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
