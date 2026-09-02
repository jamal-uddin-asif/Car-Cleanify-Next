"use client";
import { BookingContext } from "@/context/booking.context";
import React, { useContext } from "react";

const BookingBtn = ({ service }) => {
  const { bookings, setBookings, addBooking, removeBooking } =
    useContext(BookingContext);

  const alreadyBooked = Boolean(bookings.find((b) => b._id === service._id));
  console.log({alreadyBooked, bookings})
  const handleBooking = () => {
    console.log(service)
    addBooking(service);
  };

  return (
    <button
      onClick={() =>
        alreadyBooked ? removeBooking(service._id) : handleBooking(service)
      }
      className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition duration-200 hover:-translate-y-0.5"
    >
      {alreadyBooked ? "Remove booking" : "Book now"}
    </button>
  );
};

export default BookingBtn;
