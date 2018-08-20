import React from 'react'
import { Col, Row, Card, CardBody, View } from 'mdbreact';
import GoogleMapReact from 'google-map-react';

const MapsPage =  () => {
  return (
    <React.Fragment>
        <Row>
          <Col md="6">
            <Card className="mt-5">
              <View className="gradient-card-header blue darken-2">
                <h4 className="h4-responsive text-white">
                  Regular map
                </h4>
              </View>
              <CardBody style={{width: '100%', height: '300px'}} className="text-center">
                <GoogleMapReact
                  defaultCenter={{lat: 10, lng: 10}}
                  defaultZoom={7}
                 />
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card className="mt-5">
              <View className="gradient-card-header blue darken-2">
                <h4 className="h4-responsive text-white">
                  Hybrid map
                </h4>
              </View>
              <CardBody style={{width: '100%', height: '300px'}} className="text-center">
                <GoogleMapReact
                    defaultCenter={{lat: 10, lng: 10}}
                    defaultZoom={7}
                    options = {{
                      mapTypeId: 'hybrid'
                    }}
                  />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card className="mt-5">
              <View className="gradient-card-header blue darken-2">
                <h4 className="h4-responsive text-white">
                Satellite map
                </h4>
              </View>
              <CardBody style={{width: '100%', height: '300px'}} className="text-center">
                <GoogleMapReact
                      defaultCenter={{lat: 10, lng: 10}}
                      defaultZoom={7}
                      options = {{
                        mapTypeId: 'satellite'
                      }}
                    />
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card className="mt-5">
              <View className="gradient-card-header blue darken-2">
                <h4 className="h4-responsive text-white">
                  Terrain map
                </h4>
              </View>
              <CardBody style={{width: '100%', height: '300px'}} className="text-center">
                <GoogleMapReact
                        defaultCenter={{lat: 10, lng: 10}}
                        defaultZoom={7}
                        options = {{
                          mapTypeId: 'terrain'
                        }}
                      />
              </CardBody>
            </Card>
          </Col>
        </Row>
    </React.Fragment>
  )
}

export default MapsPage;