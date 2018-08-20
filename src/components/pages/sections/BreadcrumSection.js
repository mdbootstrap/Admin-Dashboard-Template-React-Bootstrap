import React from 'react';
import { Card, CardBody, Fa, Breadcrumb, BreadcrumbItem, FormInline, Button } from 'mdbreact';

const BreadcrumSection = () => {
  return (
    <Card className="mb-5">
        <CardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
            <Breadcrumb>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem active>Dashboard</BreadcrumbItem>
            </Breadcrumb>
            <FormInline className="md-form m-0">
                <input className="form-control form-control-sm" type="search" placeholder="Type your query" aria-label="Search"/>
                <Button size="sm" color="primary" className="my-0" type="submit"><Fa icon="search" /></Button>
            </FormInline>
        </CardBody>
    </Card>
  )
}

export default BreadcrumSection;

