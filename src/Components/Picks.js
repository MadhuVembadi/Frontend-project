import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Picks(props) {

    let navigate = useNavigate();
    let [type, setType] = useState([false, 0]);
    useEffect(() => {

        let a = document.querySelectorAll(".ho");
        let arr = Array.from(a);
        let b = arr.find(item => type[1] == item.getAttribute("id"));
        let c;
        if (b != undefined) {
            c = b.querySelector(".card");
        }

        if (type[0] == true) {

            let present = document.createElement("button");
            present.setAttribute("class", "btn text-light rounded buy");
            present.addEventListener("click", () => {
                let index = present.parentElement.getAttribute("id");

                if (index == 1 || index == 4) {
                    navigate('/samsung')
                }
                else if (index == 2 || index == 3) {
                    navigate('/oneplus');
                }
                else if (index == 5) {
                    navigate('/realme')
                }
            })
            present.innerHTML = `Buy now`
            c.append(present);

        } else if (c != undefined) {

            let present = c.querySelector(".buy");
            present.remove();
            setType([false, 0]);

        }

    }, [type]);




    return (
        <div className='card p-0 rounded h-100 pickcards' id={props.obj.in} style={{ color: props.obj.txt }} onMouseEnter={() => setType([true, props.obj.in])} onMouseLeave={() => setType([false, props.obj.in])}>
            <img className="card-img h-100" src={props.obj.image} />
            <div className='card-img-overlay '>
                <h5 className='d-inline rounded p-1 text-light bg-danger' style={{ fontSize: "70%" }}>{props.obj.header}</h5>
                <h3 className='card-title phone'>{props.obj.phone}</h3>

            </div>
        </div>
    )
}

export default Picks