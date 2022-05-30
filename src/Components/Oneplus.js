import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { useState, useEffect } from 'react';
import CardGenerator from './CardGenerator';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import buyProduct from '../Slices/buySlice';

function Oneplus() {
  const [index, setIndex] = useState(0);

  let navigate = useNavigate();
  let dispatch = useDispatch();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  let i = [];
  let [inners, setInners] = useState([]);
  useEffect(() => {
    //console.log(dimensions)
    //console.log(inners.length,inners)
    if (inners.length == 0) {
      let m = document.querySelectorAll(".carousel-caption");
      let arr = Array.from(m)
      //console.log(arr)
      arr.map(item => i.push(item.innerHTML));
      setInners(i)
    }
    if (window.innerWidth < 450) {
      let x = document.querySelectorAll(".carousel-caption p");
      let a = Array.from(x);
      a.map(item => item.remove())
      let y = document.querySelectorAll(".carousel-caption h3,.carousel-caption button");
      let b = Array.from(y);
      b.map(item => item.setAttribute("style", "font-size:70%;"))
    }
    else {
      //console.log(inners)
      let n = document.querySelectorAll(".carousel-caption");
      let arr = Array.from(n);
      arr.map((item, index) => {
        //console.log(inners[index])
        item.innerHTML = `${inners[index]}`;
      })

    }
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)
    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  }, [dimensions])

  useEffect(() => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth
    })

  }, [])




  let [oneplusProducts, setOnePlusProducts] = useState([]);

  useEffect(() => {

    fetchProducts()

  }, [])

  const fetchProducts = async () => {
    let res = await axios.get('http://localhost:5000/oneplus')
    setOnePlusProducts(res.data)
    //console.log(oneplusProducts)
  }

  // const CarouselBuy = () => {

  //   console.log("executed")
  //   let obj = oneplusProducts.find(item => item.id == 2);

  //   console.log(obj)
  //   let actionObj = buyProduct(obj);
  //   dispatch(actionObj);

  //   let path = obj.model.split(' ').join('-');
  //   navigate('/buy/' + path);

  // }

  return (
    <div className='oneplus'>
      <div className='carouseldis' >
        <Carousel activeIndex={index} onSelect={handleSelect} >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/kv/9RT-m.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 style={{ fontFamily: "Ubuntu, sans-serif" }}>Oneplus 9RT 5G</h3>
              <p>Save extra 3000/- with exchange bonus</p>
              <p>From 38,999/-</p>
              <button className='btn btn-light text-dark'>Buy now</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/kv/9-m.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 style={{ fontFamily: "Ubuntu, sans-serif" }}>Oneplus 9 5G</h3>
              <p>Save extra 3000/- with exchange bonus</p>
              <p>From 36,999/-</p>
              <button className='btn btn-light text-dark'>Buy now</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/kv/9pro-m.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className='text-dark' style={{ fontFamily: "Ubuntu, sans-serif" }}>Oneplus 9 Pro 5G</h3>
              <p className='text-dark'>
                Save extra 3000/- with exchange bonus
              </p>
              <p className='text-dark'>From 49,999/-</p>
              <button className='btn btn-dark text-light'>Buy now</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/kv/Nord-CE-2-m.jpg"
              alt="Fourth slide"
            />

            <Carousel.Caption>
              <h3 className='text-dark' style={{ fontFamily: "Ubuntu, sans-serif" }}>Oneplus Nord CE2 5G</h3>
              <p className='text-dark'>
                Save extra 3000/- with exchange bonus
              </p>
              <p className='text-dark'>From 21,999/-</p>
              <button className='btn btn-dark text-light'>Buy now</button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className='container mt-4' id="Allmodels">
        <h3 className='d-inline' style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: "bold" }}>All models.<span className="d-inline text-muted" style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: "" }}> Take your pick.</span></h3>
      </div>
      {oneplusProducts.length != 0 &&
        <div className='container' >
          <div className='row row-cols-xl-3 row-cols-sm-2 row-cols-1'>
            <div className='col col-md-4 mt-sm-4 mb-3'>
              <CardGenerator item={oneplusProducts[0]} />
            </div>
            <div className='col col-md-4  mt-4 mb-3'>
              <CardGenerator item={oneplusProducts[1]} />
            </div>
            <div className='col col-md-4  mt-4 mb-3' >
              <CardGenerator item={oneplusProducts[2]} />
            </div>
            <div className='col col-md-4 mt-4 mb-3'>
              <CardGenerator item={oneplusProducts[3]} />
            </div>
            <div className='col col-md-4 mt-4 mb-3'>
              <CardGenerator item={oneplusProducts[4]} />
            </div>
            <div className='col col-md-4  mt-4 mb-3'>
              <CardGenerator item={oneplusProducts[5]} />
            </div>
            <div className='col col-md-4 mt-4 mb-3'>
              <CardGenerator item={oneplusProducts[6]} />
            </div>
            <div className='col col-md-4  mt-4 mb-3'>
              <CardGenerator item={oneplusProducts[7]} />
            </div>

          </div>
        </div>
      }

      <div className='card p-0 mt-2 comparingcard '>
        <div className='card-image'>
          <img src="https://image01.oneplus.net/ebp/202201/10/1-M00-33-4D-rB8LB2HcAfSALaJIAAKPk2oRvXk690.jpg" className='w-100' />
        </div>
        <div className='card-img-overlay w-auto' >
          <h3 style={{ fontFamily: "Ubuntu, sans-serif" }}>Which Oneplus is right for you?</h3>
          <img src="https://www.apple.com/v/iphone/home/be/images/chapternav/iphone_compare_light__f4jj7brpbvm2_large.svg" className='d-block p-0' />
          <Button className=" p-0 text-primary cmptxt" variant="none" style={{ background: "none", border: "none", textDecoration: "underline" }} onClick={() => {
            navigate("/compare");
          }}>Compare</Button>
        </div>
      </div>

    </div>
  )
}

export default Oneplus