/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useState, useEffect} from 'react';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
// import './Dashboard.css';
import { Button, Row, Col, Container } from 'react-bootstrap';
import {  Link } from "react-router-dom";
import img9 from '../../img/img9.jpg';

function Favorites(props) {

    const dataImages = {
         img: img9
    }

	const [favourites, setFavourites] = useState([]);

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

    const removeFavouriteUsers = (user) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.id !== user.id
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

  return (
	<>
		<Container fluid className='div'>
            <NavBar />
        <div className="main-dash-div">
        <div className='parent-div'>
            {/* <div className="">
                <Sidebar />
            </div> */}
            <div className='data-sub-div'>
                <div className='data-head'>
                    <Row>
                        <Col>
                            <div><h3>All Favourite data</h3></div>
                        </Col>
                        <Col>
                            
                        </Col>
                    </Row>
                </div>
                <div className='display-data-div'>
                    <div className='display-data'>
                        <Row >
                            { favourites.map( (user, index) => (<Col md={4}>
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
                                                        <div onClick={() => removeFavouriteUsers(user)}>
															<Button>Remove</Button>
														</div>
                                                    </Col>
                                                </Row>
                                            </div>
                                            </div>
                                        </div>
                                    </Col>))}
                    
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

export default Favorites
