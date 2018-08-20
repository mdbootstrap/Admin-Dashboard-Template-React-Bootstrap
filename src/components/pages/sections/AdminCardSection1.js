import React from 'react';
import { Card, CardBody, Fa, Row, Col, CardText } from 'mdbreact';

const AdminCardSection1 = () => {
  return (
    <Row className="mb-4">
        <Col xl="3" md="6" className="mb-r">
          <Card className="cascading-admin-card">
              <div className="admin-up">
                <Fa icon="money" className="primary-color"/>
                <div className="data">
                  <p>SALES</p>
                  <h4>
                    <strong>$2000</strong>
                  </h4>
                </div>
              </div>
              <CardBody>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg-primary" role="progressbar"
                    style={{width: '25%'}}></div>
                </div>
                <CardText>Better than last week (25%)</CardText>
              </CardBody>
            </Card>
        </Col>
        <Col xl="3" md="6" className="mb-r">
          <Card className="cascading-admin-card">
              <div className="admin-up">
                <Fa icon="line-chart" className="warning-color"/>
                <div className="data">
                  <p>SUBSCRIPTIONS</p>
                  <h4>
                    <strong>200</strong>
                  </h4>
                </div>
              </div>
              <CardBody>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey" role="progressbar"
                    style={{width: '25%'}}></div>
                </div>
                <CardText>Worse than last week (25%)</CardText>
              </CardBody>
            </Card>
        </Col>
        <Col xl="3" md="6" className="mb-r">
          <Card className="cascading-admin-card">
              <div className="admin-up">
                <Fa icon="pie-chart" className="light-blue lighten-1"/>
                <div className="data">
                  <p>TRAFFIC</p>
                  <h4>
                    <strong>20000</strong>
                  </h4>
                </div>
              </div>
              <CardBody>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar grey darken-2" role="progressbar"
                    style={{width: '75%'}}></div>
                </div>
                <CardText>Worse than last week (75%)</CardText>
              </CardBody>
            </Card>
        </Col>
        <Col xl="3" md="6" className="mb-r">
          <Card className="cascading-admin-card">
              <div className="admin-up">
                <Fa icon="bar-chart" className="red accent-2"/>
                <div className="data">
                  <p>ORGANIC TRAFFIC</p>
                  <h4>
                    <strong>2000</strong>
                  </h4>
                </div>
              </div>
              <CardBody>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg-primary" role="progressbar"
                    style={{width: '25%'}}></div>
                </div>
                <CardText>Better than last week (25%)</CardText>
              </CardBody>
            </Card>
        </Col>
      </Row>
  )
}

export default AdminCardSection1;

