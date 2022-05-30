import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { ImSad } from 'react-icons/im'

function Specs(props) {

    // console.log(props.item);
    let [models, setModels] = useState([]);
    const fetchData = async () => {
        let res = await axios.get('http://localhost:5000/Compare');
        setModels(res.data);
    }
    useState(() => {
        fetchData();
    }, [])

    return (
        <div className='Specs container m-5'>
            {
                (models.length != 0 && props.item == -1) &&
                <h3>Sorry, no matching results  <ImSad /></h3>
            }
            {
                (models.length != 0 && props.item != -1) &&
                <div className='row row-cols-md-3 row-cols-1'>
                    <div className='col-md-5 d-flex flex-column justify-content-center align-items-center '>
                        <h3 stye={{ fontFamily: "Ubuntu, sans-serif" }}>{models[props.item].model}</h3>
                        <img src={models[props.item].image} className="w-50" />
                    </div>
                    <div className='col-md-7 '>
                        <h3 style={{ textDecoration: "underline" }}>Features</h3>
                        <ul>
                            {
                                models[props.item].features.map((item, index) => <li key={index}>{item}</li>)
                            }
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}

export default Specs