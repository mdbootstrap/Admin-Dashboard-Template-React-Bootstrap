import React from 'react'
import { Col, Row } from 'mdbreact';
import logo from "../../assets/mdb-react.png";


const NotFoundPage =  () => {
  return (
    <React.Fragment>
      <div className="full">
        <Row className="bad-gateway-row">
          <Col md="8">
            <img alt="Error 404" className="img-fluid" hieght="20px" src={logo}/>
            <h2 className="h2-responsive mt-3 mb-2">404. That's an error.</h2>
            <h4>The requested URL was not found on this server.</h4>
          </Col>
          <Col md="4">
            <img alt="Error 404" className="img-fluid" src="https://mdbootstrap.com/img/Others/grafika404-bf.png"/>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default NotFoundPage;