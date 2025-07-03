import React from 'react'
import { Link } from "react-router";

import "./booking.css"

export default function Booking() {
  function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
  return (
    <>
    <div className="booking" id='booking'>

    <div className="orderCard">
      <div className="some">
        <h1><span>|</span>Bookings</h1>
        <p>Get Connected to us and Book your photography session now.</p>
      </div>
      <Link to="/mystudio/about" className="link" style={{height:"20px"}} onClick={scrollToTop}>Book Now</Link>
    </div>

  </div>

    </>
  )
}
