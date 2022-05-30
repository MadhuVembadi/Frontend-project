import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import CardGenerator from './CardGenerator';
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useRef } from 'react'

function Apple() {

  let [products, setProducts] = useState([]);

  let navigate = useNavigate();

  let myRef = useRef(null);

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    let res = await axios.get('http://localhost:5000/apple');
    setProducts(res.data)
  }


  const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <div className='apple' >

      <div className='card bg-light text-center container'>
        <div className='card-title display-6' style={{ textDecoration: "underline 2px #A2D5AB", textUnderlineOffset: "5px" }}><b>iPhone 13 Pro</b></div>
        <div className='display-6 pro' style={{ fontFamily: "Fredoka, sans-serif" }}><b>Oh. So. Pro</b></div>
        <div className='m-2'>
          <p>From 119000.00* before trade-in</p>
          <button className="btn btn-primary" id="shop" onClick={executeScroll}>Shop</button>
        </div>
        <div className='card-img'>
          <img src="https://www.apple.com/v/iphone/home/be/images/overview/hero/iphone_13_pro_hero__gqclakbze4a6_medium_2x.png" className='w-50' />
        </div>
      </div>

      <div className='card bg-light text-center container'>
        <div className='card-title display-6' style={{ textDecoration: "underline 2px #05595B", textUnderlineOffset: "5px" }} ><b>iPhone 13</b></div>
        <div className='display-6 simple' style={{ fontFamily: "Fredoka, sans-serif" }} ><b>Your new Superpower</b></div>
        <div className='m-2'>
          <p>From ₹69900.00* before trade‑in</p>
          <button className="btn btn-primary" id="#shop" onClick={executeScroll}>Shop</button>
        </div>
        <div className='card-img'>
          <img src="https://www.apple.com/v/iphone/home/be/images/overview/hero/iphone_13_hero__c7g09yt0mjcm_medium_2x.png" className='w-50' />
        </div>
      </div>

      <div className='card bg-light text-center container'>
        <div className='card-img' >
          <img src="https://www.apple.com/v/iphone/home/be/images/overview/hero/iphone_se_hero__gd586pazxqqa_medium_2x.jpg" className='w-50' style={{ position: "relative", left: "20%" }} />
        </div>
        <div className='m-2 card-img-overlay iphonese' >
          <div className='card-title display-6' style={{ textDecoration: "underline 2px #56BBF1", textUnderlineOffset: "5px" }}  ><b>iPhone SE</b></div>
          <div className='display-6 se' style={{ fontFamily: "Fredoka, sans-serif" }} ><b>Love the power.<br />Love the price.</b></div>
          <p className='setag'>From ₹43900.00* before trade‑in</p>
          <button className="btn btn-primary" id="#shop" onClick={executeScroll}>Shop</button>
        </div>
      </div>
      <div className='container mt-4' id="Allmodels" ref={myRef}>
        <h3 className='d-inline' style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: "bold" }}>
          All models.    <span className="d-inline text-muted" style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: "" }}> Take your pick.</span>
        </h3>
      </div>
      {products.length != 0 &&
        <div className='container' >
          <div className='row row-cols-xl-3 row-cols-sm-2 row-cols-1'>
            <div className='col col-md-4 mt-sm-4 mb-3'>
              <CardGenerator item={products[0]} />
            </div>
            <div className='col col-md-4  mt-4 mb-3'>
              <CardGenerator item={products[1]} />
            </div>
            <div className='col col-md-4  mt-4 mb-3' >
              <CardGenerator item={products[2]} />
            </div>
            <div className='col col-md-4 mt-4 mb-3'>
              <CardGenerator item={products[3]} />
            </div>
            <div className='col col-md-4 mt-4 mb-3'>
              <CardGenerator item={products[4]} />
            </div>
            <div className='col col-md-4  mt-4 mb-3'>
              <CardGenerator item={products[5]} />
            </div>
            <div className='col col-md-4 mt-4 mb-3'>
              <CardGenerator item={products[6]} />
            </div>
            <div className='col col-md-4  mt-4 mb-3'>
              <CardGenerator item={products[7]} />
            </div>
            <div className='col col-md-4 mt-4 mb-3'>
              <CardGenerator item={products[8]} />
            </div>
          </div>
        </div>
      }
      <h3 className='display-6 text-center m-5'><b>What makes an iPhone an iPhone?</b></h3>
      <div className='text-center card container '>
        <div className='card-image '>
          <img src="https://www.apple.com/in/iphone/home/images/overview/why-iphone/ios15_preview__7cyc4jhx1zma_medium_2x.jpg" className='w-100' />
        </div>
        <div className='card-img-overlay ios'>
          <h3 className='mb-0' style={{ fontFamily: "Ubuntu, sans-serif" }}> iOS 15</h3>
          <p>In touch. In the moment.</p>
        </div>
      </div>
      <div className='row row-cols-md-2 row-cols-1 container mx-auto'>
        <div className='col '>
          <div className='card'>
            <h3 className='card-title mt-5 mb-5 ms-2 me-2' style={{ fontFamily: "Ubuntu, sans-serif" }}> Switching to iPhone is super simple.</h3>
            <div className='card-image'>
              <img src="https://www.apple.com/in/iphone/home/images/overview/why-iphone/switching_to_iphone__e3oz9r418awm_large_2x.jpg" className='w-100' />
            </div>
          </div>
        </div>
        <div className='col  '>
          <div className='card '>
            <div className='card-image mt-5'>
              <img src="https://www.apple.com/v/iphone/home/be/images/overview/why-iphone/privacy__cum61s425o6e_large_2x.png" className='w-25 mx-auto d-block' />
            </div>
            <h3 className='card-title mt-5 display-6 text-center' style={{ fontFamily: "Ubuntu, sans-serif" }}>Privacy.</h3>
            <p className='card-title text-center'>What you share is should be upto you. </p>
          </div>
        </div>
      </div>

      {/*Compare cards*/}
      <div className='card container'>
        <div className='card-image'>
          <img src="https://www.apple.com/v/iphone/home/be/images/overview/retail/why_apple__ezn1ktvka6oi_medium_2x.jpg" className='w-100' />
        </div>
        <div className='card-img-overlay applecomparingcard' >
          <h3 className='text-center' style={{ fontFamily: "Ubuntu, sans-serif" }}>Which iPhone is right for you?</h3>
          <img src="https://www.apple.com/v/iphone/home/be/images/chapternav/iphone_compare_light__f4jj7brpbvm2_large.svg" className='d-block mx-auto' />

          <Button className="d-block mx-auto text-primary" style={{ background: "none", border: "none", textDecoration: "underline" }} onClick={() => {
            navigate("/compare");
          }}>Compare</Button>
        </div>
      </div>
    </div>
  )
}

export default Apple;