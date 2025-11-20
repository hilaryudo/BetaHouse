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
    <div className='w-[80%] bg-[#FFFFFF]/20 px-6 py-5 flex flex-col md:flex-row items-center gap-4 md:gap-6 mx-auto'  >
       <div className='w-full bg-[#FFFFFF] px-4 py-2 rounded-md flex items-center gap-2'>
          <div className='flex-1'>
             <p className='font-[Outfit] font-semibold text-[14px] text-[#30343B]'>LOCATION</p>
             <input type="text" name="location" value={filters.location} onChange={handleChange} placeholder='e.g Gbagada'
              className='placeholder:text-[15px] placeholder:text-[#787878] font-normal font-[Outfit]' />
          </div>

          <div className='flex-1'>
                <p className='font-[Outfit] font-semibold text-[14px] text-[#30343B]'>PROPERTY TYPE</p>
                <input type="text" name="title" value={filters.title} onChange={handleChange} placeholder='e.g Duplex, Flat'
                 className='placeholder:text-[15px] placeholder:text-[#787878] font-normal font-[Outfit]' />
          </div>

          <div>
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

          <button onClick={handleSearch} className='bg-[#3D9970] px-6 py-4 rounded-md  text-[#FFFFFF] font-[Outfit] font-medium text-[20px] cursor-pointer'>
            Find Property
          </button>
       </div>
    </div>
  )
}

export default Filter