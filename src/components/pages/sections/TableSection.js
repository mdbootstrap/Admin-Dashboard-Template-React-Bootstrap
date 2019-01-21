import React from 'react';
import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol } from 'mdbreact';

const TableSection = () => {
  return (
    <MDBRow className="mb-4">
          <MDBCol md="6">
              <MDBCard>
                  <MDBCardBody>
                    <MDBTable hover>
                      <MDBTableHead color="blue-grey lighten-4">
                        <tr>
                          <th>#</th>
                          <th>First</th>
                          <th>Last</th>
                          <th>Handle</th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </MDBTableBody>
                    </MDBTable>
                  </MDBCardBody>
              </MDBCard>
          </MDBCol>
          <MDBCol md="6" className="mb-4">
              <MDBCard>
                  <MDBCardBody>
                    <MDBTable hover>
                      <MDBTableHead color="blue lighten-4">
                        <tr>
                          <th>#</th>
                          <th>First</th>
                          <th>Last</th>
                          <th>Handle</th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </MDBTableBody>
                    </MDBTable>
                  </MDBCardBody>
              </MDBCard>
          </MDBCol>
      </MDBRow>
  )
}

export default TableSection;

