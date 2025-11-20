import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div>
            <nav className='h-[121px] px-24 hidden md:flex justify-between items-center  bg-[#1D293F1F]'>
            <div>
                <img src={logo} alt="BetaHouse Logo" />
            </div>

            <div className='flex items-center gap-5 text-[#F5F5F5] font-medium text-[20px] font-[Exo2]'>
                <Link to="/">
                    <p>Home</p>
                </Link>
                <p>Properties</p>
                <p>About Us</p>
                <p>Blog</p>
                <p>Contact Us</p>
            </div>

            <div className='flex items-center gap-[34px] text-[20px] font-[Exo2] font-normal text-[#F5F5F5]'>
                <Link to="/signup">
                    <button className='p-2.5 rounded-lg border w-[140px] h-[61px] cursor-pointer'>Sign Up</button>
                </Link>
                
                <Link to="/signin">
                    <button className='p-2.5 rounded-lg border bg-[#3D9970] w-[140px] h-[61px] cursor-pointer'>Login</button>
                </Link>

            </div>
        </nav>
    </div>
  )
}

export default Navbar