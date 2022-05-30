import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ProfileImage from '../../../Images/Profile.jpg'
import './UserProfile.css'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { Button, Modal, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { updatePassword } from '../../../Slices/userSlice'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MdError } from 'react-icons/md'


function UserProfile() {

    let activeUser = useSelector(state => state.user)
    let dispatch = useDispatch();

    let [modal, setModal] = useState(false);
    let [show, setShow] = useState(false);
    let [mismatch, setMismatch] = useState(false);
    let { register, handleSubmit, formState: { errors } } = useForm();

    const changePassword = () => {
        setModal(!modal);
    }

    const onFormSubmit = (obj) => {
        if (obj.oldPassword != activeUser.password) {

            if (!show) {
                setShow(true);
            }
            setMismatch(false);

        }
        else {
            if (obj.NewPassword === obj.cPassword) {

                let actionObj = updatePassword(obj.NewPassword);
                dispatch(actionObj);

                setShow(false);
                setMismatch(false);
                setModal(false);

            }
            else {

                setShow(false);
                setMismatch(true);
            }
        }
    }
    return (
        <div className='userProfile'>
            <div className="row">
                <div className="col mt-4">
                    <h3 className='text-center display-5'>Welcome !</h3>
                    <img src={ProfileImage} className="d-block mx-auto w-50 profileicon" />
                </div>
            </div>

            <div>
                <div className='card shadow border border-1 mb-4 rounded p-0'>
                    <div className='card-body'>
                        Account info
                    </div>
                </div>
                <div className='card shadow border border-1 mb-4 rounded p-0'>
                    <div className='card-body'>
                        <h6 className='text-muted mb-4'>Basic info</h6>
                        <div className='mb-3'>
                            Name:<br /><span style={{ fontFamily: "Ubuntu, sans-serif" }}>{activeUser.FirstName} {activeUser.LastName}</span>
                        </div>

                        <div className='mb-3'>
                            Country/Region:<br /><span style={{ fontFamily: "Ubuntu, sans-serif" }}>{activeUser.country}</span>
                        </div>
                        <hr className='text-muted' />

                        <h6 className='text-muted mb-4'>Contact info</h6>
                        <div className='mb-3'>
                            Email:<br /><span style={{ fontFamily: "Ubuntu, sans-serif" }}>{activeUser.email}</span>
                        </div>

                        <div className='mb-3'>
                            Phone:<br /><span style={{ fontFamily: "Ubuntu, sans-serif" }}>{activeUser.phone}</span>
                        </div>

                        <hr className='text-muted' />
                        <h6 className='text-muted mb-4'>Security & Privacy</h6>

                        <div className='mb-3 cp'>
                            Change Password <Button variant="none"><BsFillArrowRightCircleFill onClick={changePassword} /></Button>

                            <Modal show={modal} onHide={changePassword} centered className='border-0 rounded-2 '>
                                <Modal.Title className='border border-light p-2 bg-light text-dark'>
                                    Change Password
                                </Modal.Title>

                                <Modal.Body className='bg-light text-dark'>
                                    <form className='p-2' onSubmit={handleSubmit(onFormSubmit)}>
                                        <div className='mb-3' id='old'>
                                            <input type="password" placeholder='Old Password'  {...register("oldPassword", { required: true })} />

                                            {
                                                (errors.oldPassword?.type === 'required') && <Form.Text className='text-danger'>* This is a required field</Form.Text>
                                            }
                                            {
                                                show && <Form.Text className='text-danger'>
                                                    <MdError color="danger" />Wrong Password
                                                </Form.Text>
                                            }

                                        </div>

                                        <div className='mb-3'>
                                            <input type="password" placeholder='New Password' {...register("NewPassword", { required: true, minLength: 5, maxLength: 11 })} />

                                            {
                                                (errors.NewPassword?.type === 'required') && <Form.Text className="text-danger">* This is a required Field</Form.Text>
                                            }
                                            {
                                                (errors.NewPassword?.type === 'minLength') && <Form.Text className="text-danger">* Password must be atleast 5 characters long</Form.Text>
                                            }
                                            {
                                                (errors.NewPassword?.type === 'maxLength') && <Form.Text className="text-danger">* Password must be atmost 11 characters long</Form.Text>
                                            }
                                        </div>

                                        <div className='mb-3'>

                                            <input type="password" placeholder='Confirm Password' {...register("cPassword", { required: true })} />

                                            {
                                                (errors.cPassword?.type === 'required') && <Form.Text className="text-danger">* This is a required Field</Form.Text>
                                            }

                                        </div>
                                        {
                                            mismatch && <Form.Text className='text-danger'>
                                                <MdError color="danger" /> Passwords must match
                                            </Form.Text>
                                        }

                                        <Button type="submit" className='d-block ms-auto'>Change</Button>
                                    </form>

                                </Modal.Body>

                            </Modal>
                        </div>
                        <hr className='text-muted' />
                        <h6 className='text-muted mb-4'>Shipping Address</h6>
                        <div className='mb-3'>
                            {activeUser.Address},
                            <br />
                            {activeUser.State},
                            <br />
                            {activeUser.City},
                            <br />
                            {activeUser.Pincode}.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile