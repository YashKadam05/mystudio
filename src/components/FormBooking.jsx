import { useState, useEffect } from "react"
import "./formbooking.css"
import axios from "axios"

export default function FormBooking() {
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8080/about", [event.target.username.value, event.target.cars.value, event.target.description.value, event.target.date.value, event.target.duration.value, event.target.phone.value, event.target.email.value])
      .then(
        alert("Data Submitted"),
        event.target.username.value = "", event.target.cars.value = "", event.target.description.value = "", event.target.date.value = "", event.target.duration.value = "", event.target.phone.value = "", event.target.email.value = ""
      )
      .catch(err => console.log(err));
  }

  // username cars description date duration phone email
  return (
    <>
      <div className="bookingForm" id="bookingForm" onSubmit={handleSubmit}>
        <form className="orderForm">
          <h1><span>|</span>Whats the Plan?</h1>

          <p>Name</p>
          <input type="text" name="username" placeholder="Chris Gayle" required />
          <p>Session Type</p>
          <select name="cars" id="cars">
            <option value="">-select you event-</option>
            <option value="Outdoor">Outdoor</option>
            <option value="Birthday">Birthday</option>
            <option value="Family">Family</option>
          </select>
          <p>Description</p>
          <textarea placeholder="Tell us in more details (Optional)" name="description" required></textarea>
          <p>Date of Session</p>
          <input type="date" name="date" style={{ width: "130px" }} required />
          <p>Duration of Session</p>
          <input type="text" name="duration" placeholder="In Hours" required />
          <p>Contact (Whatsapp Turned On)</p>
          <input type="text" name="phone" placeholder="+91 123456789" required />
          <p>Email (Optional)</p>
          <input type="text" name="email" placeholder="@gmail.com" required />

          <button className="link" type="submit">Submit & Calculate $</button>
        </form>

      </div>
    </>
  )
}
