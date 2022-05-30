import React, { useEffect, useState } from 'react'
import './Realme.css'
import { Button, Collapse } from 'react-bootstrap'
import axios from 'axios';
import CardGenerator from './CardGenerator';
import { useNavigate } from 'react-router-dom';
import { MdCompare, MdOutlineCompare } from 'react-icons/md'

function Realme() {

  let navigate = useNavigate();
  let [image, setImage] = useState();
  let imagesList = ['https://image01.realme.net/general/20220321/1647863726372.png', 'https://image01.realme.net/general/20210128/1611836952823.png', 'https://image01.realme.net/general/20220402/1648890548163.png', 'https://image01.realme.net/general/20210916/1631776475968.png'];

  const [open, setOpen] = useState([false, false, false, false]);

  const handleOpen = function (index) {
    open[index] = !open[index];
    setOpen([...open]);
  }

  let [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    let res = await axios.get('http://localhost:5000/realme');
    setProducts(res.data);
  }
  useState(() => {
    fetchProducts();
  })



  return (
    <div className='realme bg-dark text-light'>
      <ul className="list-group list-group-flush pt-4">
        <li className="list-group-item bg-dark text-light pb-0" >
          <h3 onMouseEnter={() => handleOpen(0)} onMouseLeave={() => handleOpen(0)}
            aria-controls="phone1"
            aria-expanded={open[0]} className="d-block text-center"
          >
            Realme GT2 Pro
          </h3>
          <Collapse in={open[0]}>
            <div id="phone1">
              <img src={imagesList[0]} className="w-25 mx-auto d-block" />
            </div>
          </Collapse>
        </li>


        <hr className='w-50 mx-auto' />

        {/*Second */}

        <li className="list-group-item bg-dark text-light pb-0" >
          <h3 onMouseEnter={() => handleOpen(1)} onMouseLeave={() => handleOpen(1)}
            aria-controls="phone2"
            aria-expanded={open[1]} className="d-block text-center" style={{}}
          >
            Realme X7 P Pro
          </h3>
          <Collapse in={open[1]}>
            <div id="phone2">
              <img src={imagesList[1]} className="w-25 mx-auto d-block" />
            </div>
          </Collapse>
        </li>

        <hr className='w-50 mx-auto' />
        {/*Third*/}
        <li className="list-group-item bg-dark text-light pb-0" >
          <h3 onMouseEnter={() => handleOpen(2)} onMouseLeave={() => handleOpen(2)}
            aria-controls="phone3"
            aria-expanded={open[2]} className="d-block text-center" style={{}}
          >
            Realme 9
          </h3>
          <Collapse in={open[2]}>
            <div id="phone3">
              <img src={imagesList[2]} className="w-25 mx-auto d-block" />
            </div>
          </Collapse>
        </li>

        <hr className='w-50 mx-auto' />
        {/**Fourth */}
        <li className="list-group-item bg-dark text-light pb-0" >
          <h3 onMouseEnter={() => handleOpen(3)} onMouseLeave={() => handleOpen(3)}
            aria-controls="phone4"
            aria-expanded={open[3]} className="d-block text-center" style={{}}
          >
            Realme Narzo 50
          </h3>
          <Collapse in={open[3]}>
            <div id="phone4">
              <img src={imagesList[3]} className="w-25 mx-auto d-block" />
            </div>
          </Collapse>
        </li>
      </ul>


      <div className='container'>
        <div className='row row-cols-sm-2 row-cols-1 mt-5'>
          <div className='col-sm-4 d-flex flex-column justify-content-center align-items-center'>

            <div className='brandnew'>
              <h3 style={{ fontFamily: "Ubuntu, sans-serif", opacity: 0.7 }}>Take a look at brand new<br /></h3>
              <h3 style={{ fontFamily: "Ubuntu, sans-serif" }} className='text-light text-center'>Realme 9 Pro+</h3>
            </div>

          </div>
          <div className='col-sm-8'>
            <div className='row'>
              <div className='col m-1 p-0'>
                <div className='card p-0 rounded-5'>
                  <div className='card-image'>
                    <img src="https://i.mediatek.com/hubfs/D920_LP/Capture.png" className='w-100 p-0' />
                  </div>
                  <div className='card-footer bg-dark' style={{ color: "#D7A86E", fontFamily: "'DM Sans', sans-serif" }}>
                    <h5 style={{ fontSize: "2vw" }}>
                      Mediatek dimensity 920 5G Processor
                    </h5>
                  </div>
                </div>
              </div>

              <div className='col m-1 mt-2 p-0 d-flex flex-column justify-content-center align-items-center'>
                <div className='card p-0 rounded-5 '>
                  <div className='card-image'>
                    <img src="https://pbs.twimg.com/media/FLtG-nvagAAjAxw.jpg" className='w-100 p-0' />
                  </div>
                  <div className='card-footer bg-dark' style={{ color: "#D7A86E", fontFamily: "'DM Sans', sans-serif" }}>
                    <h5 style={{ fontSize: "2vw" }}>
                      Charges Faster.<br /> Lasts Longer.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='row row-cols-1 row-cols-sm-2 mt-3 row2'>
          <div className='col-md-7 col-4'>
            <div className='row row-cols-1 row-cols-md-2'>
              <div className='col-md-5 p-0'>
                <div className='card p-0 rounded-5 '>
                  <div className='card-image'>
                    <img src="https://msmobile.com.vn/images/products/2020/10/27/original/iqoo-neo-3-5g-sac-768x473_1603737502.jpg.jpg" className='w-100 p-0' />
                  </div>
                  <div className='card-footer bg-dark' style={{ color: "#D7A86E", fontFamily: "'DM Sans', sans-serif" }}>
                    <h5>
                      Go all day with bigger battery
                    </h5>
                  </div>
                </div>
              </div>


              <div className='col-md-6 ms-auto p-0 d-flex flex-column justify-content-center align-items-cente'>
                <div className='card p-0 rounded-5 '>
                  <div className='card-image'>
                    <img src="https://pbs.twimg.com/media/EXeoJsyVcAAHRN-.jpg:large" className='w-100 p-0' />
                  </div>
                  <div className='card-footer bg-dark' style={{ color: "#D7A86E", fontFamily: "'DM Sans', sans-serif" }}>
                    <h5>
                      Buttery smooth
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className='row m-4'>
              <div className='col-12 p-0 d-flex flex-column justify-content-center align-items-center'>
                <h3>The camera loves you!<br />Now you'll love it back</h3>
              </div>
            </div>

            <div className='row'>
              <div className='col p-0'>
                <div className='card p-0'>
                  <div className='row'>
                    <div className='col-6'>
                      <img src="https://www.apple.com/v/iphone-13-pro/f/images/overview/camera/smart-hdr/smart_hdr_4_1__dqqe9y1hus6e_large_2x.jpg" className='w-100 d-inline ms-auto' />
                    </div>
                    <div className='col-6 d-flex flex-column justify-content-center align-items-center'>
                      <h3>Shoot it.<br />
                        Cut it.<br />
                        Ship it.</h3>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-6 d-flex flex-column justify-content-center align-items-center'>
                      <h3 className='w-75'>Night mode now on every camera</h3>
                    </div>
                    <div className='col-6'>
                      <img src="https://www.apple.com/v/iphone-13-pro/f/images/overview/camera/low-light/night_mode_photography_5__y26qxwgyqyq2_large.jpg" className='w-100 d-inline' />
                    </div>
                  </div>

                  <div className='row'>

                    <div className='col-6'>
                      <img src="https://www.apple.com/v/iphone-13-pro/f/images/overview/camera/smart-hdr/deep_fusion_02__dvatjeoh8w2u_large_2x.jpg" className='w-100 ms-auto d-inline' />
                    </div>
                    <div className='col-6 d-flex flex-column justify-content-center align-items-center'>
                      <h3 className='w-75'>More Zoom?<br />Boom!</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className='col-md-5 col-6'>
            <div className='row row-cols-1 d-flex align-items-center justify-content-center'>
              <div className='col-9 p-0'>
                <div className='card p-0 rounded-5 '>
                  <div className='card-image'>
                    <img src="https://images.samsung.com/is/image/samsung/assets/ae/p6_gro2/p6_initial_gstatic/galaxy-5g/5g-products/mo_31_5g_ultra_big_banner.jpg?$FB_TYPE_B_JPG$g" className='w-100 p-0' />
                  </div>
                  <div className='card-footer bg-dark' style={{ color: "#D7A86E", fontFamily: "'DM Sans', sans-serif" }}>
                    <h5>
                      Upload<br />Reload<br />Superfast download
                    </h5>
                  </div>
                </div>
              </div>

              <div className='col-9 m-2 p-0'>
                <div className='card p-0 rounded-5 '>
                  <div className='card-image'>
                    <img src="https://www.dignited.com/wp-content/uploads/2021/09/IMG_20210926_035957-846x1024.jpg" className='w-100 p-0 ui' />
                  </div>
                  <div className='card-footer bg-dark' style={{ color: "#D7A86E", fontFamily: "'DM Sans', sans-serif" }}>
                    <h5>
                      Based on Android 12
                    </h5>
                  </div>
                </div>
              </div>

              <div className='col-9 m-2 p-0'>
                <div className='card p-0 rounded-5 selfiecard'>
                  <div className='card-image w-100'>
                    <img src="https://www.apple.com/v/iphone-13-pro/f/images/overview/camera/truedepth/true_depth__eif6wpphjbki_large_2x.png" className='p-0 selfie' />
                  </div>
                  <div className='card-footer bg-dark' style={{ color: "#D7A86E", fontFamily: "'DM Sans', sans-serif" }}>
                    <h5>
                      Selfies became better
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container pick mt-4' id="Allmodels">
        <h3 className='d-inline' style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: "bold" }}>All models.<span className="d-inline text-muted" style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: "" }}> Take your pick.</span></h3>
      </div>

      {/**Phone Cards */}
      {products.length != 0 &&
        <div className='container products' >
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

      <div className='container'>
        <div className='row row-cols-2'>
          <div className='col'>
            <div className='card p-0 border-0'>
              <img src='https://images.unsplash.com/photo-1636390839646-0f72c92554c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' className='w-100 rounded-5' />
            </div>
          </div>
          <div className='col d-flex flex-column justify-content-center align-items-center'>
            <h3 className='text-center' style={{ fontFamily: "Ubuntu, sans-serif", fontSize: "2.5vw" }}>Find your perfect match.</h3>
            <MdCompare className="d-block mx-auto compareicon" />
            {/* <Link to="compare" style={{ textDecoration: "none" }} >
              <span className="text-center d-block">
                Compare
              </span>
            </Link> */}
            <Button className="d-block mx-auto text-primary cmptxt" style={{ background: "none", border: "none", textDecoration: "underline" }} onClick={() => {
              navigate("/compare");
            }}>Compare</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Realme