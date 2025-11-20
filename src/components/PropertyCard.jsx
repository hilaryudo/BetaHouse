import React from 'react'

const PropertyCard = (property) => {
  return (
    <div>
        <div className='relative'> 
            <img src={property.image} alt={property.title} className='w-full h-12 object-cover'/>
        </div>

        <div className='p-4'>
            <h3>{property.title}</h3>
            <p>{property.location}</p>
            <div>
                <p>{property.numberOfBedrooms} Bedrooms</p>
                <p>{property.numberOfBathrooms} Bathrooms</p>
            </div>
            <p>$ {Number(property.price).toLocaleString()}</p>
        </div>
    </div>
  )
}

export default PropertyCard