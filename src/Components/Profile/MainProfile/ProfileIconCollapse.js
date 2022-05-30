import React, { useEffect } from 'react'
import { MdOutlineShoppingBag, MdAccountCircle } from 'react-icons/md'
import { GoSignIn } from 'react-icons/go'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeUser } from '../../../Slices/userSlice'
import { changeStatus } from '../../../Slices/statusSlice'
import { MdLogout } from 'react-icons/md'

function ProfileIconCollapse(props) {

  let dispatch = useDispatch();

  let activeUser = useSelector(state => state.user);

  let status = useSelector(state => state.status);

  const onLogout = function () {

    props.handleUserShow();

    let actionObj1 = removeUser();
    dispatch(actionObj1);

    let actionObj2 = changeStatus([false]);
    dispatch(actionObj2);

  }

  //console.log(activeUser, status);

  return (
    <div className='clps'>
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-dark" >
          <Link to="bag" style={{ textDecoration: 'none', color: "black" }} onClick={() => props.handleUserShow()}>
            <MdOutlineShoppingBag className='me-3' />Bag
          </Link>
        </li>

        <li className="list-group-item text-dark" >
          <Link to="orders" style={{ textDecoration: 'none', color: "black" }} onClick={() => props.handleUserShow()}>
            <FontAwesomeIcon icon={faBagShopping} className="me-3" />Orders
          </Link>
        </li>

        <li className="list-group-item text-dark" >
          <Link to="account" style={{ textDecoration: 'none', color: "black" }} onClick={() => props.handleUserShow()}>
            <MdAccountCircle className='me-3' />
            {
              !status[0] && <span>Account</span>
            }
            {
              status[0] && <span>Hi, {activeUser.FirstName}</span>
            }
          </Link>
        </li>

        <li className="list-group-item text-dark" >
          {
            !status[0] &&
            <div className='row row-cols-lg-2 row-cols-1'>

              <div className='col'>
                <Link to="signin" style={{ textDecoration: 'none', color: "black" }} onClick={() => props.handleUserShow()}>
                  <GoSignIn className='me-3' />Sign in
                </Link>
              </div>

              <div className='col'>
                <Link to="signup" style={{ textDecoration: 'none', color: "black" }} onClick={() => props.handleUserShow()}>
                  <FontAwesomeIcon icon={faUserPlus} className="me-3 " />Sign Up
                </Link>
              </div>

            </div>
          }
          {
            status[0] &&
            <Link to="" style={{ textDecoration: 'none', color: "black" }} onClick={() => onLogout()}>
              <MdLogout className='me-3' />Log out
            </Link>
          }

        </li>

      </ul>
    </div>
  )
}

export default ProfileIconCollapse