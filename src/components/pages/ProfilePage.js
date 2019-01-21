import React from 'react'
import { MDBCard, MDBCol, MDBRow, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from 'mdbreact';
import src1 from '../../assets/img-1.jpg';

const ProfilePage =  () => {
  return (
    <React.Fragment>
        <MDBRow className="justify-content-center">
        <MDBCol sm="12" md="6" lg="3" className="mb-5">
            <MDBCard>
                <MDBCardImage className="img-fluid" src={src1} />
                <MDBCardBody>
                    <MDBCardTitle className="text-center mb-2 font-bold">Alice Mayer</MDBCardTitle>
                    <MDBCardTitle sub className="text-center indigo-text mb-2 font-bold">Photographer</MDBCardTitle>
                    <MDBCardText>
                        <strong className="mb-2">About:</strong>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione perferendis quod animi dignissimos consectetur quibusdam numquam laboriosam, minus, provident...
                    </MDBCardText>
                    <div className="row justify-content-end pr-1">
                        <MDBBtn size="sm" outline color="primary">More...</MDBBtn>
                    </div>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol md="6" lg="9">
        <section className="text-center pb-3">
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="6" xl="5" className="mb-3">
              <MDBCard className="d-flex mb-5">
                <MDBView>
                  <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-profile-page.jpg" alt="Project" className="img-fluid"/>
                  <MDBMask overlay="white-slight"/>
                </MDBView>
                <MDBCardBody>
                  <MDBCardTitle className="font-bold mb-3">
                    <strong>Project name</strong>
                  </MDBCardTitle>
                  <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className="links-light profile-card-footer">
                  <span className="right">
                    <a className="p-2" href="#profile">
                      Live Preview
                      <MDBIcon icon="image" className="ml-1"/>
                    </a>
                  </span>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="6" xl="5" className="mb-3">
              <MDBCard className="d-flex mb-5">
                <MDBView>
                  <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-signup.jpg" alt="Project" className="img-fluid"/>
                  <MDBMask overlay="white-slight"/>
                </MDBView>
                <MDBCardBody>
                  <MDBCardTitle className="font-bold mb-3">
                    <strong>Project name</strong>
                  </MDBCardTitle>
                  <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className="links-light profile-card-footer">
                  <span className="right">
                    <a className="p-2" href="#profile">
                      Live Preview
                      <MDBIcon icon="image" className="ml-1"/>
                    </a>
                  </span>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="6" xl="5" className="mb-3">
              <MDBCard className="d-flex mb-5">
                <MDBView>
                  <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-profile-page.jpg" alt="Project" className="img-fluid"/>
                  <MDBMask overlay="white-slight"/>
                </MDBView>
                <MDBCardBody>
                  <MDBCardTitle className="font-bold mb-3">
                    <strong>Project name</strong>
                  </MDBCardTitle>
                  <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className="links-light profile-card-footer">
                  <span className="right">
                    <a className="p-2" href="#profile">
                      Live Preview
                      <MDBIcon icon="image" className="ml-1"/>
                    </a>
                  </span>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="6" xl="5" className="mb-3">
              <MDBCard className="d-flex mb-5">
                <view-wrapper>
                  <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-signup.jpg" alt="Project" className="img-fluid"/>
                  <MDBMask overlay="white-slight"/>
                </view-wrapper>
                <MDBCardBody>
                  <MDBCardTitle className="font-bold mb-3">
                    <strong>Project name</strong>
                  </MDBCardTitle>
                  <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className="links-light profile-card-footer">
                  <span className="right">
                    <a className="p-2" href="#profile">
                      Live Preview
                      <MDBIcon icon="image" className="ml-1"/>
                    </a>
                  </span>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBCol>
    </MDBRow>
    </React.Fragment>
  );
}

export default ProfilePage;