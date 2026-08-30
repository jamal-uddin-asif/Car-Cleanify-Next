import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from './../../../public/assets/img/logo.png'

const Navber = () => {
  return (
    <div className="bg-blue-400 flex justify-between items-center p-3">
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
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navber;
