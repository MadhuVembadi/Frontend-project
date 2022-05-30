import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Scrolltotop() {
    let location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <></>
    )
}

export default Scrolltotop;