import React from 'react'
import { MDBCol, MDBRow, MDBCard, MDBCardBody, MDBView } from 'mdbreact';
import GoogleMapReact from 'google-map-react';

const MapsPage =  () => {
  return (
    <React.Fragment>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard className="mt-5">
              <MDBView className="gradient-card-header blue darken-2">
                <h4 className="h4-responsive text-white">
                  Regular map
                </h4>
              </MDBView>
              <MDBCardBody style={{width: '100%', height: '300px'}} className="text-center">
                <GoogleMapReact
                  defaultCenter={{lat: 10, lng: 10}}
                  defaultZoom={7}
                 />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6">
            <MDBCard className="mt-5">
              <MDBView className="gradient-card-header blue darken-2">
                <h4 className="h4-responsive text-white">
                  Hybrid map
                </h4>
              </MDBView>
              <MDBCardBody style={{width: '100%', height: '300px'}} className="text-center">
                <GoogleMapReact
                    defaultCenter={{lat: 10, lng: 10}}
                    defaultZoom={7}
                    options = {{
                      mapTypeId: 'hybrid'
                    }}
                  />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard className="mt-5">
              <MDBView className="gradient-card-header blue darken-2">
                <h4 className="h4-responsive text-white">
                Satellite map
                </h4>
              </MDBView>
              <MDBCardBody style={{width: '100%', height: '300px'}} className="text-center">
                <GoogleMapReact
                      defaultCenter={{lat: 10, lng: 10}}
                      defaultZoom={7}
                      options = {{
                        mapTypeId: 'satellite'
                      }}
                    />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6">
            <MDBCard className="mt-5">
              <MDBView className="gradient-card-header blue darken-2">
                <h4 className="h4-responsive text-white">
                  Terrain map
                </h4>
              </MDBView>
              <MDBCardBody style={{width: '100%', height: '300px'}} className="text-center">
                <GoogleMapReact
                        defaultCenter={{lat: 10, lng: 10}}
                        defaultZoom={7}
                        options = {{
                          mapTypeId: 'terrain'
                        }}
                      />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
    </React.Fragment>
  )
}

export default MapsPage;