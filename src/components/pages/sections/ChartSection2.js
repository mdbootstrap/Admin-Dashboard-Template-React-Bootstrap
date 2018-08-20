import React, { Component } from 'react';
import { Col, Card, CardBody, CardHeader, Row } from 'mdbreact';
import { Line, Doughnut, Radar } from 'react-chartjs-2';

class ChartSection2 extends Component {
    render(){
        const dataLine = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40]
              }
            ]
        };

        const dataRadar = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
                {
                  label: '#1',
                  backgroundColor: 'rgba(245, 74, 85, 0.5)',
                  data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                  label: '#2',
                  backgroundColor: 'rgba(90, 173, 246, 0.5)',
                  data: [12, 42, 121, 56, 24, 12, 2]
                },
                {
                  label: '#3',
                  backgroundColor: 'rgba(245, 192, 50, 0.5)',
                  data: [2, 123, 154, 76, 54, 23, 5]
                }
              ]
        };

        const dataDoughnut = {
            labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
            datasets: [{
                data: [300, 50, 100, 40, 120],
                backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
            }]
        };

        return (
            <Row className="mb-4">
                <Col md="12" lg="4" className="mb-4">
                    <Card className="mb-4">
                    <CardHeader>Line chart</CardHeader>
                    <CardBody>
                        <Line data={dataLine} options={{responsive: true }} />
                    </CardBody>
                    </Card>
                </Col>
                <Col md="12" lg="4" className="mb-4">
                    <Card className="mb-4">
                    <CardHeader>Radar chart</CardHeader>
                    <CardBody>
                        <Radar data={dataRadar}  height={300} options={{responsive: true }} />
                    </CardBody>
                    </Card>
                </Col>
                <Col md="12" lg="4" className="mb-4">
                    <Card className="mb-4">
                    <CardHeader>Doughnut chart</CardHeader>
                    <CardBody >
                        <Doughnut data={dataDoughnut}  height={300} options={{responsive: true }} />
                    </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }
    
}

export default ChartSection2;

