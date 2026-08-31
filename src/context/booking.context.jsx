"use client";
import React, { Children, createContext, useState } from "react";

const BookingContext = createContext(null);

const BookingContextProvider = ({ Children }) => {

const [booking, setBooking] = useState(null)

  const value = {
    booking, 
    setBooking,
  };
  return <BookingContext value={value}>{Children}</BookingContext>;
};

export default BookingContextProvider;
