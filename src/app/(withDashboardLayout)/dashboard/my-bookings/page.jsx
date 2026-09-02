"use client";
import ServiceCard from "@/app/(withCommonLayout)/services/_components/ServiceCard";
import { BookingContext } from "@/context/booking.context";
import React, { useContext } from "react";

const MyBookings = () => {
  const { bookings } = useContext(BookingContext);
  return (
    <div>
      <div className="m-3">
        {bookings.length === 0 ? (
          <h2 className="text-center text-3xl text-purple-600">
            Bookings not found{" "}
          </h2>
        ) : (
          <div className="grid my-5 grid-cols-3 gap-4">
            {bookings?.map((service) => (
              <ServiceCard key={service?._id} service={service} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
