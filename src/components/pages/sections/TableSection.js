import React from 'react';
import { Card, CardBody, Table, TableBody, TableHead, Row, Col } from 'mdbreact';

const TableSection = () => {
  return (
    <Row className="mb-4">
          <Col md="6">
              <Card>
                  <CardBody>
                    <Table hover>
                      <TableHead color="blue-grey lighten-4">
                        <tr>
                          <th>#</th>
                          <th>First</th>
                          <th>Last</th>
                          <th>Handle</th>
                        </tr>
                      </TableHead>
                      <TableBody>
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
                      </TableBody>
                    </Table>
                  </CardBody>
              </Card>
          </Col>
          <Col md="6" className="mb-4">
              <Card>
                  <CardBody>
                    <Table hover>
                      <TableHead color="blue lighten-4">
                        <tr>
                          <th>#</th>
                          <th>First</th>
                          <th>Last</th>
                          <th>Handle</th>
                        </tr>
                      </TableHead>
                      <TableBody>
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
                      </TableBody>
                    </Table>
                  </CardBody>
              </Card>
          </Col>
      </Row>
  )
}

export default TableSection;

