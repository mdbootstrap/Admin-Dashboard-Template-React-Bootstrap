import React from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader} from 'mdbreact';
import GoogleMapReact from 'google-map-react';

const MapSection = () => {
  return (
      <MDBCol lg="6" className="mb-4">
        <MDBCard>
          <MDBCardHeader>Google Map</MDBCardHeader>
          <MDBCardBody style={{width: '100%', height: '300px'}} className="text-center">
            <GoogleMapReact
              defaultCenter={{lat: 10, lng: 10}}
              defaultZoom={7}
              />
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
  )
}

export default MapSection;

