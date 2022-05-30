import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './Buy.css'
import { FaCcVisa } from 'react-icons/fa'
import { SiMastercard, SiAmericanexpress, SiPaytm, SiGooglepay, SiPaypal } from 'react-icons/si'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Bluedart from '../../Images/bluedart.svg'
import { Collapse, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import { useState } from 'react'
import Scrolltotop from '../Scrolltotop'
import { useDispatch } from 'react-redux'
import { addProduct, updateProduct } from '../../Slices/bagSlice'
import { Addfeatures } from '../../Slices/buySlice'
import { useNavigate } from 'react-router-dom'
import { updateBag, updateProductQuantity } from '../../Slices/userSlice'
import { updateQuantity } from '../../Slices/bagSlice'


function Buy() {

    let bag = useSelector(state => state.bag);
    let product = useSelector(state => state.buy);
    let status = useSelector(state => state.status);
    let user = useSelector(state => state.user);

    let dispatch = useDispatch();
    let navigate = useNavigate();

    let today = new Date();
    let plusweek = today.setDate(today.getDate() + 7);
    let deliveryDate = new Date(plusweek);
    let date = String(deliveryDate.getDate()).padStart(2, '0');
    let month = String(deliveryDate.getMonth() + 1).padStart(2, '0');
    let yr = String(deliveryDate.getFullYear());
    let dd = date + '/' + month + '/' + yr;

    const [Featuresopen, setFeaturesOpen] = useState(false);

    const AddtoBag = () => {


        let alreadyExist = bag.find(obj => {
            if ((obj.model === product.model) && (obj.color === product.color))
                return obj;
        });


        if (alreadyExist == undefined) {

            let productModified = {};

            productModified["RAM"] = 8;
            productModified["ROM"] = storage == 1 ? 128 : 256;
            productModified["color"] = color == 1 ? "Phantom Black" : "Green";
            productModified["quantity"] = 1;


            let actionObj1 = Addfeatures(productModified);
            dispatch(actionObj1);

            Object.assign(productModified, product, productModified);

            let actionObj = addProduct(productModified);
            dispatch(actionObj);

            if (status[0]) {

                let actionObj2 = updateBag(productModified);
                dispatch(actionObj2);
            }
        }
        else {

            let object = [{ ...alreadyExist }]
            object[0].quantity += 1;
            let actionObj = updateQuantity(object[0]);
            dispatch(actionObj);

            if (status[0]) {
                let actionObj2 = updateProductQuantity(object[0]);
                dispatch(actionObj2);
            }


        }

        navigate("/bag");

    }

    const [storage, setStorage] = useState(0);
    const [color, setColor] = useState(0);

    const changeBorder = function (event, labels) {

        let id = event.target.id;
        let labelsArray = Array.from(labels);
        labelsArray.forEach(function (item) {
            item.style.border = '1px solid #777';
            if (item.htmlFor === id)
                item.style.border = '2px solid #4D648D'
        })

    }

    function handleStorageChange(event) {


        let val = event.target.getAttribute("value");

        setStorage(val);

        let labels = document.querySelectorAll(".buyProduct .storage label");
        changeBorder(event, labels);

    }
    function handleColorChange(event) {

        let val = event.target.getAttribute("value");
        setColor(val);

        let labels = document.querySelectorAll(".buyProduct .color label");
        changeBorder(event, labels);
    }



    return (
        <div className='buyProduct'>
            <Scrolltotop />
            <div className='row row-cols-md-2 row-cols-1 mb-5'>

                <div className='col-md-6 col d-flex justify-content-center align-items-center imagecol'>
                    {
                        <img src={product.image} style={{ height: "30vw" }} />
                    }
                </div>
                <div className='col-md-6 col'>
                    <div className='card'>
                        <div className='card-body'>

                            <h3 style={{ fontFamily: "Oxygen,sans-serif", color: "#4D648D", fontWeight: "bold" }}>{product.model}</h3>
                            <p>{product.price}</p>

                            <hr className='text-muted' />
                            <h6 className='text-muted' >Storage</h6>
                            <div>
                                <ToggleButtonGroup type="radio" name="storage" value={storage} onClick={(event) => handleStorageChange(event)} className="w-100 storage">

                                    <ToggleButton variant='none' id="tbg-btn-1" value={1} className='btn rounded-2 pb-3 pt-3 m-2' style={{ width: "80%", border: "2px solid blue" }}>
                                        128GB | 8GB
                                    </ToggleButton>

                                    <ToggleButton variant='none' id="tbg-btn-2" value={2} className='btn rounded-2 pb-3 pt-3 m-2' style={{ width: "80%" }}>
                                        256GB | 8GB
                                    </ToggleButton>

                                </ToggleButtonGroup>
                            </div>

                            <hr className='text-muted' />
                            <h6 className='text-muted'>Color</h6>
                            <div className='d-flex flex-direction-column justify-content-around'>
                                <ToggleButtonGroup type="radio" name="color" value={color} onClick={(event) => handleColorChange(event)} className="w-100 color">

                                    <ToggleButton variant='none' id="tbg-cbtn-1" value={1} className='btn rounded-2 pb-3 pt-3 m-2' style={{ width: "80%", border: "2px solid blue" }}>
                                        <span className='m-2 d-sm-inline d-block'>
                                            <img src="https://images.samsung.com/in/smartphones/galaxy-s22/buy/S22_S22plus_ColorChip_PhantomBlack_MO.png" style={{ width: "15%" }} />
                                        </span>
                                        <span>
                                            Phantom Black
                                        </span>
                                    </ToggleButton>

                                    <ToggleButton variant='none' id="tbg-cbtn-2" value={2} className='btn rounded-2 pb-3 pt-3 m-2' style={{ width: "80%" }}>
                                        <span className='m-2 d-sm-inline d-block'>
                                            <img src="https://images.samsung.com/in/smartphones/galaxy-s22/buy/S22_S22plus_ColorChip_Green_MO.png" style={{ width: "15%" }} />
                                        </span>
                                        <span>
                                            Green
                                        </span>
                                    </ToggleButton>

                                </ToggleButtonGroup>
                            </div>

                            <hr className='text-muted' />

                            <h6 className='text-muted'>Delivery </h6>
                            <div className='border border-1 rounded-2 w-100 p-4'>
                                <h6>Free Delivery : By {dd} </h6>
                                <div className='mb-0'>
                                    <p className='d-inline'>Fullfillement by : Bluedart</p>
                                    <img src={Bluedart} className="w-25 d-block ms-auto" />
                                </div>

                                <p>Cash on Delivery available</p>
                            </div>

                            <hr className='text-muted' />

                            <h6 className='text-muted'>Payments</h6>
                            <div className='row '>
                                <div className='col mb-2'>
                                    <FaCcVisa size={50} className="d-block mx-auto" />
                                </div>
                                <div className='col mb-2'>
                                    <SiMastercard size={50} className="d-block mx-auto" />
                                </div>
                                <div className='col mb-2'>
                                    <SiAmericanexpress size={50} className="d-block mx-auto" />
                                </div>
                                <div className='col mb-2'>
                                    <SiPaytm size={50} className="d-block mx-auto" />
                                </div>
                                <div className='col mb-2'>
                                    <SiGooglepay size={50} className="d-block mx-auto" />
                                </div>
                                <div className='col mb-2'>
                                    <SiPaypal size={50} className="d-block mx-auto" />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Button variant="dark rounded-2" className="ps-3 pe-3 d-block mx-auto mt-3 mb-3" onClick={() => AddtoBag()}>
                Add to Cart
            </Button>

            <Button
                onClick={() => setFeaturesOpen(!Featuresopen)}
                aria-controls="example-collapse-text"
                aria-expanded={Featuresopen}
                variant="none"
                style={{ color: "black", fontFamily: "Oxygen,sans-serif", fontWeight: "bold", border: "none" }}
                className="d-block mx-auto mt-5 mb-3 keyfeatures"
            >
                Key Features <span className="ms-auto"><MdKeyboardArrowDown /></span>
            </Button>

            <hr className='w-50 mx-auto' />
            <Collapse in={Featuresopen} className="mb-3 w-75 mx-auto">
                <div id="example-collapse-text">
                    <div className="row row-cols-md-2 row-cols-2 g-5 mt-4">
                        <div className='col-md-6 col-12'>
                            <div className='mb-md-5' >
                                <h6 style={{ fontFamily: "'oxygen',sans-serif", fontWeight: "bold" }}>Compact Form Factor</h6>
                                <p>
                                    A full-sized smartphone that folds to fit small-sized pockets. This visually awesome and 10.72cm (4.2") folded compact design delivers the ultimate portability for every move you make.
                                </p>
                            </div>

                            <div className='mb-md-5'>
                                <h6 style={{ fontFamily: "'oxygen',sans-serif", fontWeight: "bold" }}>Make nights epic with Nightography</h6>
                                <p>
                                    It’s our brightest innovation yet. The sensor pulls in more light, the Super Clear Glass dials down lens flare, and fast-acting AI delivers near-instant intelligent processing.
                                </p>
                            </div>

                            <div className='mb-md-5'>
                                <h6 style={{ fontFamily: "'oxygen',sans-serif", fontWeight: "bold" }}>Smooth Video gives you all the smooth moves</h6>
                                <p>
                                    The OIS correction angle has been improved by 58% and works with faster motion sampling to stabilize your shots. Meanwhile Super HDR adjusts the color frame-by-frame to keep every frame looking gorgeous.
                                </p>
                            </div>
                        </div>

                        <div className='col-md-6 col-12 mt-md-5 mt-0'>
                            <div className='mb-md-5'>
                                <h6 style={{ fontFamily: "'oxygen',sans-serif", fontWeight: "bold" }}>Google Duo Live Sharing for virtual watch parties</h6>
                                <p>
                                    Bring the crew together with Google Duo*. There, you can watch movies together** — streaming high-quality video just like IRL***.
                                </p>
                            </div>

                            <div className='mb-md-5'>
                                <h6 style={{ fontFamily: "'oxygen',sans-serif", fontWeight: "bold" }}>Fast charge that outlasts the day</h6>
                                <p>
                                    The battery intelligently adapts to how you use your phone, so it lasts beyond 24 hours.****
                                </p>
                            </div>

                            <div className='mb-md-5'>
                                <h6 style={{ fontFamily: "'oxygen',sans-serif", fontWeight: "bold" }}>VisionBooster outshines the sun</h6>
                                <p>
                                    VisionBooster outshines the sun
                                    Sunlight. The stunning Dynamic AMOLED 2X display is crafted specifically for high outdoor visibility, keeping the view clear in bright daylight.**
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Collapse>

        </div>
    )
}

export default Buy