import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <nav className='h-[121px] px-20 flex justify-between items-center  bg-[#1D293F1F]'>
                <div className='flex items-center gap-2'>
                    <p className='font-[Poppins] text-[24px] font-bold text-[#FEFEFE] w-12 h-12 rounded-[100%] bg-[#4BA568] p-2'>BH</p>
                    <p className='font-[Poppins] text-[29px] font-medium text-[#FFFFFF]'>BetaHouse</p>
                </div>

                <div className=' hidden md:flex items-center gap-5  text-[#F5F5F5] font-medium text-[20px] lg:text-[16px] font-[Exo2]'>
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
                        <button className='p-2.5 rounded-lg border w-[140px] h-[61px] cursor-pointer'>Sign Up</button>
                    </Link>

                    <Link to="/signin">
                        <button className='p-2.5 rounded-lg border bg-[#3D9970] w-[140px] h-[61px] cursor-pointer'>Login</button>
                    </Link>


                </div>

                <button className='md:hidden text-white text-3xl' onClick={() => setOpen(!open)}>
                    =
                </button>

                {open && (
                    <div className='md:hidden bg-[#0E1A2A] p-6 space-y-6 '>
                        <Link to="/" onClick={() => setOpen(false)}>
                            <p>Home</p>
                        </Link>
                        <p onClick={() => setOpen(false)}>Properties</p>
                        <p onClick={() => setOpen(false)}>About Us</p>
                        <p onClick={() => setOpen(false)}>Blog</p>
                        <p onClick={() => setOpen(false)}>Contact Us</p>


                        <div className='pt-4 flex flex-col gap-4'>
                            <Link to="/signup" onClick={() => setOpen(false)}>
                                <button className='w-full mb-4 p-2.5 rounded-lg border  cursor-pointer'>Sign Up</button>
                            </Link>
                            <Link to="/signin" onClick={() => setOpen(false)}>
                                <button className='w-full p-2.5 rounded-lg border bg-[#3D9970] cursor-pointer'>Login</button>
                            </Link>
                        </div>
                    </div>


                )}




            </nav>
        </div>
    )
}

export default Navbar