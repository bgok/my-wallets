import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import { HashRouter as Router, Link, Route } from "react-router-dom";
import IndexComponent from "./IndexComponent";
import TransferComponent from "./TransferComponent";

function AppRouter() {
    return (
        <Router>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Price Triangulation</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/transfer">Transfer</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div style={{ width: '300px' }}>
                <Route path="/" exact component={IndexComponent}/>
                <Route path="/transfer" component={TransferComponent}/>
            </div>
        </Router>
    );
}

export default AppRouter;
