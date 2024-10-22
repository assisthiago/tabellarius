import { Col, Nav, Row, Stack, Tab } from "react-bootstrap";

import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/components/Layout";
import { EnvelopePlus, Inbox } from "react-bootstrap-icons";
import List from "./panes/list";
import Add from "./panes/add";

export default function Messages() {
    const breadcrumbs = [
        { title: "Mensagens", url: "/messages", active: true },
    ];

    const tabs = [
        { title: "Lista", event: "list", icon: <Inbox size={20} /> },
        { title: "Adicionar", event: "add", icon: <EnvelopePlus size={20} /> },
    ]

    return (
        <Layout>
            <Breadcrumb items={breadcrumbs} />

            <Tab.Container id="left-tabs" defaultActiveKey="list">
                <Row className="mb-3">
                    <Col xs={2}>
                        <Row>
                            <Col>
                                <Nav variant="pills" className="flex-column">
                                    {tabs.map((tab, index) => (
                                        <Nav.Item key={index}>
                                            <Nav.Link eventKey={tab.event} className="border-0 rounded-0">
                                                <Stack direction="horizontal" gap={2}>
                                                    {tab.icon} {tab.title}
                                                </Stack>
                                            </Nav.Link>
                                        </Nav.Item>
                                    ))}
                                </Nav>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={10}>
                        <Tab.Content>
                            <Tab.Pane eventKey="list">
                                <List />
                            </Tab.Pane>
                            <Tab.Pane eventKey="add">
                                <Add />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Layout>
    )
}
