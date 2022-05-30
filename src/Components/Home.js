
import React from 'react'
import { useState } from 'react'
import Latest from './Latest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import Picks from './Picks';
import { FiSend } from 'react-icons/fi'

function Home() {

  let [val, setVal] = useState(0);


  // Scrolling
  let currentScrollPosition = 0;
  let scrollAmount = 320;
  useEffect(() => {

    //console.log(val);
    let sCont = document.querySelector("#displayBox");
    let hScroll = document.querySelector("#Scroll");
    //console.log(sCont, hScroll);
    const maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;
    const scrollLeft = document.querySelector("#btnscrollleft");
    const scrollRight = document.querySelector("#btnscrollright");
    currentScrollPosition += (val * scrollAmount);
    if (currentScrollPosition >= 0) {
      currentScrollPosition = 0
    }

    if (currentScrollPosition <= maxScroll) {
      currentScrollPosition = maxScroll;
    }
    sCont.style.left = currentScrollPosition + "px"
  }, [val]);


  //Buy Now

  let [latestList, setLatest] = useState(
    [
      {
        header: 'iPhone 13',
        tagline: 'Oh. So. Pro',
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-13-pro-202203?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1645052290504',
        bg: '#F5F5F5',
        txt: 'black'
      },

      {
        header: 'IPAD-AIR',
        tagline: 'Light. Bright. Full of might.',
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-ipad-air-202203?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1645636337374',
        bg: 'black',
        txt: 'white'
      },

      {
        header: 'ONEPLUS 9 PRO',
        tagline: 'Beyond Fast.',
        image: 'https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/accessory/9-pro/oneplus-9-pro-sandstone-bumper-case/Small.png',
        bg: 'black',
        txt: 'white'
      },
      {
        header: 'ONEPLUS NORD',
        tagline: 'Everything You Could Ask For.',
        image: 'https://cdn.opstatics.com/store/20170907/assets/images/events/2020/07/nord/home/phone/m-g-2_854@d6667-1a7ab2.jpg',
        bg: 'black',
        txt: 'white'
      },
      {
        header: 'IPHONE 13',
        tagline: 'Your New Superpower',
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-13-202203?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1645052290452',
        bg: 'black',
        txt: 'black'
      }
    ]
  );

  let [picks, setPicks] = useState([
    {
      phone: 'Galaxy S22 Ultra',
      image: 'https://images.samsung.com/th/smartphones/galaxy-s22/images/galaxy-s22_highlights_kv_img.jpg',
      header: 'New',
      txt: 'black',
      in: 1
    },

    {
      phone: 'OnePlus 9R',
      image: 'https://images.unsplash.com/photo-1618552304590-3f122d2d1200?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=559&q=80',
      header: 'Hot',
      txt: 'White',
      in: 2
    },
    {
      phone: 'OnePlus NORD',
      image: 'https://oasis.opstatics.com/content/dam/oasis/page/nord-series/nord-ce/kv-model-1920-2.webp',
      header: 'New',
      txt: 'black',
      in: 3
    },
    {
      phone: 'Galaxy S22',
      image: 'https://images.samsung.com/is/image/samsung/assets/in/2202/pfs/02-04-ft12-ultra-360-mo-720x540.jpg?$FB_TYPE_J_F_MO_JPG$',
      header: 'Hot',
      txt: 'black',
      in: 4
    },
    {
      phone: 'Realme',
      image: 'https://www.knowyourmobile.com/wp-content/uploads/2021/03/RealMe-8-RealMe-8-Pro-1024x866.jpg',
      header: 'Hot',
      txt: 'white',
      in: 5
    }

  ]);


  return (
    <div className='container mt-5 home'>
      <div className='w-75'>
        <h3 className='d-inline' style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: "bold", fontSize: "2.5rem" }}>Store. </h3>
        <h3 className="d-inline text-muted" style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: "", fontSize: "2.5rem" }}>
          The best way to buy the smartphone you love.
        </h3>
      </div>

      {/* Cards */}

      <div className='mt-5 mb-5 container'>
        <div className="row row-cols-md-4"  >
          <div className='card card-body bg-dark m-1 col col-sm-3 topcards'>
            <img className="d-block mx-auto mt-4" src="https://www.pngmart.com/files/21/iPhone-13-PNG-HD.png" alt="First image" style={{ width: "35%" }} />
            <p className='text-light captions'>iPhone</p>
          </div>

          <div className='card card-body bg-dark  m-1 col col-sm-3 topcards'>
            <img className="d-block mx-auto w-50 mt-4" src="https://image01.oneplus.net/ebp/202103/12/1-m00-21-f0-rb8lb2blkveajfuzaajxhs8kwbw138_384_384.png" alt="First slide" />
            <p className='text-light captions'>Oneplus</p>
          </div>

          <div className='card card-body bg-dark m-1 col col-sm-3 topcards'>
            <img className="d-block mx-auto w-75 mt-4" src="https://images.samsung.com/is/image/samsung/p6pim/my/2202/gallery/my-galaxy-s22-plus-s906-sm-s906ezgdxme-530765219" alt="First slide" />
            <p className='text-light captions'>Samsung</p>
          </div>

        </div>
      </div>

      {/* Latest */}


      <div className='w-100 lt'>
        <h3 className='d-inline' style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: "bold" }}>The latest. </h3>
        <h3 className="d-inline text-muted" style={{ fontFamily: "Ubuntu, sans-serif" }}>
          Take a look at what's new right now.
        </h3>
      </div>



      <div className='container mt-4 con justify-content-center align-items-center'>
        <div className='horizontal-scroll' id="Scroll">
          <button className='btn-scroll' id="btnscrollleft" onClick={() => setVal(val < -4 ? -2 : val + 1)}><FontAwesomeIcon icon={faChevronLeft} /></button>
          <button className='btn-scroll' id="btnscrollright" onClick={() => setVal(val > 0 ? -1 : val - 1)}><FontAwesomeIcon icon={faChevronRight} /></button>
          <div className='main d-flex' id="displayBox">
            <div className='cards'>
              <Latest obj={latestList[0]} />
            </div>
            <div className='cards'>
              <Latest obj={latestList[1]} />
            </div>
            <div className='cards'>
              <Latest obj={latestList[2]} />
            </div>
            <div className='cards'>
              <Latest obj={latestList[3]} />
            </div>
            <div className='cards'>
              <Latest obj={latestList[4]} />
            </div>

          </div>
        </div>
      </div>


      <div className='m-0 mt-5 monthspicks'>
        <h3 className="text-center picks" style={{ fontWeight: "bold", fontSize: "40px" }}>This Month's picks</h3>

        <div className='p-0 mt-3'>
          <div className='row g-3'>
            <div className='col col-xl-6 col-12 ho card1' id="1">
              <Picks obj={picks[0]} />
            </div>
            <div className='col col-xl-6 col-12 h-100 '>
              <div className='row mb-2 h-50'>
                <div className='col col-sm-6 ho card2' id="2" >
                  <Picks obj={picks[1]} />
                </div>
                <div className='col col-sm-6 ho card3' id="3" >
                  <Picks obj={picks[2]} />
                </div>
              </div>
              <div className='row h-50 '>
                <div className='col col-sm-6 ho card4' id="4" >
                  <Picks obj={picks[3]} />
                </div>
                <div className='col col-sm-6 ho card5' id="5" >
                  <Picks obj={picks[4]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container mt-4'>
        <div className='card text-light newsletter p-0 mx-auto'>
          <div className='card-body h-100 p-0 text-dark'>
            <div className='card-img'>
              <img src="https://media.istockphoto.com/photos/one-red-paper-plane-pointing-in-different-way-on-blue-background-for-picture-id1289218652?b=1&k=20&m=1289218652&s=170667a&w=0&h=Wb2uqH7utGKI0obBfR1YvPJTmzvEntWLjkQ6HattYko=" className='w-100 m-0 p-0' />
            </div>
            <div className='card-img-overlay newscontent p-0 p-sm-2'>
              <h3 className='card-title' >Always be the first to know.</h3>
              <p className='card-subtitle mb-sm-3 mb-2'>Sign up for our newsletter!</p>
              <input type="email" placeholder='Email address' className='form-control border border-secondary rounded-0 d-inline p-0 ps-2 p-sm-2 d-inline'></input>
              <button className='btn m-2 p-1 d-inline'><FiSend /></button>
            </div>


          </div>
        </div>
      </div >


    </div>
  )
}

export default Home;