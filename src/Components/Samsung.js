import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import CardGenerator from './CardGenerator';
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Samsung() {


  let navigate = useNavigate();

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  let defaultImage = ["https://images.samsung.com/is/image/samsung/assets/in/11316-S22-Ultra-1TB_Banners_1440x640_updated_disclaimer.jpg?imwidth=1536", "https://images.samsung.com/is/image/samsung/assets/in/pcd/smartphones/04_galaxy_note_pc.jpg?$1440_640_JPG$"];

  useEffect(() => {


    let image = document.querySelectorAll(".samsung .card-image img")
    //console.log(image)
    if (window.innerWidth < 401) {
      image[0].setAttribute("src", "https://images.samsung.com/is/image/samsung/assets/in/11316-S22-Ultra-1TB_Banners_720x1080_Updated_disclaimer.jpg?imwidth=720")
      image[1].setAttribute("src", "https://images.samsung.com/is/image/samsung/assets/in/pcd/smartphones/04_galaxy_note_mo.jpg?$720_1080_JPG$")
    }
    else {
      image[0].setAttribute("src", defaultImage[0]);
      image[1].setAttribute("src", defaultImage[1])
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


  let [samsungProducts, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    let res = await axios.get('http://localhost:5000/samsung')
    setProducts(res.data)
  }

  return (
    <div className='samsung'>
      <div className='card p-0' >
        <div className='card-image'>
          <img src="https://images.samsung.com/is/image/samsung/assets/in/11316-S22-Ultra-1TB_Banners_1440x640_updated_disclaimer.jpg?imwidth=1536" className="w-100" />
        </div>
        <div className='card-img-overlay' >
          <h3 style={{ fontFamily: "Ubuntu, sans-serif" }} className="w-100">Galaxy S22 Ultra</h3>
          <p className='text-dark w-100' >Available exculsive on Samsung.com<br />Get Watch4 at 2999/-</p>
          <div>
            <a className='text-dark w-100' style={{ textUnderlineOffset: "5px", fontFamily: "Ubuntu, sans-serif" }}>Learn more</a>
            <button className="text-light btn btn-dark ms-4 rounded" disabled>Prebook now</button>
          </div>
        </div>
      </div>


      <div className='card p-0 mt-3' >
        <div className='card-image'>
          <img src="https://images.samsung.com/is/image/samsung/assets/in/pcd/smartphones/04_galaxy_note_pc.jpg?$1440_640_JPG$" className="w-100" />
        </div>
        <div className='card-img-overlay second' >
          <h3 style={{ fontFamily: "Ubuntu, sans-serif" }} className="w-100 text-light">Galaxy Note</h3>
          <p className='w-100 text-light' >The Powerphone that empowers your work and play</p>
          <div>
            <a className='text-light w-100' style={{ textUnderlineOffset: "5px", fontFamily: "Ubuntu, sans-serif" }}>Learn more</a>
            <button className="text-dark btn btn-light ms-4 rounded" disabled>Prebook now</button>
          </div>
        </div>
      </div>

      <div className='container mt-4' id="Allmodels">
        <h3 className='d-inline' style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: "bold" }}>All models.<span className="d-inline text-muted" style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: "" }}> Take your pick.</span></h3>
      </div>

      {samsungProducts.length != 0 &&
        <div className='container' >
          <div className='row row-cols-xl-3 row-cols-sm-2 row-cols-1'>
            <div className='col col-md-4 mt-sm-4 mb-3'>
              <CardGenerator item={samsungProducts[0]} />
            </div>
            <div className='col col-md-4  mt-4 mb-3'>
              <CardGenerator item={samsungProducts[1]} />
            </div>
            <div className='col col-md-4  mt-4 mb-3' >
              <CardGenerator item={samsungProducts[2]} />
            </div>
            <div className='col col-md-4 mt-4 mb-3'>
              <CardGenerator item={samsungProducts[3]} />
            </div>
            <div className='col col-md-4 mt-4 mb-3'>
              <CardGenerator item={samsungProducts[4]} />
            </div>
            <div className='col col-md-4  mt-4 mb-3'>
              <CardGenerator item={samsungProducts[5]} />
            </div>
            <div className='col col-md-4 mt-4 mb-3'>
              <CardGenerator item={samsungProducts[6]} />
            </div>
            <div className='col col-md-4  mt-4 mb-3'>
              <CardGenerator item={samsungProducts[7]} />
            </div>
            <div className='col col-md-4  mt-4 mb-3'>
              <CardGenerator item={samsungProducts[8]} />
            </div>
          </div>
        </div>
      }


      <div className='row bg-light mt-5 mb-1 p-0 samsungcompare' >
        <div className='col-5 p-0'>
          <div className='card p-0 rounded mx-auto w-75' >
            <img src="https://images.unsplash.com/photo-1592890288564-76628a30a657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className='rounded' />
          </div>
        </div>
        <div className='col-2 p-0 d-flex justify-content-center align-items-center' style={{ flexDirection: "column" }}>
          <h3 className='text-center' style={{ fontFamily: "Ubuntu, sans-serif", fontSize: "3vw" }}>Find your perfect match.</h3>
          <img src="https://www.apple.com/v/iphone/home/be/images/chapternav/iphone_compare_light__f4jj7brpbvm2_large.svg" className='d-block p-0 mx-auto w-25' />
          {/* <Link to="compare" style={{ textDecoration: "none" }} >
            <span className="text-center d-block">
              Compare
            </span>
          </Link> */}
          <Button className="d-block text-center text-primary cmptxt" style={{ background: "none", border: "none", textDecoration: "underline" }} onClick={() => {
            navigate("/compare");
          }}>Compare</Button>
        </div>
        <div className='col-5 p-0'>
          <div className='card p-0 rounded mx-auto w-75' >
            <img src="https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className='rounded' />
          </div>
        </div>
      </div>
      <div className='row p-0 container-fluid'>
        <div className='col-7 p-0'>
          <div className='card rounded w-100 ' >
            <img src="https://images.unsplash.com/photo-1612453949129-628f77f1d93b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className='w-100 rounded' />
          </div>
        </div>

        <div className='col-5 d-flex p-0' >
          <div className='card p-0 rounded justify-content-center align-items-center'>
            <img src="https://www.gsmmaniak.pl/wp-content/uploads/gsmmaniak/2020/07/Samsung-Galaxy-Z-Flip-5G-2-1-672x950-e1625568180296.jpg" className='w-100 rounded' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Samsung