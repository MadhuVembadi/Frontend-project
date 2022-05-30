import React from 'react'
import { Routes, Route, NavLink, Navigate, Router } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Button, Modal, CloseButton } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Collapse } from 'react-bootstrap'

import Home from './Components/Home'
import Apple from './Components/Apple'
import Oneplus from './Components/Oneplus'
import Realme from './Components/Realme'
import Samsung from './Components/Samsung'
import Search from './Components/Search'
import ProfileIconCollapse from './Components/Profile/MainProfile/ProfileIconCollapse'
import Signin from './Components/Profile/Signin/Signin'
import Signup from './Components/Profile/Signup/Signup'
import Account from './Components/Profile/Account/Account'
import Orders from './Components/Profile/Orders/Orders'
import Bag from './Components/Profile/Bag/Bag'
import UserProfile from './Components/Profile/UserProfile/UserProfile'
import Compare from './Components/Compare';
import Specs from './Components/Specs';
import Buy from './Components/Buy/Buy';
import Scrolltotop from './Components/Scrolltotop'


import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faMagnifyingGlass, faUser, faMoon, fas, faT } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

function App() {

  let { register, handleSubmit, formState: { errors } } = useForm();

  let [mode, setMode] = useState(false);



  /*Dark Mode*/

  useEffect(() => {
    if (mode == true) {
      document.querySelector("body").style.backgroundColor = 'black';
      document.querySelector("body").style.color = "white";
      document.querySelector(".navbar").setAttribute("class", "navbar navbar-expand-md navbar-light bg-light text-dark");
      Array.from(document.querySelectorAll(".topcards")).map((item) => {
        item.setAttribute("class", "card card-body bg-light m-1 col col-sm-3 topcards");
      });

      Array.from(document.querySelectorAll(".captions")).map((item) => {
        item.setAttribute("class", "text-dark captions");
      });

      Array.from(document.querySelectorAll(".apple .card")).map((item) => {
        item.setAttribute("class", "card bg-dark text-light text-center");
      });


      document.querySelector(".darkmode").setAttribute("class", "btn btn-dark text-light darkmode")
    } else {
      document.querySelector("body").style.backgroundColor = 'white';
      document.querySelector("body").style.color = "black";
      document.querySelector(".navbar").setAttribute("class", "navbar navbar-expand-md navbar-dark bg-dark");
      Array.from(document.querySelectorAll(".topcards")).map((item) => {
        item.setAttribute("class", "card card-body bg-dark m-1 col col-sm-3 topcards");
        document.querySelector(".darkmode").setAttribute("class", "btn btn-light text-dark darkmode")
      });

      Array.from(document.querySelectorAll(".captions")).map((item) => {
        item.setAttribute("class", "text-light captions");
      });

      Array.from(document.querySelectorAll(".apple .card")).map((item) => {
        item.setAttribute("class", "card bg-light text-center");
      });
    }
  }, [mode]);


  /*Search bar*/

  const [show, setShow] = useState(false);
  const [specsModel, setSpecsModel] = useState(-1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseWithObject = function (item) {
    handleClose();
    let x = item.target;
    setSpecsModel(x.getAttribute("id"));
  }
  const setPath = () => window.location.pathname;

  let [models, setModels] = useState([]);

  const fetchmodels = async () => {
    let res = await axios.get('http://localhost:5000/Compare');
    setModels(res.data);
  }

  useEffect(() => {
    fetchmodels()
  }, [])

  const onFormSubmit = function () {
    handleClose()
    let a = document.querySelector(".specs")
    let item = a.value;
    let x = models.find(obj => obj.model == item);
    if (x != undefined) {
      setSpecsModel(x.id)
    } else {
      setSpecsModel(-1)
    }
  }

  /*UserShow*/

  let [userShow, setuserShow] = useState(false);

  const handleUserShow = () => setuserShow(!userShow);



  return (
    <div>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
        <div className='container-fluid'>

          {/* Store icon */}
          <a className='navbar-brand m-auto' href="http://localhost:3000/" to="">
            <FontAwesomeIcon icon={faStore} className="me-1" />
            <i>store</i>
          </a>

          <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className='navbar-toggler-icon'></span>
          </button>

          {/* Navitems */}
          <div className="collapse navbar-collapse " id="navbarSupportedContent" >
            <ul className='navbar-nav mx-auto ' >
              {/* Home */}

              <li className='nav-item p-2'>
                <NavLink className='nav-link' to="" >Home</NavLink>
              </li>


              {/* Apple */}

              <li className='nav-item p-2'>
                <NavLink className='nav-link' to="apple">Apple</NavLink>
              </li>

              {/* Oneplus */}

              <li className='nav-item p-2'>
                <NavLink className='nav-link' to="oneplus">Oneplus</NavLink>
              </li>

              {/* Samsung */}

              <li className='nav-item p-2'>
                <NavLink className='nav-link' to="samsung">Samsung</NavLink>
              </li>

              {/* Realme */}

              <li className='nav-item p-2'>
                <NavLink className='nav-link' to="realme">Realme</NavLink>
              </li>

              {/* Search */}

              <li className='nav-item p-2'>

                <NavLink className='nav-link' to={() => setPath()} onClick={handleShow}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="text-muted" />
                </NavLink>

                <Modal show={show} onHide={handleClose} centered style={{ background: "rgba(0,0,0,0.7)" }}>
                  <Modal.Header closeButton style={{ background: "none" }} className="border-0">
                    <Modal.Title className="w-100 text-center">What are you looking for?</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className='border-0'>
                    <input type="text" className="form-control border border-1 specs" placeholder='iPhone 13'></input>

                    <h6 className='m-2'>Suggested searches</h6>
                    {
                      models.length != 0 &&
                      <ul style={{ listStyle: "none" }} className="p-0 ms-2">
                        {
                          models.map((item, index) => index < 6 && <li key={index} className="mb-2">
                            <NavLink to="model" style={{ textDecoration: "none" }} className="text-light nav-link" onClick={(item) => handleCloseWithObject(item)} id={item.id}>{item.model}</NavLink>
                          </li>)
                        }
                      </ul>
                    }
                    <NavLink to="model" className="nav-link btn btn-primary text-light w-25 ms-auto" style={{ textDecoration: "none" }} onClick={onFormSubmit}>Search</NavLink>
                  </Modal.Body>
                </Modal>

              </li>


              {/* Profile */}

              <li className='nav-item p-2'>

                <NavLink className='nav-link' to={() => setPath()} onClick={handleUserShow} >
                  <FontAwesomeIcon icon={faUser} />
                </NavLink>

              </li>

            </ul>
          </div>

          <button className='btn btn-light text-dark darkmode' onClick={() => setMode(mode == false ? true : false)}><FontAwesomeIcon icon={faMoon} /></button>
        </div>
      </nav>


      <Collapse in={userShow} className="ms-md-auto me-md-5" style={{ width: "40%" }} >
        <div>
          <ProfileIconCollapse handleUserShow={handleUserShow} />
        </div>
      </Collapse>

      <Routes>

        <Route path="" element={<Home />} />
        <Route path="apple" element={<Apple />} />
        <Route path="compare" element={<Compare />} />
        <Route path="oneplus" element={<Oneplus />} />
        <Route path="samsung" element={<Samsung />} />
        <Route path="realme" element={<Realme />} />
        <Route path="" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="model" element={<Specs item={specsModel} />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route path="orders" element={<Navigate repale to='/account/orders' />} />
        <Route path="bag" element={<Bag />} />
        <Route path="account" element={<Account />} >
          <Route path="" element={<Navigate replace to="profile" />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="bag" element={<Bag />} />
        </Route>
        <Route path="buy/:model" element={<Buy />} />
      </Routes>

      <div className='foot footer  bg-dark text-light p-3'>
        <span>
          <img src="https://cdn-icons-png.flaticon.com/512/330/330439.png" className="d-inline me-2" style={{ width: "3%" }} />
          <p className='d-inline'>India/English</p>
        </span>

        <div className="share m-2">
          <span>Follow us on </span>

          <a href="https://www.facebook.com/" target="_blanck" className="text-light m-3"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.instagram.com/" target="_blanck" className="text-light m-3"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://twitter.com/" target="_blanck" className="text-light m-3"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://youtube.com/" target="_blanck" className="text-light m-3"><FontAwesomeIcon icon={faYoutube} /></a>

        </div>
        <p style={{ fontSize: "75%" }} className="m-2"><i className="far fa-copyright"
          style={{ fontSize: "100%", border: "none", marginRight: "3px" }}></i>Store. Copy righted</p>
      </div>
    </div>
  )
}

export default App;