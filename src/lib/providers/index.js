"use client";
import BookingContextProvider from "@/context/booking.context";
import UserContextProvider from "@/context/user.context";
import { SessionProvider} from "next-auth/react";
import React from "react";

const Providers = ({ children }) => {

  return (
    <SessionProvider>
      <BookingContextProvider>
        <UserContextProvider>{children}</UserContextProvider>
      </BookingContextProvider>
    </SessionProvider>
  );
};

export default Providers;
