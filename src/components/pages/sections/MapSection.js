import React from 'react';
import { Col, Card, CardBody, CardHeader} from 'mdbreact';
import GoogleMapReact from 'google-map-react';

const MapSection = () => {
  return (
      <Col lg="6" className="mb-4">
        <Card>
          <CardHeader>Google Map</CardHeader>
          <CardBody style={{width: '100%', height: '300px'}} className="text-center">
            <GoogleMapReact
              defaultCenter={{lat: 10, lng: 10}}
              defaultZoom={7}
              />
          </CardBody>
        </Card>
      </Col>
  )
}

export default MapSection;

