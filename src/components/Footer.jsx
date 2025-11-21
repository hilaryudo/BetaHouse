import React from 'react'
import locate from "../assets/locate.png";
import message from "../assets/message.png";
import call from "../assets/call.png";

const Footer = () => {
  return (
    <div>
      <footer className=' bg-[#035A33] mt-20'>
        <div className='md:flex justify-between md:p-20 p-5'>
          <div className=''>
            <div className='font-[Poppins] flex items-center gap-2'>
              <h2 className='text-[22px] text-[#FEFEFF] font-bold w-12 h-12 rounded-[100%] bg-[#4BA568] p-2'>BH</h2>
              <h1 className='text-[26px] text-[#FFFFFF] font-medium'>BetaHouse</h1>
            </div>

            <p className='font-[Outfit] text-[15px] text-[#FEFEFF] font-normal md:w-[373px] w-[300px] my-4 '>Discover, rent, and find your ideal home hassle-free with BetaHouse. Take control of your rental journey today!</p>

            <div className='flex items-center gap-2 my-2'>
              <img src={locate} alt="location" />
              <p className='font-[Outfit] font-normal text-[#FFFFFF] text-[14px]'>95 Tinubu Estate, Lekki, Lagos</p>
            </div>
            <div className='flex items-center gap-2 my-2' >
              <img src={call} alt="call" />
              <p className='font-[Outfit] font-normal text-[#FFFFFF] text-[14px]'>+234 903 636 4573</p>
            </div>
            <div className='flex items-center gap-2 my-2 mb-8 md:mb-0'>
              <img src={message} alt="message" />
              <p className='font-[Outfit] font-normal text-[#FFFFFF] text-[14px] ' >support@rentbetahouse.com</p>
            </div>
          </div>

          <div className='font-[Outfit] font-normal text-[#FFFFFF]/90 text-[15px] my-3 mb-8 md:mb-0 ' >
            <p className='font-semibold text-[#FFFFFF] my-2 '>Quick Links</p>
            <p>Home</p>
            <p className='mt-2'>Properties</p>
            <p className='mt-2'>About Us</p>
            <p className='mt-2'>Contact Us</p>
            <p className='mt-2'>Blog</p>

          </div>

          <div className='font-[Outfit] font-normal text-[#FFFFFF]/90 text-[15px] my-3 mb-8 md:mb-0 '>
            <p className='font-semibold text-[#FFFFFF] my-2'>More</p>
            <p>Agents</p>
            <p className='mt-2'>Affordable Houses</p>
            <p className='mt-2'>FAQ'S</p>
          </div>

          <div className='font-[Outfit] font-normal text-[#FFFFFF]/90 text-[15px] my-3 '>
            <p className='font-semibold text-[#FFFFFF] my-2'>Popular Search</p>
            <p>Apartment for sale</p>
            <p className='mt-2'>Apartment for rent</p>
            <p className='mt-2'>3 Bedroom flat</p>
            <p className='mt-2'>Bungalow</p>
          </div>
        </div>

        <div className='md:flex md:justify-between items-center border border-[#6F6F6F] md:px-20 md:py-10 p-5'>
          <p className='font-[Poppins] font-normal text-[#FFFFFF] text-[14px]'>Copyright 2023 Betahouse | Designed by Michael.fig</p>
          <p className='font-[Poppins] font-medium text-[#FFFFFF] text-[15px] mt-5 md:mt-0'>Privacy Policies</p>
        </div>

      </footer>
    </div>
  )
}

export default Footer