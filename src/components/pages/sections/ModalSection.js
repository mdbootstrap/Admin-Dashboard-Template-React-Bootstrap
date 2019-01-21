import React, { Component } from 'react';
import { MDBCol, MDBRow, MDBCard, MDBCardBody, MDBCardHeader, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader} from 'mdbreact';

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

    toggle = nr =>  () => {
        let modalName = 'modal' + nr;
        this.setState({
            [modalName]: !this.state[modalName]
        })
    }

    render(){
        return (
            <MDBCol lg="6" className="mb-4">
              <MDBCard>
                <MDBCardHeader>Modals</MDBCardHeader>
                <MDBCardBody>
                  <h4 className="mb-5 mt-4 dark-grey-text text-center font-bold"><strong>Position & Sizes</strong></h4>
                  <div className="text-center mb-5">
                      <p className="lead">Click buttons below to launch modals demo</p>
                  </div>
                  <MDBRow>
                      <MDBCol md="3" className="mb-3">
                          <h5 className="text-center mb-3">Frame modal</h5>
                          <img className="img-fluid z-depth-1" src="https://mdbootstrap.com/img/brandflow/modal4.jpg" alt="frame position"/>
                          <div className="text-center">
                              <h5 className="my-3">Position</h5>
                              <MDBBtn color="primary" size="sm" onClick={this.toggle(1)}>Top</MDBBtn>
                              <MDBBtn color="primary" size="sm" onClick={this.toggle(2)}>Bottom</MDBBtn>
                              <MDBModal toggle={this.toggle(1)} isOpen={this.state.modal1} position="top" frame>
                                  <MDBModalBody className="text-center">
                                  <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                                  <MDBBtn color="secondary" onClick={this.toggle(1)}>Close</MDBBtn>
                                  <MDBBtn color="primary" onClick={this.toggle(1)}>Save changes</MDBBtn>
                                  </MDBModalBody>
                              </MDBModal>
                              <MDBModal toggle={this.toggle(2)} isOpen={this.state.modal2} position="bottom" frame>
                                  <MDBModalBody className="text-center">
                                  <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                                  <MDBBtn color="secondary" onClick={this.toggle(2)}>Close</MDBBtn>
                                  <MDBBtn color="primary" onClick={this.toggle(2)}>Save changes</MDBBtn>
                                  </MDBModalBody>
                              </MDBModal>
                          </div>
                      </MDBCol>
                      <MDBCol md="3" className="mb-3">
                          <h5 className="text-center mb-3">Side modal</h5>
                          <img className="img-fluid z-depth-1" src="https://mdbootstrap.com/img/brandflow/modal3.jpg" alt="frame position"/>
                          <div className="text-center">
                              <h5 className="my-3">Position</h5>
                              <MDBBtn color="primary" size="sm" onClick={this.toggle(3)}>Top Right</MDBBtn>
                              <MDBBtn color="primary" size="sm" onClick={this.toggle(4)}>Top Left</MDBBtn>
                              <MDBBtn color="primary" size="sm" onClick={this.toggle(5)}>Bottom Right</MDBBtn>
                              <MDBBtn color="primary" size="sm" onClick={this.toggle(6)}>Bottom Left</MDBBtn>
                              <MDBModal toggle={this.toggle(3)} isOpen={this.state.modal3} side position="top-right">
                                <MDBModalHeader>Modal Title</MDBModalHeader>
                                <MDBModalBody className="text-center">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                                <MDBBtn color="secondary" onClick={this.toggle(3)}>Close</MDBBtn>
                                </MDBModalBody>
                              </MDBModal>
                              <MDBModal toggle={this.toggle(4)} isOpen={this.state.modal4} side position="top-left">
                                <MDBModalHeader>Modal Title</MDBModalHeader>
                                <MDBModalBody className="text-center">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                                <MDBBtn color="secondary" onClick={this.toggle(4)}>Close</MDBBtn>
                                </MDBModalBody>
                              </MDBModal>
                              <MDBModal toggle={this.toggle(5)} isOpen={this.state.modal5} side position="bottom-right">
                                <MDBModalHeader>Modal Title</MDBModalHeader>
                                <MDBModalBody className="text-center">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                                <MDBBtn color="secondary" onClick={this.toggle(5)}>Close</MDBBtn>
                                </MDBModalBody>
                              </MDBModal>
                              <MDBModal toggle={this.toggle(6)} isOpen={this.state.modal6} side position="bottom-left">
                                <MDBModalHeader>Modal Title</MDBModalHeader>
                                <MDBModalBody className="text-center">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                                <MDBBtn color="secondary" onClick={this.toggle(6)}>Close</MDBBtn>
                                </MDBModalBody>
                              </MDBModal>
                          </div>
                      </MDBCol>
                      <MDBCol md="3" className="mb-3">
                          <h5 className="text-center mb-3">Central modal</h5>
                          <img className="img-fluid z-depth-1" src="https://mdbootstrap.com/img/brandflow/modal2.jpg" alt="frame position"/>
                          <div className="text-center">
                              <h5 className="my-3">Size</h5>
                              <MDBBtn color="primary" size="sm" onClick={this.toggle(7)}>Small</MDBBtn>
                              <MDBBtn color="primary" size="sm" onClick={this.toggle(8)}>Medium</MDBBtn>
                              <MDBBtn color="primary" size="sm" onClick={this.toggle(9)}>Large</MDBBtn>
                              <MDBBtn color="primary" size="sm" onClick={this.toggle(10)}>Fluid</MDBBtn>
                              <MDBModal toggle={this.toggle(7)} isOpen={this.state.modal7} size="sm">
                                <MDBModalHeader>Modal Title</MDBModalHeader>
                                <MDBModalBody className="text-center">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                                <MDBBtn color="secondary" onClick={this.toggle(7)}>Close</MDBBtn>
                                </MDBModalBody>
                              </MDBModal>
                              <MDBModal toggle={this.toggle(8)} isOpen={this.state.modal8} >
                                <MDBModalHeader>Modal Title</MDBModalHeader>
                                <MDBModalBody className="text-center">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                                <MDBBtn color="secondary" onClick={this.toggle(8)}>Close</MDBBtn>
                                </MDBModalBody>
                              </MDBModal>
                              <MDBModal toggle={this.toggle(9)} isOpen={this.state.modal9} size="lg">
                                <MDBModalHeader>Modal Title</MDBModalHeader>
                                <MDBModalBody className="text-center">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                                <MDBBtn color="secondary" onClick={this.toggle(9)}>Close</MDBBtn>
                                </MDBModalBody>
                              </MDBModal>
                              <MDBModal toggle={this.toggle(10)} isOpen={this.state.modal10} size="fluid">
                                <MDBModalHeader>Modal Title</MDBModalHeader>
                                <MDBModalBody className="text-center">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                                <MDBBtn color="secondary" onClick={this.toggle(10)}>Close</MDBBtn>
                                </MDBModalBody>
                              </MDBModal>
                          </div>
                      </MDBCol>
                      <MDBCol md="3" className="mb-3">
                          <h5 className="text-center mb-3">Fluid modal</h5>
                          <img className="img-fluid z-depth-1" src="https://mdbootstrap.com/img/brandflow/modal1.jpg" alt="frame position"/>
                          <div className="text-center">
                              <h5 className="my-3">Position</h5>
                              <MDBBtn color="primary" size="sm" onClick={this.toggle(11)}>Right</MDBBtn>
                              <MDBBtn color="primary" size="sm" onClick={this.toggle(12)}>Left</MDBBtn>
                              <MDBBtn color="primary" size="sm" onClick={this.toggle(13)}>Top</MDBBtn>
                              <MDBBtn color="primary" size="sm" onClick={this.toggle(14)}>Bottom</MDBBtn>
                              <MDBModal toggle={this.toggle(11)} isOpen={this.state.modal11} fullHeight position="right">
                                <MDBModalHeader>Modal Title</MDBModalHeader>
                                <MDBModalBody className="text-center">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                                <MDBBtn color="secondary" onClick={this.toggle(11)}>Close</MDBBtn>
                                </MDBModalBody>
                              </MDBModal>
                              <MDBModal toggle={this.toggle(12)} isOpen={this.state.modal12} fullHeight position="left">
                                <MDBModalHeader>Modal Title</MDBModalHeader>
                                <MDBModalBody className="text-center">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                                <MDBBtn color="secondary" onClick={this.toggle(12)}>Close</MDBBtn>
                                </MDBModalBody>
                              </MDBModal>
                              <MDBModal toggle={this.toggle(13)} isOpen={this.state.modal13} fullHeight position="top">
                                <MDBModalHeader>Modal    Title</MDBModalHeader>
                                <MDBModalBody className="text-center">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                                <MDBBtn color="secondary" onClick={this.toggle(13)}>Close</MDBBtn>
                                </MDBModalBody>
                              </MDBModal>
                              <MDBModal toggle={this.toggle(14)} isOpen={this.state.modal14} fullHeight position="bottom">
                                <MDBModalHeader>Modal Title</MDBModalHeader>
                                <MDBModalBody className="text-center">
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                                <MDBBtn color="secondary" onClick={this.toggle(14)}>Close</MDBBtn>
                                </MDBModalBody>
                              </MDBModal>
                          </div>
                      </MDBCol>
                  </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
        )
    }
}

export default ModalSection;