'use client'
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";
import logo from './../../../public/assets/img/logo.png'
import Container from "./Container";
import { UserContext } from "@/context/user.context";

const Navber = () => {
  const {user, setUser} = use(UserContext)

  return (
<div className="bg-blue-400">
    <Container>
    <div className=" flex justify-between items-center p-3">
      <Link href={'/'}>
        <Image src={logo} width={60} height={60} alt="Logo"/>
      </Link>
      <div className="flex justify-between gap-4 ">
        <Link href={'/'}>Home</Link>
        <Link href={'/services'}>Services</Link>
        <Link href={'/reviews'}>Reviews</Link>
        <Link href={'/about-us'}>About Us</Link>
      </div>
      <div>
        {
          user? <Link href={'/dashboard'}>Dashboard</Link> : <Link href={'/login'}>Login</Link>
        }
        
      </div>
    </div>
      </Container>

      </div>
  );
};

export default Navber;
