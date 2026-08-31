'use client'
import UserContextProvider from "@/context/user.context";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const ServiceSerching = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const router = useRouter()
    const context = useContext(UserContextProvider)

    console.log(context)
    const handleSubmit =(e) =>{
        
        e.preventDefault()
        const searchText = e.target.search.value.trim()
        const params=new URLSearchParams(searchParams)
        if(searchText){
            params.set('searchTerm', searchText)
        }else{
            params.delete('searchTerm')
        }
        console.log(params)

        router.push(`${pathname}?${params}`)
        
    }
  return (
    <div className="my-3">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center ">
          <input
            type="text "
            name="search"
            placeholder="Search Service"
            className=" w-100 py-3 px-2 bg-white text-black outline-0"
          />
          <button className="py-3 px-2 bg-green-700">Search</button>
        </div>
      </form>
    </div>
  );
};

export default ServiceSerching;
