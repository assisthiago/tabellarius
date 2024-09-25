import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

import Layout from "@/components/Layout"
import { Bar, Line } from 'react-chartjs-2';
import { Card, Col, Row } from 'react-bootstrap';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        },
    ],
};

const data1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Dataset 1',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
        },
        {
            label: 'Dataset 2',
            data: [45, 29, 60, 51, 36, 25, 10],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Monthly Sales',
        },
    },
};

const options1 = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart'
        }
    }
}

export default function Home() {
    return (
        <Layout>
            <Row className="mb-3">
                <Col>
                    <Card className="shadow">
                        <Card.Body>
                            <Card.Text className="m-0">
                                <small>Numbers</small>
                            </Card.Text>
                            <Card.Title className="m-0">10000</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="shadow">
                        <Card.Body>
                            <Card.Text className="m-0">
                                <small>Numbers</small>
                            </Card.Text>
                            <Card.Title className="m-0">10000</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="shadow">
                        <Card.Body>
                            <Card.Text className="m-0">
                                <small>Numbers</small>
                            </Card.Text>
                            <Card.Title className="m-0">10000</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="shadow">
                        <Card.Body>
                            <Card.Text className="m-0">
                                <small>Numbers</small>
                            </Card.Text>
                            <Card.Title className="m-0">10000</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Bar data={data} options={options} />
                </Col>
                <Col>
                    <Line data={data1} options={options1} />
                </Col>
            </Row>
        </Layout>
    );
}
