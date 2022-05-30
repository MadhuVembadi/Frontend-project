import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import LoginImg from '../../../Images/Login.jpg'
import { Form, Button } from 'react-bootstrap'
import './Signup.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Signup() {

  let { register, handleSubmit, formState: { errors } } = useForm([]);

  let navigate = useNavigate();

  const onFormSubmit = async (item) => {

    item.code = code;
    item.orders = [];
    item.bag = [];

    if (item.password !== item.cpassword) {
      window.alert("Passwords doesnot match")
    }
    else {
      await axios.post('http://localhost:5000/users', item)
        .then(res => window.alert("Successfully registered"))
        .catch(err => window.alert("Uncaught Error :(\nTry Again"))

      setTimeout(() => {
        navigate('/signin');
      }, 2000);

    }

  }

  let [countries, setCountries] = useState([]);

  let [status, setStatus] = useState(false);

  let [img, setImg] = useState('');

  let [code, setCode] = useState('');

  let [selectedCountry, setCountry] = useState('');

  const fetchCountries = async () => {

    let res = await axios.get('https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json');
    setCountries(res.data);
  }

  useEffect(() => {

    fetchCountries();

  }, [])

  const fetchImage = async () => {

    var select = document.getElementById('countries');
    var value = select.options[select.selectedIndex].getAttribute("code");

    if (value !== 'Country') {

      setImg('https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/' + value + '.svg')

      // let response = await axios.get('http://api.countrylayer.com/v2/alpha/' + value + '?access_key=bb4167fb8a18d9b293fcf31758cc1b86')
      // console.log(response);
      // setCode('+' + response.data.callingCodes[0]);

      setCode('+91')

      setCountry(value);

    }

  }

  return (
    <div className='Signup w-md-50 w-75 mx-auto border border-2 p-2 shadow m-2 rounded rounded-5'>
      <div className='p-2'>
        <div className='loginimage'>
          <h3 className='text-center m-3' style={{ color: "#0AA1DD", fontFamily: "'Noto Sans', sans-serif", textDecoration: "underline red", textUnderlineOffset: "5px", fontSize: "150%" }}>SIGN UP</h3>
          <img src={LoginImg} className="mx-auto  d-block" />
        </div>

        <Form className="mx-auto m-2" onSubmit={handleSubmit(onFormSubmit)}>

          <div className='row row-cols-sm-2 row-cols-1 mb-3'>

            <div className='col'>
              <Form.Group className="mb-2">
                <input type="text" className="d-block w-100 m-1" placeholder='First Name *' {...register("FirstName", { required: true })} />

                {
                  errors.FirstName?.type === 'required' && <p className='text-danger'>* This is required field</p>
                }

              </Form.Group>
            </div>

            <div className='col'>
              <Form.Group className="mb-2">
                <input type="text" className="d-block w-100 m-1" placeholder='Last Name *' {...register("LastName", { required: true })} />

                {
                  errors.LastName?.type === 'required' && <p className='text-danger'>* This is a required field</p>
                }

              </Form.Group>
            </div>
          </div>

          <Form.Group className="mb-5">
            <input type="Email" className="d-block w-100 m-1" placeholder='Email Address *' {...register("email", { required: true })} />

            {
              errors.email?.type === 'required' && <p className='text-danger'>* This is a required field</p>
            }
          </Form.Group>

          <div className='row row-cols-sm-3 row-cols-2 mt-3'>
            <div className='col-sm-4 col-8'>
              <Form.Group className='mb-4'>
                {
                  countries.length !== 0 &&
                  <select className="form-select" id="countries" onClick={() => fetchImage()} {...register("country", { required: true })}>
                    <option>Country</option>
                    {
                      countries.map((item, idx) => <option key={idx} value={item.name} code={item.code} >
                        {item.name}
                      </option>)
                    }


                  </select>

                }

                {/* {
                  (selectedCountry.length === 0) && <Form.Text className='text-danger'>* This is a required field</Form.Text>
                } */}

              </Form.Group>
            </div>

            <div className='col-sm-2 col-4 flagdiv'>

              {
                (img.length !== 0 && img !== 'Country') &&
                <img src={img} className="flag d-block mx-auto" />
              }

            </div>

            <div className='col-sm-6 col-12'>
              <div className='row'>
                <div className='col-2'>
                  {
                    (code.length !== 0 && code !== 'Country') &&
                    <p className="text-muted" style={{ fontSize: "100%", textDecoration: "underline #777", textUnderlineOffset: "10px" }}>{code}</p>
                  }
                </div>
                <div className='col'>
                  <Form.Group className="mb-4">
                    <input type="tel" className="d-block w-100 m-1" placeholder='Mobile Number *' {...register("phone", { required: true })} />

                    {
                      errors.phone?.type === 'required' && <Form.Text className="text-danger">* This is a required Field</Form.Text>
                    }

                  </Form.Group>
                </div>
              </div>
            </div>
          </div>


          <Form.Group className="mb-4">
            <input type="password" className="d-block w-100 m-1" placeholder='Password *' {...register("password", { required: true, minLength: 5, maxLength: 11 })} />

            {
              (errors.password?.type === 'required') && <Form.Text className="text-danger">* This is a required Field</Form.Text>
            }
            {
              (errors.password?.type === 'minLength') && <Form.Text className="text-danger">* Password must be atleast 5 characters long</Form.Text>
            }
            {
              (errors.password?.type === 'maxLength') && <Form.Text className="text-danger">* Password must be atmost 11 characters long</Form.Text>
            }

          </Form.Group>

          <Form.Group className="mb-4">
            <input type="password" className="d-block w-100 m-1" placeholder='Confirm Password *' {...register("cpassword", { required: true })} />

            {
              errors.cpassword?.type === 'required' && <Form.Text className="text-danger">* This is a required Field</Form.Text>
            }
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Address</Form.Label>

            <div className=' mb-4'>
              <input type="text" className="d-block w-100" placeholder='Address Line 1 *'  {...register("Address", { required: true })} />
              {
                errors.Address?.type === 'required' && <Form.Text className="text-danger">* This is a required Field</Form.Text>
              }
            </div>
            <div>
              <input type="text" className="d-block w-100 mb-4" placeholder='Address Line 2' />
            </div>

            <div className='row row-cols-sm-3 row-cols-1'>
              <div className='col mb-4'>
                <input type="text" className="d-block w-100" placeholder='State *' {...register("State", { required: true })} />
                {
                  errors.State?.type === 'required' && <Form.Text className="text-danger">* This is a required Field</Form.Text>
                }
              </div>

              <div className='col mb-4'>
                <input type="text" className="d-block w-100" placeholder='City *' {...register("City", { required: true })} />
                {
                  errors.City?.type === 'required' && <Form.Text className="text-danger">* This is a required Field</Form.Text>
                }
              </div>

              <div className='col mb-4'>
                <input type="number" className="d-block w-100" placeholder='Pincode *' {...register("Pincode", { required: true })} />
                {
                  errors.Pincode?.type === 'required' && <Form.Text className="text-danger">* This is a required Field</Form.Text>
                }
              </div>

            </div>
          </Form.Group>


          <Button variant="danger" type="submit" className='d-block mx-auto'>Sign up</Button>

          <p className='text-center mt-3'>Already a user? <a href="signin">Sign in</a> </p>
        </Form>
      </div>
    </div>
  )
}

export default Signup