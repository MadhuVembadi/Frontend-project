import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { buyPhone } from '../Slices/buySlice';
import './CardGenerator.css';

function CardGenerator(props) {

    let dispatch = useDispatch();
    let navigate = useNavigate();

    const Buy = () => {

        let actionObj = buyPhone(props.item);
        dispatch(actionObj);

        let path = props.item.model.split(' ').join('-');
        navigate('/buy/' + path);

    }

    return (
        <div className='card shadow rounded cardGenerator' style={{ height: "100%" }}>
            <div className='card-img h-75'>
                <img src={props.item.image} className="w-75 mx-auto d-block" />
            </div>
            <div className='card-body text-center'>
                <h3 className='card-title' style={{ fontFamily: "Ubuntu, sans-serif" }}>{props.item.model}</h3>
                <p className='card-subtitle'>{props.item.tagline}</p>
                <p className='text-muted'>{props.item.price}</p>
            </div>
            <div className='w-50 mx-auto'>
                <button className='btn rounded-5 w-100' onClick={() => Buy()} style={{ borderRadius: "20px", background: "#4D648D", color: "white" }}>Buy now</button>
            </div>
        </div>
    )
}

export default CardGenerator;