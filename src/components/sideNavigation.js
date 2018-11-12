import React, { Component } from 'react';
import logo from "../assets/mdb-react.png";
import { ListGroup, ListGroupItem, Fa } from 'mdbreact';
import { NavLink } from 'react-router-dom';

class TopNavigation extends Component {


    render() {
        return (
            <div className="sidebar-fixed position-fixed">
                <a href="#!" className="logo-wrapper waves-effect">
                    <img alt="MDB React Logo" className="img-fluid" src={logo}/>
                </a>
                <ListGroup className="list-group-flush">
                    <NavLink exact={true} to="/" activeClassName="activeClass">
                        <ListGroupItem>
                            <Fa icon="pie-chart" className="mr-3"/>
                            Dashboard
                        </ListGroupItem>
                    </NavLink>
                    <NavLink to="/profile" activeClassName="activeClass">
                        <ListGroupItem>
                            <Fa icon="user" className="mr-3"/>
                            Profile
                        </ListGroupItem>
                    </NavLink>
                    <NavLink to="/tables" activeClassName="activeClass">
                        <ListGroupItem>
                            <Fa icon="table" className="mr-3"/>
                            Tables
                        </ListGroupItem>
                    </NavLink>
                    <NavLink to="/maps" activeClassName="activeClass">
                        <ListGroupItem>
                            <Fa icon="map" className="mr-3"/>
                            Maps
                        </ListGroupItem>
                    </NavLink>
                    <NavLink to="/404" activeClassName="activeClass">
                        <ListGroupItem>
                            <Fa icon="exclamation" className="mr-3"/>
                            404
                        </ListGroupItem>
                    </NavLink>
                </ListGroup>
            </div>
        );
    }
}

export default TopNavigation;