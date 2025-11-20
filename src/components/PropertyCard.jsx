import React from 'react'
import location from '../assets/location.png'
import bedroom from '../assets/bedroom.png'
import bathroom from '../assets/bathroom.png'
import filter from '../assets/filter.png'
import share from '../assets/share.png'
import like from '../assets/like.png'

const PropertyCard = ({ property }) => {
  return (
    <div className='w-[397px] h-[566px]'>
      <div >
        <img src={property.image} alt={property.title} className='w-full h-[297px] object-cover rounded-t-[10px]' />
      </div>

      <div className='bg-[#FFFFFF] border border-[#DDD8DB] rounded-b-[10px] p-6 '>
        <h3 className='font-[Outfit] font-semibold text-[21px] text-[#444444]'>{property.title}</h3>
        <div className='flex items-center gap-3 my-2'>
          <img src={location} alt="Location icon" />
          <p className='font-[Outfit] font-normal text-[15px] text-[#666666]'>{property.location}</p>
        </div>

        <div className='flex items-center gap-15 mb-5'>
          <div className='flex items-center gap-3'>
            <img src={bedroom} alt="Bedroom icon" />
            <p className='font-[Outfit] font-normal text-[16px] text-[#666666]'>{property.numberOfBedrooms} Bedrooms</p>
          </div>
          <div className='flex items-center gap-3'>
            <img src={bathroom} alt="Bathroom icon" />
            <p className='font-[Outfit] font-normal text-[16px] text-[#666666]'>{property.numberOfBathrooms} Bathrooms</p>
          </div>

        </div>

        <div className='border-t  border-[#E8E8E8] py-4  flex justify-between items-center'>
          <p className='font-[Outfit] font-semibold text-[22px] text-[#373737]'>$ {property.price}</p>
          <div className='flex items-center gap-4'>
            <img src={filter} alt="Filter icon" />
            <img src={share} alt="Share icon" />
            <img src={like} alt="Like icon" className='mt-3' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default PropertyCard