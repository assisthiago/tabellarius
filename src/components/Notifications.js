import { ListGroup, Stack } from 'react-bootstrap';
import { CheckCircle, ExclamationCircle, ExclamationTriangle, InfoCircle } from 'react-bootstrap-icons';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Notifications({ _show, _handleClose }) {
    const notifications = [
        {
            id: 1,
            status: 'success',
            title: 'Notificação 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            date: 'Há 2 minutos'
        },
        {
            id: 2,
            status: 'fail',
            title: 'Notificação 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            date: 'Há 2 minutos'
        },
        {
            id: 3,
            status: 'warning',
            title: 'Notificação 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            date: 'Há 2 minutos'
        },
        {
            id: 4,
            status: 'info',
            title: 'Notificação 4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            date: 'Há 2 minutos'
        },
    ];

    function getIcon(status) {
        switch (status) {
            case 'success':
                return <CheckCircle color="green" />;
            case 'fail':
                return <ExclamationCircle color="red" />;
            case 'warning':
                return <ExclamationTriangle color="orange" />;
            case 'info':
                return <InfoCircle color="blue" />;
            default:
                return <CheckCircle color="black" />;
        }
    }

    return (
        <Offcanvas show={_show} onHide={_handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Notificações</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-0">
                <ListGroup className="rounded-0">
                    {notifications.map((notification) => (
                        <ListGroup.Item key={notification.id}>
                            <Stack direction="horizontal" gap={3}>
                                {getIcon(notification.status)}
                                <Stack direction="vertical" gap={0} className="w-75">
                                    <div>{notification.title}</div>
                                    <small className="text-muted">{notification.description}</small>
                                    <small className="text-muted">{notification.date}</small>
                                </Stack>
                            </Stack>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Offcanvas.Body>
        </Offcanvas>
    );
}
