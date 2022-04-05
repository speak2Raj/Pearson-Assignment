import React, { useState, useEffect } from 'react';
import {  Button, Row, Col, Container } from 'react-bootstrap';
import {  Link } from "react-router-dom";
import img9 from '../../img/img9.jpg';

import './Dashboard.css';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';

function Dashboard() {

    const dataImages = {
         img: img9
    }

    const [users, setUsers] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [favourites, setFavourites] = useState([]);

    const getUsers = async (searchValue) => {
		const url = `https://api.themoviedb.org/3/movie/popular?s=${searchValue}&api_key=cb75810a73d181fd7f2f338a763994df`;
        
		const response = await fetch(url);
		const responseJson = await response.json();
        
        setUsers(responseJson.results);
	};

    useEffect(() => {
        document.title = "Dash-Board";  
        getUsers();
    }, []);

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = users.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
            
        }
        else {
            setFilteredResults(users)
        }
    }

    useEffect(() => {
		const usersFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (usersFavourites) {
			setFavourites(usersFavourites);
		}
	}, []);

    const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

    const addFavouriteUsers = (user) => {
		const newFavouriteList = [...favourites, user];
		setFavourites(newFavouriteList);
        if(newFavouriteList){
            saveToLocalStorage(newFavouriteList);
        }
	};

    function favList() {
        window.location.href =  "/Favourite";
    }


  return (
        <><Container fluid className='div'>
            <NavBar />
        <div className="main-dash-div">
        <div className='parent-div'>
            <div className='data-sub-div'>
                <div className='data-head'>
                    <Row>
                        <Col>
                            <div><h3>All data</h3></div>
                        </Col>
                        <Col>
                            <div>
                                <input
                                    className='form-control'
                                    onChange={(e) => searchItems(e.target.value)}
                                    placeholder='Type to search...'
                                    />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='display-data-div'>
                    <div className='display-data'>
                        <Row >
                            { searchInput.length > 1 ? (
                    filteredResults.map((user, index) => (<Col md={4}>
                            <div className='data-table' align="center">
                                <div className='data-img'>
                                    <img src={dataImages.img} alt='display-image' />
                                </div>
                                <div style={{padding: "10px"}}>
                                <div className='data-header'>
                                    <h4>{user.title}</h4>
                                </div>
                                <div className='data-text'>
                                    <p >date of release: {user.release_date}</p>
                                </div>
                                <div className='data-text'>
                                    <p >vote:{user.vote_count}</p>
                                </div>     
                                <div className='btn-div'> 
                                    <Row>
                                         <Col md={6}>
                                            <div>
                                                <Button ><Link  to={`/View/${user.id}`}>View Details</Link></Button>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div
                                                onClick={() => addFavouriteUsers(user)}>
                                                <Button >Add to fav</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                </div>
                            </div>
                        </Col>))) :

                                    ( users.map( (user, index) => (<Col md={4}>
                                        <div className='data-table' align="center">
                                            <div className='data-img'>
                                                <img src={dataImages.img} alt='display-image' />
                                            </div>
                                            <div style={{padding: "10px"}}>
                                            <div className='data-header'>
                                                <h4>{user.title}</h4>
                                            </div>
                                            <div className='data-text'>
                                                <p >date of release: {user.release_date}</p>
                                            </div>
                                            <div className='data-text'>
                                                <p >vote:{user.vote_count}</p>
                                            </div>
                                            <div className='btn-div'>
                                                <Row>
                                                    <Col md={6}>
                                                        <div>
                                                            <Button ><Link style={{color: "white", textDecoration: "none"}}  to={`/View/${user.id}`}>View Details</Link></Button>
                                                        </div>
                                                    </Col>
                                                    <Col md={6}>
                                                        <div
                                                            onClick={() => addFavouriteUsers(user)}>
                                                            
                                                            <i className='fa fa-thumbs-up' onClick={favList} style={{color: "blue", cursor: "pointer", fontSize: "30px"}}></i>
                                                        </div>
                                                       
                                                    </Col>
                                                </Row>
                                            </div>
                                            </div>
                                        </div>
                                    </Col>)))}
                    
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

export default Dashboard
