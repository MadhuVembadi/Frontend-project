import React from 'react'
import { useSelector } from 'react-redux'
import EmptyCart from '../../../Images/EmptyCart.jpg'
import './Bag.css'
import { useState, useEffect } from 'react'
import { TiTimes } from 'react-icons/ti'
import { MdDelete } from 'react-icons/md'
import deleteIcon from '../../../Images/deleteIcon.png'
import { removeProduct } from '../../../Slices/bagSlice'
import { useDispatch } from 'react-redux'
import { removeProductBag } from '../../../Slices/userSlice'
import { updateQuantity } from '../../../Slices/bagSlice'
import Scrolltotop from '../../Scrolltotop'
import { Modal, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Delivery from '../../../Images/Delivery.mp4'
import { updateOrders } from '../../../Slices/userSlice'

function Bag() {

  let activeuser = useSelector(state => state.user);
  let status = useSelector(state => state.status);
  let bag = useSelector(state => state.bag);
  let dispatch = useDispatch();
  let navigate = useNavigate();


  //let [quantity, setQuantity] = useState(new Array(bag.length).fill(1));
  let [change, setChange] = useState([0, 0]);
  let [total, setTotal] = useState(0);
  let [price, setPrice] = useState(new Array(bag.length).fill(1));
  let [modal, setModal] = useState(false);


  function increase(object) {

    let idx = parseInt(object.target.parentElement.parentElement.parentElement.getAttribute("value"));

    let obj = [{ ...bag[idx] }]

    obj[0].quantity += 1;
    setTotal(total + price[idx]);

    let actionObj = updateQuantity(obj[0]);

    dispatch(actionObj);

  }

  function decrease(object) {

    let idx = parseInt(object.target.parentElement.parentElement.parentElement.getAttribute("value"));

    let obj = [{ ...bag[idx] }]

    if (obj[0].quantity > 0) {
      obj[0].quantity -= 1;
      setTotal(total - price[idx]);
    }

    let actionObj = updateQuantity(obj[0]);
    dispatch(actionObj);

  }

  const deleteProduct = (event) => {

    let idx;


    if (event.target.getAttribute("for") == "img") {
      idx = event.target.parentElement.parentElement.getAttribute("value");
    }
    else {
      idx = event.target.parentElement.getAttribute("value");
    }
    setTotal(total - (price[idx] * bag[idx].quantity));

    let actionObj = removeProduct(bag[idx]);
    dispatch(actionObj);

    if (status[0]) {

      let actionObj = removeProductBag(bag[idx]);
      dispatch(actionObj);

    }

  }

  useEffect(() => {

    let prices = new Array(bag.length);


    let t = 0;

    bag.forEach((obj, idx) => {

      let s = obj.price.replace(',', '');
      let priceS = s.substring(0, s.length - 2);

      prices[idx] = (parseInt(priceS));

      t += prices[idx] * bag[idx].quantity;

    })

    setTotal(t);
    setPrice(prices);

  }, [])

  const pay = () => {

    if (!status[0]) {
      navigate('/account/bag')
    }
    else {
      setModal(!modal);

      setTimeout(() => {
        navigate('/orders')
      }, 10000)


      let actionObj2 = updateOrders(bag);
      dispatch(actionObj2);

      setTimeout(() => {
        bag.forEach((obj) => {
          let actionObj = removeProduct(obj);
          dispatch(actionObj);
        })
      }, 20000)


    }

  }



  return (
    <div className='bag container mt-4'>
      <>
        <Scrolltotop />
        {
          ((bag.length == 0) || (status[0] && activeuser.bag.length == 0)) &&
          <div className='card m-3 shadow'>
            <div className="card-body">
              <img src={EmptyCart} className="w-50 d-block mx-auto" />
              <h4 className="text-center">Nothing here!</h4>
            </div>
          </div>
        }

        {
          ((bag.length != 0) || (status[0] && activeuser.bag.length !== 0)) &&
          <>
            <hr className='text-muted' />
            <div className='row row-cols-md-2 row-cols-1 justify-content-around' >
              <div className='col-md-7 col-12 rounded-3 p-2' >
                {
                  bag.map((obj, idx) => <div key={idx} value={idx} style={{ background: "whitesmoke" }} className="mb-3 p-2">
                    <div className="row">
                      <div className='col'>
                        <h6 style={{ fontFamily: "oxygen,sans-serif", fontWeight: "bold" }}>{obj.model} ({obj.color})</h6>
                        <p>{obj.RAM}GB | {obj.ROM}GB</p>

                        <button onClick={increase.bind(idx)} className="border border-dark rounded-2">+</button>
                        <h3 className='d-inline p-sm-4 p-2' >{bag[idx].quantity}</h3>
                        <button onClick={decrease.bind(idx)} className="border border-dark rounded-2">-</button>
                      </div>
                      <div className='col'>
                        <img src={obj.image} className="float-end w-50" />
                      </div>
                    </div>

                    <h3 className='text-end me-3' >{obj.price}<span className="text-muted" style={{ fontSize: "smaller", fontWeight: "lighter" }}><TiTimes size={20} className="text-muted" />{bag[idx].quantity}</span></h3>

                    <button onClick={(event) => deleteProduct(event)} className="btn btn-none">
                      <img src={deleteIcon} htmlFor="img" />
                    </button>
                  </div>)
                }
              </div>

              <div className="col-md-4 col-12 rounded-3 p-4 h-100 mt-5" style={{ background: "whitesmoke" }}>
                <h3 className='d-flex justify-content-between'>
                  <section style={{ fontFamily: "oxygen,sans-serif", fontWeight: "bold" }}>Total</section>
                  <section>{total}/-</section>
                </h3>
                <sub className='d-block text-end m-3'>*Incl all taxes</sub>
                <hr />
                <ul className="list-group list-group-flush">
                  <li className="m-1 d-flex justify-content-between" style={{ background: "whitesmoke", listStyle: "none", fontFamily: "oxygen,sans-serif", fontWeight: "lighter" }}>
                    <section>
                      Subtotal
                    </section>
                    <section>
                      {total}/-
                    </section>
                  </li>
                  <li className="m-1 d-flex justify-content-between" style={{ background: "whitesmoke", listStyle: "none", fontFamily: "oxygen,sans-serif", fontWeight: "lighter" }}>
                    <section>
                      Discount
                    </section>
                    <section>
                      0/-
                    </section>
                  </li>
                  <li className="m-1 d-flex justify-content-between" style={{ background: "whitesmoke", listStyle: "none", fontFamily: "oxygen,sans-serif", fontWeight: "lighter" }}>
                    <section>
                      Shipping Charges
                    </section>
                    <section>
                      0/-
                    </section>
                  </li>
                  <li className="m-1 d-flex justify-content-between" style={{ background: "whitesmoke", listStyle: "none", fontFamily: "oxygen,sans-serif", fontWeight: "lighter" }}>
                    <section>
                      GST
                    </section>
                    <section>
                      18%
                    </section>
                  </li>

                </ul>

                <button className='btn btn-dark d-block mx-auto w-100 mt-3 mb-3' onClick={pay}>Paynow</button>

              </div>
            </div>
            <Modal show={modal} onHide={pay} centered style={{ background: "#F7F7F7" }}>

              <Modal.Body className='display-6 p-0 '>

                <video autostart="true" autoPlay src={Delivery} className="w-100 h-50 d-block mx-auto" />

              </Modal.Body>

            </Modal>

          </>

        }

      </>
    </div>
  )
}

export default Bag