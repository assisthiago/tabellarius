import Link from 'next/link';
import { Button, ListGroup, Stack } from 'react-bootstrap';
import { Envelope, FileEarmarkText, Funnel, ListOl, Speedometer2 } from 'react-bootstrap-icons';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Sidebar({ _show, _handleClose }) {
    const items = [
        {
            title: "Dashboard",
            url: "/",
            icon: <Speedometer2 size={20} />
        },
        {
            title: "Resultados",
            url: "/results",
            icon: <FileEarmarkText size={20} />
        },
        {
            title: "Mensagens",
            url: "/messages",
            icon: <Envelope size={20} />
        },
        {
            title: "Filtros",
            url: "/filters",
            icon: <Funnel size={20} />
        },
        {
            title: "Números",
            url: "/numbers",
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
                                <Link
                                    href={item.url}
                                    className="btn btn-link text-decoration-none"
                                >
                                    {item.title}
                                </Link>
                            </Stack>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Offcanvas.Body>
        </Offcanvas>
    );
}
