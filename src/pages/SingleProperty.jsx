import React,{ useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const Property = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);

  const fetchProperty = async () => {
    try {
      const res = await fetch(`https://betahouse-backend-twfz.onrender.com/api/v1/properties/${id}`);
      const data = await res.json();
      setProperty(data.property);
    } catch (error) {
      console.log("Error fetching property:", error);
    }
  };
  useEffect(() => {
    fetchProperty();
  }, [id]);


  return (
    <div className='w-full min-h-screen bg-[#F5F5F5] flex flex-col items-center'>
      <button onClick={() => navigate(-1)} className='m-4 p-2 rounded shadow-md w-24 bg-[#444444]'>
        <p className='font-[Exo2] text-[#FFFFFF] font-normal text-[15px]'>Back</p>
      </button>
      <img src={property?.image} alt={property?.title} className='lg:w-[70%] lg:max-h-screen w-full object-contain' />
    </div>
  )
}

export default Property