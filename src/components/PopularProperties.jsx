import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import locate from '../assets/locate.png';
import left from '../assets/left.png';
import right from '../assets/right.png';

const PopularProperties = () => {
  const [properties, setProperties] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchPopularProperties = async () => {
    try {
      const res = await fetch("https://betahouse-backend-twfz.onrender.com/api/v1/properties?title=Exquisite Villa");
      const data = await res.json();
      setProperties(data.properties);
    } catch (error) {
      console.log("Error fetching popular properties:", error);
    }
  };
  useEffect(() => {
    fetchPopularProperties();
  }, []);

  const nextSlide = () => {
    if (index < properties.length - 1) {
      setIndex(index + 1);
    }
  };
  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className='w-full mt-20 '>
      <h2 className='text-center mb-10 font-[Outfit] font-semibold text-[30px] md:text-[50px] text-[#0F1A1E]'>
        Discover Our Popular Properties
      </h2>

      <div className='relative '>
        <button className='absolute left-0 top-1/6 translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10' onClick={prevSlide}>
          <img src={left} alt="Previous" />
        </button>

        <div className='overflow-hidden'>
          <div className='md:flex gap-6 transition-transform duration-500' style={{ transform: `translateX(-${index * 320}px)` }}>
            {properties.map((property) => (
              <Link to={`/property/${property._id}`}>
                <div key={property._id} className='min-w-[300px] rounded-[7px] overflow-hidden relative mt-4 md:mt-0'>
                  <img src={property.image} alt={property.title} className='w-full h-[412px] object-cover' />
                  <div className='absolute bottom-0 left-0  w-full h-[142px] bg-[#4A4A4A]/30 p-3' >
                    <h3 className='font-[Outfit] font-semibold text-[18px] text-[#FFFFFF]'>{property.title}</h3>
                    <p className='text-[#FFFFFF] font-[Outfit] font-normal text-[18px] mt-2'>${property.price}</p>

                    <div className='flex gap-6 mt-2 font-[Outfit] text-[#FFFFFF] font-normal text-[14px]'>
                      <p>{property.numberOfBedrooms} Bedrooms</p>
                      <p>{property.numberOfBathrooms} Bathrooms</p>
                    </div>

                    <div className='flex items-center gap-2 mt-2'>
                      <img src={locate} alt="Location" />
                      <p className='font-[Outfit] text-[#FFFFFF] font-normal text-[15px]'>{property.location}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <button className='absolute right-0 top-1/6 translate-y-1/2 bg-[#4BA586] p-3 rounded-full shadow-md z-10' onClick={nextSlide}>
          <img src={right} alt="Next" />
        </button>
      </div>
    </div>
  )
}

export default PopularProperties