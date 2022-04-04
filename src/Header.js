/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './Header.css'

function Header() {
    
  return (
            <>
                <div className='parent-nav'>
                    <Navbar  expand="lg">
                        <Container fluid>
                            <Navbar.Brand style={{color: "#ffc107"}}>Rajshekar</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                
                            </Navbar.Collapse>
                        </Container>
                        
                    </Navbar>
                </div>
            </>
  )
}

export default Header;