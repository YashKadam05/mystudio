import { useState } from 'react'
import { Routes, Route } from "react-router";

import Loader from "./components/Loader"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Service from "./components/Service"
import Investment from "./components/Investment"
import FormBooking from "./components/FormBooking"

import Booking from "./components/Booking"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"


function App() {
  const [first, setfirst] = useState(false);
  setTimeout(() => {
    setfirst(true)
  }, 4500);

  return (
    <>
      {(!first && <Loader />)}
      {first && (<Routes>
        <Route path="/mystudio/" element={<><Navbar /><Hero /><Service /><Investment /><Booking /></>} />
        <Route path="/mystudio/gallery" element={<Gallery />} />
        <Route path="/mystudio/about" element={<><FormBooking /><Booking /></>} />
      </Routes>)}
      {(first && <Footer />)}
    </>
  )
}

export default App
