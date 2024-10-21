import { Button, ListGroup, Stack } from 'react-bootstrap';
import { Envelope, FileEarmarkText, Funnel, ListOl, Speedometer2 } from 'react-bootstrap-icons';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Sidebar({ _show, _handleClose }) {
    const items = [
        {
            title: "Dashboard",
            icon: <Speedometer2 size={20} />
        },
        {
            title: "Resultados",
            icon: <FileEarmarkText size={20} />
        },
        {
            title: "Mensagens",
            icon: <Envelope size={20} />
        },
        {
            title: "Filtros",
            icon: <Funnel size={20} />
        },
        {
            title: "Números",
            icon: <ListOl size={20} />
        },
    ];

    return (
        <Offcanvas show={_show} onHide={_handleClose} placement="start">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>TABELLARIUS</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-0">
                <ListGroup className="rounded-0">
                    {items.map((item, index) => (
                        <ListGroup.Item key={index} className="py-3 d-flex align-items-center">
                            <Stack direction="horizontal" gap={1}>
                                <div>{item.icon}</div>
                                <Button variant="link" className="text-decoration-none">{item.title}</Button>
                            </Stack>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Offcanvas.Body>
        </Offcanvas>
    );
}
