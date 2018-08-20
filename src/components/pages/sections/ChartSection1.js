import React, { Component } from 'react';
import { Col, Card, CardBody, CardHeader, Row, ListGroup, ListGroupItem, Badge, Fa } from 'mdbreact';
import { Bar, Pie } from 'react-chartjs-2';

class ChartSection1 extends Component {
    render(){
        const dataBar = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
            {
                label: '#1',
                data: [12, 39, 3, 50, 2, 32, 84],
                backgroundColor: 'rgba(245, 74, 85, 0.5)',
                borderWidth: 1
            }, {
                label: '#2',
                data: [56, 24, 5, 16, 45, 24, 8],
                backgroundColor: 'rgba(90, 173, 246, 0.5)',
                borderWidth: 1
            }, {
                label: '#3',
                data: [12, 25, 54, 3, 15, 44, 3],
                backgroundColor: 'rgba(245, 192, 50, 0.5)',
                borderWidth: 1
            }
            ]
        };

        const barChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
            xAxes: [{
                barPercentage: 1,
                gridLines: {
                display: true,
                color: 'rgba(0, 0, 0, 0.1)'
                }
            }],
            yAxes: [{
                gridLines: {
                display: true,
                color: 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                beginAtZero: true
                }
            }]
            }
        }

        const dataPie = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
            {
                data: [300, 50, 100, 40, 120, 24, 52],
                backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360', '#ac64ad'],
                hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774', '#da92db']
            }
            ]
        }
        return (
            <Row className="mb-4">
                <Col md="8"className="mb-4">
                    <Card className="mb-4">
                        <CardBody>
                            <Bar data={dataBar} height={500} options={barChartOptions} />
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4" className="mb-4">
                    <Card className="mb-4">
                        <CardHeader>Pie chart</CardHeader>
                        <CardBody>
                            <Pie data={dataPie} height={300} options={{responsive: true}} />
                        </CardBody>
                    </Card>
                    <Card className="mb-4">
                        <CardBody>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                    Sales
                                    <Badge color="success-color" pill className="pull-right">
                                        22%
                                        <Fa icon="arrow-up" className="ml-1"/>
                                    </Badge>
                                </ListGroupItem>
                                <ListGroupItem>
                                    Traffic
                                    <Badge color="danger-color" pill className="pull-right">
                                        5%
                                        <Fa icon="arrow-down" className="ml-1"/>
                                    </Badge>
                                </ListGroupItem>
                                <ListGroupItem>
                                    Orders
                                    <Badge color="primary-color" pill className="pull-right">
                                        14
                                    </Badge>
                                </ListGroupItem>
                                <ListGroupItem>
                                    Issues
                                    <Badge color="primary-color" pill className="pull-right">
                                        123
                                    </Badge>
                                </ListGroupItem>
                                <ListGroupItem>
                                    Messages
                                    <Badge color="primary-color" pill className="pull-right">
                                        8
                                    </Badge>
                                </ListGroupItem>
                            </ListGroup>
                        </CardBody>
                    </Card>
                </Col> 
            </Row>
        )
    }
}

export default ChartSection1;

