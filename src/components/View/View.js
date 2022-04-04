/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import './View.css';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
import img9 from '../../img/img9.jpg';

function View() {

    const [user, setUser] = useState("");
    const { id } = useParams();
    useEffect(() => {
        document.title = "Details";  
        getUser();
    }, [id]);

    function getUser () {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=cb75810a73d181fd7f2f338a763994df`)
        .then(res =>{
        console.log(res, "raj hiiiiiii")
        setUser(res.data);
    })
  }

  function goBack () {
      window.location.href =  "/Dashboard";
  }
  return (
        <>
        <Container fluid className='div'>
            <NavBar />
        <div className="main-dash-div">
        <div className='parent-div'>
            <div className='table-sub-div'>
                <div className='data-head'>
                    <Row>
                    <Col>
                            <div><h3>Details</h3></div>
                        </Col>
                        <Col>
                            <div><Button varient="primary" className="btn" onClick={goBack} style={{te: "right"}} >back</Button></div>
                        </Col>
                    </Row>
                </div>
        
                <div className='display-data-div'>
                    <div className='display-data'>
                                <Row>
                                    <Col md={4} className="table-img">
                                        <div className='table-data-img'>
                                            <img src={img9} alt='display-image' />
                                        </div>
                                    </Col>
                                    <Col md={8} className="table-data">
                                        <Row className='data-desc'>
                                            <Col md={3}>
                                                <div className='data-header'>
                                                    <h6>Title:</h6>
                                                </div>
                                            </Col>
                                            <Col md={9}>
                                                <div className='data-text'>
                                                    <h6>{user.title}</h6>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className='data-desc'>
                                            <Col md={3}>
                                                <div className='data-header'>
                                                    <h6>Description:</h6>
                                                </div>
                                            </Col>
                                            <Col md={9}>
                                                <div className='data-text'>
                                                    <p>{user.overview}</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className='data-desc'>
                                            <Col md={3}>
                                                <div className='data-header'>
                                                    <h6>Lnaguage:</h6>
                                                </div>
                                            </Col>
                                            <Col md={3}>
                                                <div className='data-text'>
                                                    <p>{user.original_language}</p>
                                                </div>
                                            </Col>
                                            <Col md={3}>
                                                <div className='data-header'>
                                                    <h6>Run Time:</h6>
                                                </div>
                                            </Col>
                                            <Col md={3}>
                                                <div className='data-text'>
                                                    <p>{user.runtime}</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className='data-desc'>
                                            <Col md={3}>
                                                <div className='data-header'>
                                                    <h6><em>Tagline:</em></h6>
                                                </div>
                                            </Col>
                                            <Col md={9}>
                                                <div className='data-text'>
                                                    <p>{user.tagline}</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className='data-desc'>
                                            <Col md={3}>
                                                <div className='data-header'>
                                                    <h6>Date of release:</h6>
                                                </div>
                                            </Col>
                                            <Col md={9}>
                                                <div className='data-text'>
                                                    <p>{user.release_date}</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className='data-desc'>
                                            <Col md={3}>
                                                <div className='data-header'>
                                                    <h6>Production Companies:</h6>
                                                </div>
                                            </Col>
                                            <Col md={9}>
                                                {user.production_companies?.map((cmp) =>(<div className='data-text'>
                                                    <p>{cmp.name}</p>
                                                </div>))}
                                            </Col>
                                        </Row>
                                        <Row className='data-desc'>
                                            <Col md={3}>
                                                <div className='data-header'>
                                                    <h6>Go to homepage:</h6>
                                                </div>
                                            </Col>
                                            <Col md={9}>
                                                <div className='data-text'>
                                                    <Link to={{ pathname: user.homepage }} target="_blank">{user.homepage}</Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                       
                </div>
            </div>
        </div>  
        
      </div>
      <Footer />
    </Container>      
    </>
  )
}

export default View