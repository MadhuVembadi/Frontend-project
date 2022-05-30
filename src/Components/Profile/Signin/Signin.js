import React from 'react'
import './Signin.css'
import { Form, Button } from 'react-bootstrap'
import SigninImage from '../../../Images/Signin.svg'
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { addUser } from '../../../Slices/userSlice'
import { useDispatch } from 'react-redux'
import { changeStatus } from '../../../Slices/statusSlice';
import { updateBag } from '../../../Slices/userSlice';
import { updateProduct } from '../../../Slices/bagSlice';

function Signin() {

  let userSignedin = useSelector(state => state.user);
  let bag = useSelector(state => state.bag);

  let navigate = useNavigate();

  let dispatch = useDispatch();

  let { register, handleSubmit, formState: { errors } } = useForm([]);

  let [users, setUsers] = useState([]);

  const fetchUsers = async () => {

    let res = await axios.get('http://localhost:5000/users');
    setUsers(res.data);

  }
  useEffect(() => {

    fetchUsers();

  }, [])

  const onFormSubmit = (obj) => {

    let user = users.find(item => item.email === obj.email);

    if (user == undefined) {
      window.alert("User with email " + obj.email + " not found.")
    }
    else {
      if (user.password == obj.password) {

        let actionObj1 = addUser(user);
        dispatch(actionObj1);

        let actionObj2 = changeStatus([true]);
        dispatch(actionObj2);

        if (bag.length != 0) {

          bag.forEach(obj => {
            let actionObj = updateBag(obj);
            dispatch(actionObj);
          })

        }


        if (user.bag.length != 0) {

          let actionObj3 = updateProduct(user.bag);
          dispatch(actionObj3);

        }

        let path = window.location.pathname
        console.log(path)
        if (path == '/signin')
          navigate('/account')
        else
          navigate(path)

      }
      else {
        let newElement = document.createElement("errorMsg");
        newElement.innerHTML = `
          <p class = "text-danger">*  Incorrect email or password</p>
        `
        let toAppend = document.querySelector(".signin form button");
        let parent = document.querySelector(".signin form")
        parent.insertBefore(newElement, toAppend);

        setTimeout(() => {

          let toDelete = document.querySelector("errorMsg");

          var seconds = 5000 / 1000;
          toDelete.style.transition = "opacity " + seconds + "s ease";

          toDelete.style.opacity = 0;
          setTimeout(function () {
            toDelete.parentNode.removeChild(toDelete);
          }, 5000);

        }, 100)
      }
    }

  }




  return (
    <div className='signin w-50 mx-auto border border-2 p-2 shadow m-2 rounded rounded-5'>
      <div className='p-2'>

        <div className='SigninImage'>
          <h3 className='text-center m-3' style={{ color: "#0AA1DD", fontFamily: "'Noto Sans', sans-serif", textDecoration: "underline red", textUnderlineOffset: "5px" }}>SIGN IN</h3>
          <img src={SigninImage} className="mx-auto  w-50 d-block" />
        </div>

        <Form className="mx-auto m-2" onSubmit={handleSubmit(onFormSubmit)}>

          <Form.Group className='mb-3'>
            <input type="email" placeholder='Email *' className="d-block w-100 m-1" {...register("email", { required: true })} />
            {
              errors.email?.type === 'required' && <Form.Text className='text-danger'>* This is a required field</Form.Text>
            }
          </Form.Group>

          <Form.Group className='mb-3'>
            <input type="password" placeholder='Password *' className="d-block w-100 m-1" {...register("password", { required: true })} />
            {
              errors.password?.type === 'required' && <Form.Text className='text-danger'>* This is a required field</Form.Text>
            }

          </Form.Group>
          <Button className='d-block mx-auto' type="submit" variant="danger">
            Sign in
          </Button>

        </Form>
      </div>

    </div>
  )
}

export default Signin