import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Empty from '../../../Images/Empty.jpg'
import './Orders.css'
import Signin from '../Signin/Signin'
import { TiTimes } from 'react-icons/ti'
import { useEffect, useState } from 'react'
import deleteIcon from '../../../Images/deleteIcon.png'
import { Button } from 'react-bootstrap'
import { deleteOrder } from '../../../Slices/userSlice'
import { act } from 'react-dom/test-utils'

function Orders() {

  let dispatch = useDispatch();

  let activeuser = useSelector(state => state.user);

  let status = useSelector(state => state.status);

  var [price, setPrice] = useState(new Array(activeuser.orders.length).fill(1));


  const deleteOrd = function (element) {

    let index = element.target.getAttribute("value");

    let actionObj = deleteOrder(activeuser.orders[index]);
    dispatch(actionObj);
  }
  const deleteAll = function () {
    activeuser.orders.forEach(obj => {
      let actionObj = deleteOrder(obj);
      dispatch(actionObj);
    })
  }

  useEffect(() => {

    if (status[0]) {
      let prices = new Array(activeuser.orders.length);

      activeuser.orders.forEach((obj, idx) => {

        let s = obj.price.replace(',', '');
        let priceS = s.substring(0, s.length - 2);

        prices[idx] = (parseInt(priceS));


      })

      setPrice(prices);
    }

  }, [])

  return (
    <div className='orders'>
      <>

        {
          !status[0] && <Signin />
        }
        {
          (status[0] && activeuser.orders.length == 0) &&
          <div className='card m-3 shadow'>
            <div className="card-body">
              <img src={Empty} className="w-50 d-block mx-auto" />
              <h4 className="text-center">No history of orders</h4>
            </div>
          </div>
        }
        {
          (status[0] && activeuser.orders.length != 0) &&
          <div className='mt-4 container'>
            <div className='d-block d-flex justify-content-end'>
              <Button variant="none" style={{ borderRadius: "20px", background: "black", color: "white" }} className="" onClick={deleteAll} id="deleteAll">
                Delete all orders
              </Button>
            </div>
            <div>
              {
                activeuser.orders.map((obj, index) => <div key={index} className='card'>
                  <div className='card-header bg-none border-1'>
                    <div className='card-title d-inline'>
                      Order Number : {obj.orderID}
                    </div>
                    <div className='card-subtitle d-inline float-end'>
                      <button className='btn btn-none bg-none' onClick={(element) => deleteOrd(element)} value={index}>
                        <img src={deleteIcon} value={index} id="deleteicon" />
                      </button>

                    </div>
                  </div>
                  <div className='card-body border-0' style={{ background: "whitesmoke" }}>
                    <div className='row row-cols-sm-2 row-cols-1'>
                      <div className='sol col-sm-8' style={{ fontFamily: "oxygen,sans-serif" }}>
                        <div className='row row-cols-md-2 row-cols-1'>

                          <div className='col-md-5 col'>
                            <h4 id="model">{obj.model}</h4>
                            <p>{obj.color}</p>
                          </div>

                          <div className='col-md-2 col'>
                            {obj.price}
                          </div>

                          <div className='col-md-2 col'>
                            <TiTimes size={20} className="text-muted" />{obj.quantity}
                          </div>

                          <div className='col-md-2 col'>
                            {price[index] * obj.quantity}
                          </div>

                        </div>

                        <ul className="list-group list-group-flush">
                          <li className="m-1 d-flex justify-content-between" style={{ background: "whitesmoke", listStyle: "none", fontFamily: "oxygen,sans-serif", fontWeight: "lighter" }}>
                            <section>
                              Subtotal
                            </section>
                            <section>
                              {price[index] * obj.quantity}/-
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
                      </div>
                      <div className='col col-sm-4'>
                        <img src={obj.image} className="w-100 d-block mx-auto" />
                      </div>
                    </div>
                  </div>
                </div>)
              }
            </div>
          </div>
        }
      </>
    </div>
  )
}

export default Orders