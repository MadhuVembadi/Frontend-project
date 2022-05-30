import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Signin from '../Signin/Signin'
import './Account.css'
import { Outlet } from 'react-router-dom'
import Scrolltotop from '../../Scrolltotop'

function Account() {

  let status = useSelector(state => state.status);

  return (
    <div className='container account'>
      {
        !status[0] && <Signin />
      }
      {
        status[0] &&
        <>
          <Scrolltotop />
          <nav className='navbar navbar-expand navbar-light rounded-2 shadow ' style={{ backgroundColor: "" }}>
            <div className="collapse navbar-collapse " id="navbarSupportedContent" >
              <ul className='navbar-nav w-100 justify-content-around m-0' >

                <li className='nav-item p-2'>
                  <NavLink className="nav-link" to="profile">Profile</NavLink>
                </li>

                <li className='nav-item p-2'>
                  <NavLink className="nav-link" to="orders">Orders</NavLink>
                </li>

                <li className='nav-item p-2'>
                  <NavLink className="nav-link" to="bag">Bag</NavLink>
                </li>
              </ul>
            </div>
          </nav>

          <Outlet />
        </>
      }

    </div>
  )
}

export default Account