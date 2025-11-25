import React from 'react'
import { Link } from 'react-router-dom'
import menuIcon from '../assets/menuIcon.png'


const Navbar = () => {

    return (
        <div>
            <nav className='h-[121px] md:px-20 px-10 lg:px-10 flex justify-between items-center  bg-[#1D293F1F]'>
                <div className='flex items-center gap-2'>
                    <p className='font-[Poppins] text-[24px] font-bold text-[#FEFEFE] w-12 h-12 rounded-[100%] bg-[#4BA568] p-2'>BH</p>
                    <p className='font-[Poppins] text-[29px] font-medium text-[#FFFFFF]'>BetaHouse</p>
                </div>

                <div className=' hidden md:flex items-center gap-5 text-[#F5F5F5] font-medium text-[20px] lg:text-[24px] font-[Exo2]'>
                    <Link to="/">
                        <p>Home</p>
                    </Link>
                    <p>Properties</p>
                    <p>About Us</p>
                    <p>Blog</p>
                    <p>Contact Us</p>
                </div>

                <div className='hidden md:flex items-center gap-[34px]  text-[20px] font-[Exo2] font-normal text-[#F5F5F5]'>
                    <Link to="/signup">
                        <button className='p-2.5 rounded-lg border w-[140px] lg:w-[100px] h-[61px] cursor-pointer'>Sign Up</button>
                    </Link>

                    <Link to="/signin">
                        <button className='p-2.5 rounded-lg border bg-[#3D9970] w-[140px] lg:w-[100px] h-[61px] cursor-pointer'>Login</button>
                    </Link>


                </div>


                <div className="dropdown dropdown-bottom dropdown-end md:hidden">
                    <div tabIndex={0} role="button" className="btn m-5 bg-[#3D9970] rounded-lg ">
                        <p className='font-[Exo2] text-[#444444] text-[18px] cursor-pointer'>Menu</p>
                    </div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li className='text-[20px] font-[Exo2] font-normal text-[#373737]'>
                            <Link to="/signup">
                                Sign Up
                            </Link>
                        </li>
                        <li className='text-[20px] font-[Exo2] font-normal text-[#373737]'>
                            <Link to="/signin">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>







            </nav>
        </div>
    )
}

export default Navbar