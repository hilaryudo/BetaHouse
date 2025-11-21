import React , { useState }from 'react'

const Filter = ({ onFilter }) => {
    const [filters, setFilters] = useState({
        location: '',
        title: '',
        numberOfBedrooms: ''
    }); 

    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };
    const handleSearch = () => {
        onFilter(filters);
    };

  return (
    <div className='md:w-[80%] w-[60%] bg-[#FFFFFF]/20 px-6 md:py-5 py-3 flex flex-col md:flex-row items-center gap-4 md:gap-6 mx-auto'  >
       <div className='w-full bg-[#FFFFFF] p-3 md:px-4 md:py-2 rounded-md md:flex md:justify-between items-center gap-2'>
          <div className=''>
             <p className='font-[Outfit] font-semibold text-[14px] text-[#30343B]'>LOCATION</p>
             <input type="text" name="location" value={filters.location} onChange={handleChange} placeholder='e.g Gbagada'
              className='placeholder:text-[15px] placeholder:text-[#787878] font-normal font-[Outfit]' />
          </div>

          <div className='mt-2 md:mt-0'>
                <p className='font-[Outfit] font-semibold text-[14px] text-[#30343B]'>PROPERTY TITLE</p>
                <input type="text" name="title" value={filters.title} onChange={handleChange} placeholder='e.g Duplex, Flat'
                 className='placeholder:text-[15px] placeholder:text-[#787878] font-normal font-[Outfit]' />
          </div>

          <div className='mt-2 md:mt-0'>
                <p className='font-[Outfit] font-semibold text-[14px] text-[#30343B]'>BEDROOM</p>
                <select name="numberOfBedrooms" value={filters.numberOfBedrooms} onChange={handleChange}
                 className='bg-white text-[15px] text-[#787878] font-normal font-[Outfit] px-2 py-1 rounded-md'>
                    <option value="">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>   
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>
          </div>

          <button onClick={handleSearch} className='bg-[#3D9970] md:px-6 md:py-4 p-4 lg:px-4 lg:py-2 rounded-md  text-[#FFFFFF] font-[Outfit] font-medium md:text-[20px] text-[16px] cursor-pointer mt-2 md:mt-0'>
            Find Property
          </button>
       </div>
    </div>
  )
}

export default Filter