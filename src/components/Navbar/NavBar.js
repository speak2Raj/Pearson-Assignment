import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavBar.css';

function NavBar() {

    const logout = () => {
    window.localStorage.clear();
    window.location.href =  "/";
  }
  return (
            <>
                <div className='parent-nav'>
                    <Navbar  expand="lg">
                        <Container fluid>
                            <Navbar.Brand  style={{color: "#ffc107"}}>Rajshekar</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ }}
                                navbarScroll
                            >
                                <Nav.Link className='nav-link' href="/Dashboard">Home</Nav.Link>
                                <Nav.Link className='nav-link' href="/Favourite">Favourite List</Nav.Link>

                                <Nav.Link className='nav-link logout-btn' onClick={logout}>Logout</Nav.Link>
                                
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </>
  )
}

export default NavBar
