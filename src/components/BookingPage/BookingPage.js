/* global fetchAPI, submitAPI */
import React, { useState, useEffect } from "react";

import "./BookingPage.css";

const BookingPage = () => {
  const [bookingData, setBookingData] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  const [formData, setFormData] = useState({
    customerName: "",
    resDate: "",
    resTime: "",
    numGuests: 1,
    occasion: "Birthday",
  });
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const initialData = await fetchBookingData();
        setBookingData(initialData);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };

    fetchInitialData();
  }, []);

  const fetchBookingData = async () => {
    const response = await fetch("api_endpoint");
    const data = await response.json();
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowNotification(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAvailableTimes(updateTimes(value));
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const updateTimes = (selectedDate) => {
    return availableTimes;
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <>
      <div className="heading">
        <h3>Reserve your table now!</h3>
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>
        <label htmlFor="customer-name" aria-label="Your Name">
          Your Name
        </label>
        <input
          type="text"
          id="customer-name"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
          required
        />

        <label htmlFor="res-date" aria-label="Choose date">
          Choose date
        </label>
        <input
          type="date"
          id="res-date"
          name="resDate"
          value={formData.resDate}
          onChange={handleChange}
        />

        <label htmlFor="res-time" aria-label="Choose time">
          Choose time
        </label>
        <input
          type="time"
          id="res-time"
          name="resTime"
          value={formData.resTime}
          onChange={handleChange}
        />

        <label htmlFor="guests" aria-label="Number of guests">
          Number of guests
        </label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          name="numGuests"
          value={formData.numGuests}
          onChange={handleChange}
        />

        <label htmlFor="occasion" aria-label="Occasion">
          Occasion
        </label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Dinner Date</option>
          <option>Others</option>
        </select>

        <button type="submit" aria-label="Make Your reservation">
          Make Your reservation
        </button>
      </form>

      {/* Reservation Details Card */}
      {showNotification && (
        <div className="notification-card">
          <div className="notification-content">
            <span className="close" onClick={handleCloseNotification}>
              &times;
            </span>
            <h2>Congratulations!</h2>
            <p>Your reservation is confirmed for the following details:</p>
            <p>
              Name: {formData.customerName} <br /> Date: {formData.resDate}
              <br /> Time: {formData.resTime}
              <br /> Guests: {formData.numGuests}
              <br /> Occasion: {formData.occasion}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export const initializeTimes = async () => {
  const today = new Date();
  const availableTimes = await fetchAPI(today);
  return availableTimes;
};

export const updateTimes = async (currentState, selectedDate) => {
  const availableTimes = await fetchAPI(selectedDate);
  return availableTimes;
};

export default BookingPage;
