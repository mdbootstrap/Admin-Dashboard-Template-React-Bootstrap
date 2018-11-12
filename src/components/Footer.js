import React from 'react';
import { MDBFooter, Button, Fa } from 'mdbreact';

const Footer = () => {
    return (
        <MDBFooter color="blue" className="text-center font-small darken-2">
            <div className="pt-4">
                <Button outline color="white" tag="a" href="https://mdbootstrap.com/docs/react/getting-started/download/" target="_blank">Download MDB<Fa icon="download" className="ml-2"/></Button>
                <Button outline color="white" tag="a" href="https://mdbootstrap.com/docs/react/getting-started/quick-start/" target="_blank">Start free tutorial<Fa icon="graduation-cap" className="ml-2"/></Button>
                <hr className="my4"/>
            </div>
            <div className="pb-4">
                <Fa icon="facebook" className="mr-3"/>
                <Fa icon="twitter" className="mr-3"/>
                <Fa icon="youtube" className="mr-3"/>
                <Fa icon="google-plus" className="mr-3"/>
                <Fa icon="dribbble" className="mr-3"/>
                <Fa icon="pinterest" className="mr-3"/>
                <Fa icon="github" className="mr-3"/>
                <Fa icon="codepen" className="mr-3"/>
            </div>
            <p className="footer-copyright mb-0 py-3 text-center">
                &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
            </p>
        </MDBFooter>
    );
}

export default Footer;