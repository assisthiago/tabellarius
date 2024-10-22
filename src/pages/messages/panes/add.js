import Link from "next/link";
import { Alert, Button, Card, Form, Stack } from "react-bootstrap";
import { Bell, PlusLg } from "react-bootstrap-icons";

export default function Add() {
    return (
        <>
            <Alert
                dismissible
                variant="light"
                className="border-0 rounded-0 shadow-lg d-flex align-items-center start-50 translate-middle-x"
            >
                <div className="bg-success p-2 me-3 shadow-sm">
                    <Bell size={20} className="text-white" />
                </div>
                <p className="m-0">
                    Esta é uma mensagem com <Link href="/messages/2/" className="text-decoration-none">link</Link> de sucesso!
                </p>
            </Alert>

            <Card className="border-0 rounded-0 shadow">
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
            <Stack direction="horizontal" gap={3} className="mt-3">
                <Button
                    variant="primary"
                    className="shadow-sm p-2 border-0 rounded-0 d-flex align-items-center"
                >
                    <PlusLg size={20} />
                </Button>
            </Stack>
        </>
    )
}
