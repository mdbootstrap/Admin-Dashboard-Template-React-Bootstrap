import React, { Component } from 'react';
import { Col, Row, Card, CardBody, CardHeader, Button, Modal, ModalBody, ModalHeader} from 'mdbreact';

class ModalSection extends Component {
    state = {
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false,
        modal5: false,
        modal6: false,
        modal7: false,
        modal8: false,
        modal9: false,
        modal10: false,
        modal11: false,
        modal12: false,
        modal13: false
    }

    toggle = (nr) => {
        let modalName = 'modal' + nr;
        this.setState({
            [modalName]: !this.state[modalName]
        })
    }

    render(){
        return (
            <Col lg="6" className="mb-4">
              <Card>
                <CardHeader>Modals</CardHeader>
                <CardBody>
                  <h4 className="mb-5 mt-4 dark-grey-text text-center font-bold"><strong>Position & Sizes</strong></h4>
                  <div className="text-center mb-5">
                      <p className="lead">Click buttons below to launch modals demo</p>
                  </div>
                  <Row>
                      <Col md="3" className="mb-3">
                          <h5 className="text-center mb-3">Frame modal</h5>
                          <img className="img-fluid z-depth-1" src="https://mdbootstrap.com/img/brandflow/modal4.jpg" alt="frame position"/>
                          <div className="text-center">
                              <h5 className="my-3">Position</h5>
                              <Button color="primary" size="sm" onClick={() => this.toggle(1)}>Top</Button>
                              <Button color="primary" size="sm" onClick={() => this.toggle(2)}>Bottom</Button>
                              <Modal toggle={() => this.toggle(1)} isOpen={this.state.modal1} position="top" frame>
                                  <ModalBody className="text-center">
                                  <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                                  <Button color="secondary" onClick={() => this.toggle(1)}>Close</Button>
                                  <Button color="primary" onClick={() => this.toggle(1)}>Save changes</Button>
                                  </ModalBody>
                              </Modal>
                              <Modal toggle={() => this.toggle(2)} isOpen={this.state.modal2} position="bottom" frame>
                                  <ModalBody className="text-center">
                                  <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                                  <Button color="secondary" onClick={() => this.toggle(2)}>Close</Button>
                                  <Button color="primary" onClick={() => this.toggle(2)}>Save changes</Button>
                                  </ModalBody>
                              </Modal>  
                          </div>
                      </Col>
                      <Col md="3" className="mb-3">
                          <h5 className="text-center mb-3">Side modal</h5>
                          <img className="img-fluid z-depth-1" src="https://mdbootstrap.com/img/brandflow/modal3.jpg" alt="frame position"/>
                          <div className="text-center">
                              <h5 className="my-3">Position</h5>
                              <Button color="primary" size="sm" onClick={() => this.toggle(3)}>Top Right</Button>
                              <Button color="primary" size="sm" onClick={() => this.toggle(4)}>Top Left</Button>
                              <Button color="primary" size="sm" onClick={() => this.toggle(5)}>Bottom Right</Button>
                              <Button color="primary" size="sm" onClick={() => this.toggle(6)}>Bottom Left</Button>
                              <Modal toggle={() => this.toggle(3)} isOpen={this.state.modal3} side position="top-right">
                                <ModalHeader>Modal Title</ModalHeader>
                                <ModalBody className="text-center">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                                <Button color="secondary" onClick={() => this.toggle(3)}>Close</Button>
                                </ModalBody>
                              </Modal>
                              <Modal toggle={() => this.toggle(4)} isOpen={this.state.modal4} side position="top-left">
                                <ModalHeader>Modal Title</ModalHeader>
                                <ModalBody className="text-center">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                                <Button color="secondary" onClick={() => this.toggle(4)}>Close</Button>
                                </ModalBody>
                              </Modal>
                              <Modal toggle={() => this.toggle(5)} isOpen={this.state.modal5} side position="bottom-right">
                                <ModalHeader>Modal Title</ModalHeader>
                                <ModalBody className="text-center">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                                <Button color="secondary" onClick={() => this.toggle(5)}>Close</Button>
                                </ModalBody>
                              </Modal>
                              <Modal toggle={() => this.toggle(6)} isOpen={this.state.modal6} side position="bottom-left">
                                <ModalHeader>Modal Title</ModalHeader>
                                <ModalBody className="text-center">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                                <Button color="secondary" onClick={() => this.toggle(6)}>Close</Button>
                                </ModalBody>
                              </Modal>
                          </div>
                      </Col>
                      <Col md="3" className="mb-3">
                          <h5 className="text-center mb-3">Central modal</h5>
                          <img className="img-fluid z-depth-1" src="https://mdbootstrap.com/img/brandflow/modal2.jpg" alt="frame position"/>
                          <div className="text-center">
                              <h5 className="my-3">Size</h5>
                              <Button color="primary" size="sm" onClick={() => this.toggle(7)}>Small</Button>
                              <Button color="primary" size="sm" onClick={() => this.toggle(8)}>Medium</Button>
                              <Button color="primary" size="sm" onClick={() => this.toggle(9)}>Large</Button>
                              <Button color="primary" size="sm" onClick={() => this.toggle(10)}>Fluid</Button>
                              <Modal toggle={() => this.toggle(7)} isOpen={this.state.modal7} size="sm">
                                <ModalHeader>Modal Title</ModalHeader>
                                <ModalBody className="text-center">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                                <Button color="secondary" onClick={() => this.toggle(7)}>Close</Button>
                                </ModalBody>
                              </Modal>
                              <Modal toggle={() => this.toggle(8)} isOpen={this.state.modal8} >
                                <ModalHeader>Modal Title</ModalHeader>
                                <ModalBody className="text-center">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                                <Button color="secondary" onClick={() => this.toggle(8)}>Close</Button>
                                </ModalBody>
                              </Modal>
                              <Modal toggle={() => this.toggle(9)} isOpen={this.state.modal9} size="lg">
                                <ModalHeader>Modal Title</ModalHeader>
                                <ModalBody className="text-center">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                                <Button color="secondary" onClick={() => this.toggle(9)}>Close</Button>
                                </ModalBody>
                              </Modal>
                              <Modal toggle={() => this.toggle(10)} isOpen={this.state.modal10} size="fluid">
                                <ModalHeader>Modal Title</ModalHeader>
                                <ModalBody className="text-center">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                                <Button color="secondary" onClick={() => this.toggle(10)}>Close</Button>
                                </ModalBody>
                              </Modal>
                          </div>
                      </Col>
                      <Col md="3" className="mb-3">
                          <h5 className="text-center mb-3">Fluid modal</h5>
                          <img className="img-fluid z-depth-1" src="https://mdbootstrap.com/img/brandflow/modal1.jpg" alt="frame position"/>
                          <div className="text-center">
                              <h5 className="my-3">Position</h5>
                              <Button color="primary" size="sm" onClick={() => this.toggle(11)}>Right</Button>
                              <Button color="primary" size="sm" onClick={() => this.toggle(12)}>Left</Button>
                              <Button color="primary" size="sm" onClick={() => this.toggle(13)}>Top</Button>
                              <Button color="primary" size="sm" onClick={() => this.toggle(14)}>Bottom</Button>
                              <Modal toggle={() => this.toggle(11)} isOpen={this.state.modal11} fullHeight position="right">
                                <ModalHeader>Modal Title</ModalHeader>
                                <ModalBody className="text-center">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                                <Button color="secondary" onClick={() => this.toggle(11)}>Close</Button>
                                </ModalBody>
                              </Modal>
                              <Modal toggle={() => this.toggle(12)} isOpen={this.state.modal12} fullHeight position="left">
                                <ModalHeader>Modal Title</ModalHeader>
                                <ModalBody className="text-center">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                                <Button color="secondary" onClick={() => this.toggle(12)}>Close</Button>
                                </ModalBody>
                              </Modal>
                              <Modal toggle={() => this.toggle(13)} isOpen={this.state.modal13} fullHeight position="top">
                                <ModalHeader>Modal Title</ModalHeader>
                                <ModalBody className="text-center">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                                <Button color="secondary" onClick={() => this.toggle(13)}>Close</Button>
                                </ModalBody>
                              </Modal>
                              <Modal toggle={() => this.toggle(14)} isOpen={this.state.modal14} fullHeight position="bottom">
                                <ModalHeader>Modal Title</ModalHeader>
                                <ModalBody className="text-center">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                                <Button color="secondary" onClick={() => this.toggle(14)}>Close</Button>
                                </ModalBody>
                              </Modal>
                          </div>
                      </Col>
                  </Row>
                  </CardBody>
                </Card>
              </Col>
        )
    }
}

export default ModalSection;