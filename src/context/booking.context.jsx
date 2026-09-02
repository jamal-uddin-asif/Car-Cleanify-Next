"use client";
import React, { Children, createContext, useState } from "react";

export const BookingContext = createContext(null);

const BookingContextProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  const removeBooking = (id) => {
    setBookings((booking) => booking.filter((b) => b._id !== id));
  };

  const value = {
    bookings,
    setBookings,
    addBooking,
    removeBooking,
  };
  return <BookingContext value={value}>{children}</BookingContext>;
};

export default BookingContextProvider;
