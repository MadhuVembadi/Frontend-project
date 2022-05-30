import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Compare() {

    let { register, handleSubmit, formState: { errors } } = useForm();

    let [models, setModels] = useState([])

    let [comparingModels, setComparingModels] = useState([]);

    let inbuy = useSelector(state => state.buy);

    useEffect(() => {
        getModels()
        
    }, [])

    const getModels = async () => {
        let res = await axios.get('http://localhost:5000/Compare');
        setModels(res.data)
    }
    const onFormSubmit = function (item) {
        let arr = Object.values(item);
        
        let m = arr.map(obj => models.find(x => obj == x.id));

        m.map((x, index) => {

            if (x == undefined)
                m.splice(index, 1);
        })

        setComparingModels(m);
    }

    return (
        <div className='applecompare'>
            <h3 className='text-center display-6 mt-5' style={{ fontFamily: "Ubuntu, sans-serif" }}>Compare all models</h3>
            <form className='mt-3 container mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
                <div className='row row-cols-sm-3 row-cols-1'>


                    <div className='col'>
                        <select className="form-select" aria-label="Default select example" {...register("model1", { required: false })}>
                            <option defaultValue="none">Select model</option>
                            {
                                models.length != 0 &&
                                models.map((item, index) => <option key={index} value={item.id}>
                                    {item.model}
                                </option>)
                            }
                        </select>
                    </div>
                    <div className='col'>
                        <select className="form-select" aria-label="Default select example" {...register("model2", { required: false })}>
                            <option defaultValue="none">Select model</option>
                            {
                                models.length != 0 &&
                                models.map((item, index) => <option key={index} value={item.id}>
                                    {item.model}
                                </option>)
                            }
                        </select>
                    </div>
                    <div className='col'>
                        <select className="form-select" aria-label="Default select example" {...register("model3", { required: false })}>
                            <option defaultValue="none">Select model</option>
                            {
                                models.length != 0 &&
                                models.map((item, index) => <option key={index} value={item.id}>
                                    {item.model}
                                </option>)
                            }
                        </select>
                    </div>
                </div>
                <div className='mt-3 mb-3'>
                    <button className='btn btn-dark text-light d-block mx-auto'>Compare</button>
                </div>

            </form>

            {comparingModels.length == 0 && <h3 className='text-danger text-center m-5'>Select models to compare</h3>}
            <div className='row row-cols-md-3 row-cols-1 container mx-auto g-2' >
                {comparingModels[0] != undefined &&

                    <div className='col mx-auto' >
                        <div className='card d-flex border border-1 shadow' >
                            <div className='card-image'>
                                <img src={comparingModels[0].image} className='mx-auto w-75 d-block' />
                            </div>
                            <div className='card-header text-center' style={{ fontFamily: "Fredoka, sans-serif" }}>{comparingModels[0].model}</div>
                            <div className='features'>
                                <ul>
                                    {
                                        comparingModels[0].features.map((f, index) => <li key={index}>{f}</li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                }
                {comparingModels[1] != undefined &&

                    <div className='col mx-auto' >
                        <div className='card d-flex border border-1 shadow'>
                            <div className='card-image h-25'>
                                <img src={comparingModels[1].image} className='mx-auto w-75 d-block' />
                            </div>
                            <div className='card-header text-center' style={{ fontFamily: "Fredoka, sans-serif" }}>{comparingModels[1].model}</div>
                            <div className='features'>
                                <ul>
                                    {
                                        comparingModels[1].features.map((f, index) => <li key={index}>{f}</li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                }
                {comparingModels[2] != undefined &&

                    <div className='col mx-auto' >
                        <div className='card d-flex border border-1 shadow'>
                            <div className='card-image h-25'>
                                <img src={comparingModels[2].image} className='mx-auto w-75 d-block' />
                            </div>
                            <div className='card-header text-center' style={{ fontFamily: "Fredoka, sans-serif" }}>{comparingModels[2].model}</div>
                            <div className='features'>
                                <ul>
                                    {
                                        comparingModels[2].features.map((f, index) => <li key={index}>{f}</li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                }

            </div>

        </div>
    )
}

export default Compare