"use client"

import Link from 'next/link'
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from 'react-icons/rx';


import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState (false)

  function handleNavbar() {
    setIsOpen (!isOpen)
  }
  return (
    <div className='z-50 sticky top-0'>
        <nav className='flex justify-between w-full bg-blue-950 p-6 text-white flex-col lg:flex-row'>


  {/*************************************************************** */}

           <div className='flex flex-row gap-x-20'>

           <div className='text-xl font-bold'>
            <Link href={"/"}>WaqasAhmed</Link></div>

            <div className='lg:hidden'>
                <button onClick={handleNavbar}>
                {isOpen ? (<RxCross2 />): (<GiHamburgerMenu />)}
                </button>
            </div>

           </div>
{/* ********************************************************* */}
            {/* For P.C */}

            <div className='hidden lg:block'>

                <div className='flex gap-x-4 font-semibold '>

                  <Link href={"/home"}>Home</Link>
                  <Link href={"/about"}>About</Link>
                  <Link href={"/contact"}>Contact</Link>
                  <Link href={"/project"}>Project</Link>
        

                </div>
            </div>

            {/* For Mobile */}

            {isOpen && (
            <div className='lg:hidden '>

                <div className='flex gap-x-4 font-semibold flex-col gap-y-6 mt-3'>
              
                  <Link href={"/home"}>Home</Link>
                  <Link href={"/about"}>About</Link>
                  <Link href={"/contact"}>Contact</Link>
                  <Link href={"/project"}>Project</Link>
                  
                </div>
            </div>
            )}
        </nav>
    </div>
  )
}

export default Navbar