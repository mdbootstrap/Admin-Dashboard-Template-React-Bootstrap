import React from 'react';
import { Card, CardBody, Fa, Row, Col } from 'mdbreact';

const AdminCardSection2 = () => {
  return (
    <Row className="mb-4">
        <Col xl="3" md="6" className="mb-3">
          <Card color="primary-color" className="classic-admin-card">
            <CardBody>
              <div className="pull-right">
                <Fa icon="money"/>
              </div>
              <p className="white-text">SALES</p>
              <h4><strong>$2000</strong></h4>
            </CardBody>
            <div className="progress">
              <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey darken-3" role="progressbar" style={{width: "25%"}}></div>
            </div>
            <CardBody>
              <p>Better than last week (25%)</p>
            </CardBody>
          </Card>
        </Col>
        <Col xl="3" md="6" className="mb-3">
          <Card color="warning-color" className="classic-admin-card">
            <CardBody>
              <div className="pull-right">
                <Fa icon="line-chart"/>
              </div>
              <p className="white-text">SUBSCRIPTIONS</p>
              <h4><strong>200</strong></h4>
            </CardBody>
            <div className="progress">
              <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey darken-3" role="progressbar" style={{width: "25%"}}></div>
            </div>
            <CardBody>
              <p>Worse than last week (25%)</p>
            </CardBody>
          </Card>
        </Col>
        <Col xl="3" md="6" className="mb-3">
          <Card color="primary-color" className="classic-admin-card">
            <CardBody>
              <div className="pull-right">
                <Fa icon="pie-chart"/>
              </div>
              <p className="white-text">TRAFFIC</p>
              <h4><strong>20000</strong></h4>
            </CardBody>
            <div className="progress">
              <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="75" className="progress-bar bg grey darken-3" role="progressbar" style={{width: "75%"}}></div>
            </div>
            <CardBody>
              <p>Better than last week (75%)</p>
            </CardBody>
          </Card>
        </Col>
        <Col xl="3" md="6" className="mb-3">
          <Card color="red accent-2" className="classic-admin-card">
            <CardBody>
              <div className="pull-right">
                <Fa icon="bar-chart"/>
              </div>
              <p className="white-text">ORGANIC TRAFFIC</p>
              <h4><strong>2000</strong></h4>
            </CardBody>
            <div className="progress">
              <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey darken-3" role="progressbar" style={{width: "25%"}}></div>
            </div>
            <CardBody>
              <p>Better than last week (75%)</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
  )
}

export default AdminCardSection2;

