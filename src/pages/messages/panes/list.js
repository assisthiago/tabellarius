import Link from "next/link";
import { Button, Card, Col, Form, OverlayTrigger, Pagination, Row, Table, Tooltip } from "react-bootstrap";
import { EyeFill, Trash3Fill } from "react-bootstrap-icons";

export default function List() {
    return (
        <Row>
            <Col xs={12} className="mb-3">
                <Card className="border-0 rounded-0 shadow">
                    <Card.Body>
                        <Table striped borderless hover size="sm" className="m-0">
                            <thead>
                                <tr>
                                    <th><Form.Check></Form.Check></th>
                                    <th>Head 1</th>
                                    <th>Head 2</th>
                                    <th>Head 3</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="align-middle"><Form.Check></Form.Check></td>
                                    <td className="align-middle">Row 1</td>
                                    <td className="align-middle">Row 2</td>
                                    <td className="align-middle">Row 3</td>
                                    <td className="align-middle text-end">
                                        <OverlayTrigger
                                            placement="left"
                                            delay={{ show: 250, hide: 100 }}
                                            overlay={<Tooltip>Ver detalhes</Tooltip>}
                                        >
                                            <Link
                                                href="/messages/1"
                                                className="btn btn-sm btn-link text-decoration-none"
                                            >
                                                <EyeFill size={20} />
                                            </Link>
                                        </OverlayTrigger>

                                        <OverlayTrigger
                                            placement="left"
                                            delay={{ show: 250, hide: 100 }}
                                            overlay={<Tooltip>Deletar esta linha!</Tooltip>}
                                        >
                                            <Button variant="link" size="sm" className="text-decoration-none">
                                                <Trash3Fill color="red" size={20} />
                                            </Button>
                                        </OverlayTrigger>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12}>
                <Card.Body className="d-flex justify-content-between align-items-center">
                    <div className="m-0 me-2">
                        <Form.Select size="sm" className="shadow-sm border-0 rounded-0">
                            <option value="1">10</option>
                            <option value="2">20</option>
                            <option value="3">30</option>
                        </Form.Select>
                    </div>
                    <small className="text-muted me-auto">de 100 linhas.</small>
                    <Pagination size="sm" className="m-0 shadow-sm">
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Ellipsis />

                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item active>{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>
                        <Pagination.Item>{14}</Pagination.Item>

                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </Card.Body>
            </Col>
        </Row>
    )
}
