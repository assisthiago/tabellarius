import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/global.css';

import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/components/Layout";
import { Card, Col, Row, Stack } from 'react-bootstrap';
import { BarChartFill, SendCheck, SendExclamation, SendPlus, SendX } from 'react-bootstrap-icons';

export default function Dashboard() {
    const breadcrumbs = [{ title: "Dashboard", url: "/", active: true }];

    return (
        <Layout>
            <Breadcrumb items={breadcrumbs} />

            <Row className="mb-3">
                <Col sm={5}>
                    <Row>
                        <Col sm={6} className="mb-4">
                            <Card className="border-0 rounded-0 shadow">
                                <Card.Body>
                                    <Stack direction="horizontal" className="justify-content-between">
                                        <Card.Subtitle>Enviados</Card.Subtitle>
                                        <SendCheck color="green" size={24} />
                                    </Stack>
                                    <Card.Title>99 999 999</Card.Title>
                                    <Card.Text>Enviados de primeira ou na segunda tentativa.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} className="mb-4">
                            <Card className="border-0 rounded-0 shadow">
                                <Card.Body>
                                    <Stack direction="horizontal" className="justify-content-between">
                                        <Card.Subtitle>Falhados</Card.Subtitle>
                                        <SendX color="red" size={24} />
                                    </Stack>
                                    <Card.Title>99 999 999</Card.Title>
                                    <Card.Text>Falharam em todas as tentativas.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6}>
                            <Card className="border-0 rounded-0 shadow">
                                <Card.Body>
                                    <Stack direction="horizontal" className="justify-content-between">
                                        <Card.Subtitle>Na fila</Card.Subtitle>
                                        <SendPlus color="orange" size={24} />
                                    </Stack>
                                    <Card.Title>99 999 999</Card.Title>
                                    <Card.Text>Aguardando para serem enviados.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6}>
                            <Card className="border-0 rounded-0 shadow">
                                <Card.Body>
                                    <Stack direction="horizontal" className="justify-content-between">
                                        <Card.Subtitle>TPS</Card.Subtitle>
                                        <SendExclamation color="blue" size={24} />
                                    </Stack>
                                    <Card.Title>9999/s</Card.Title>
                                    <Card.Text>Throughput Per Second (Envios por segundo).</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col sm={7}>
                    <Card className="border-0 rounded-0 shadow h-100">
                        <Card.Body>
                            <Stack direction="horizontal" className="justify-content-between">
                                <Card.Subtitle>Gráficos</Card.Subtitle>
                                <BarChartFill size={24} />
                            </Stack>
                            <Card.Text>Gráfico de envios do dia.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Layout>
    );
}
