import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import IndexComponent from '../pages/IndexComponent'
import TransferComponent from '../pages/TransferComponent'

function AppRouter() {
  return (
    <Router>
      <div style={{ color: 'lightgray' }}>
        <Navbar variant='dark' expand='sm'>
          <Navbar.Brand href='/'>
            MyWallets
            {/*<img src='./MyWallets.png' width='50' height='50' />*/}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link as={Link} to='/'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='/transfer'>
                Transfer
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div style={{ width: '500px', margin: '0 auto' }}>
        <Route path='/' exact component={IndexComponent} />
        <Route path='/transfer' component={TransferComponent} />
      </div>
    </Router>
  )
}

export default AppRouter
