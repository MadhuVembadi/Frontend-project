import React from 'react'

function Latest(props) {

    return (

        <div className='card p-0 h-100' style={{ color: props.obj.txt }}>
            <img src={props.obj.image} className="card-img" />
            <div className='card-img-overlay cardcontent'>
                <p className='text-muted card-title mb-0' style={{ fontFamily: "Ubuntu, sans-serif" }}>
                    {props.obj.header}
                </p>
                <h3 className='card-subtitle .tag d-inline' >{props.obj.tagline}</h3>
            </div>
        </div>
    )
}

export default Latest