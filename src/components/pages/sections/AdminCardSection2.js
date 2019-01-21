import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol } from 'mdbreact';

const AdminCardSection2 = () => {
  return (
    <MDBRow className="mb-4">
        <MDBCol xl="3" md="6" className="mb-3">
          <MDBCard color="primary-color" className="classic-admin-card">
            <MDBCardBody>
              <div className="float-right">
              <MDBIcon far icon="money-bill-alt"/>
              </div>
              <p className="white-text">SALES</p>
              <h4><strong>$2000</strong></h4>
            </MDBCardBody>
            <div className="progress">
              <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey darken-3" role="progressbar" style={{width: "25%"}}></div>
            </div>
            <MDBCardBody>
              <p>Better than last week (25%)</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-3">
          <MDBCard color="warning-color" className="classic-admin-card">
            <MDBCardBody>
              <div className="float-right">
              <MDBIcon icon="chart-line"/>
              </div>
              <p className="white-text">SUBSCRIPTIONS</p>
              <h4><strong>200</strong></h4>
            </MDBCardBody>
            <div className="progress">
              <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey darken-3" role="progressbar" style={{width: "25%"}}></div>
            </div>
            <MDBCardBody>
              <p>Worse than last week (25%)</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-3">
          <MDBCard color="primary-color" className="classic-admin-card">
            <MDBCardBody>
              <div className="float-right">
              <MDBIcon icon="chart-pie"/>
              </div>
              <p className="white-text">TRAFFIC</p>
              <h4><strong>20000</strong></h4>
            </MDBCardBody>
            <div className="progress">
              <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="75" className="progress-bar bg grey darken-3" role="progressbar" style={{width: "75%"}}></div>
            </div>
            <MDBCardBody>
              <p>Better than last week (75%)</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-3">
          <MDBCard color="red accent-2" className="classic-admin-card">
            <MDBCardBody>
              <div className="float-right">
              <MDBIcon icon="chart-bar"/>
              </div>
              <p className="white-text">ORGANIC TRAFFIC</p>
              <h4><strong>2000</strong></h4>
            </MDBCardBody>
            <div className="progress">
              <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey darken-3" role="progressbar" style={{width: "25%"}}></div>
            </div>
            <MDBCardBody>
              <p>Better than last week (75%)</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
  )
}

export default AdminCardSection2;

