import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import bgImage from "../assets/bg.png"
import Filter from '../components/Filter'
import PropertyCard from '../components/PropertyCard'


const Home = () => {
    const [properties, setProperties] = useState([]);
    const [sort, setSort] = useState('default');
    const [page, setPage] = useState(1);
    const [filters, setFilters] = useState({});

    const fetchProperties = async (filterValues = filters, sortValue = sort, pageValue = page) => {
        const params = new URLSearchParams({
            ...filterValues,
            sort: sortValue,
            page: pageValue,
            limit: 9,
        }).toString();

        
        try {
            const res = await fetch(`https://betahouse-backend-twfz.onrender.com/api/v1/properties?${params}`);
            const data = await res.json();
            setProperties(data.properties);
        } catch (error) {
            console.log(error)
        }
    };

    const handleFilterSubmit = (newFilters) => {
        setFilters(newFilters);
        setPage(1);
        fetchProperties(newFilters, sort, 1);
    };

    useEffect(() => {
        fetchProperties(filters, sort, page);
    }, [ sort, page]);
    //  useEffect(() => {
    //     fetch("https://betahouse-backend-twfz.onrender.com/api/v1/properties").then((res) => res.json())
    //     .then((data) => {
    //         console.log(data)
    //     })
    //  })

    return (
        <div>
            <main className='wrapper'>
                <div className='h-[680px]  w-full bg-cover bg-center' style={{ backgroundImage: `url(${bgImage})` }}>
                    <Navbar />
                    <div className=''>
                        <div className='p-10 font-[Outfit] text-[#FFFFFF] mx-auto text-center'>
                            <h1 className='text-[68px] font-bold'>Browse Our Properties</h1>
                            <p className='text-[26px] font-normal mt-6'>Find your perfect home among our curated properties. Start <br /> browsing now!</p>
                        </div>
                        <div>
                            <Filter onFilter={handleFilterSubmit} />
                        </div>
                    </div>
                </div>


                <div className='flex justify-between items-center my-6'>
                    <p className='text-[#181A20] font-normal font-[Outfit] text-[21px]'>Showing 1-10 of results</p>
                    <select className='border px-3 py-2 rounded-lg text-[#181A20] font-[Outfit] font-normal text-[21px]'
                        value={sort} onChange={(e) => setSort(e.target.value)}>
                        <option value="default">Sort By: Default </option>
                        <option value="price-low">Price: (Low to High)</option>
                        <option value="price-high">Price: (High to Low)</option>
                        <option value="newest">Newest</option>
                    </select>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {properties.map((property) => (
                        <PropertyCard key={property._id} property={property} />
                    ))}
                </div>

                <div className='flex gap-4 justify-center mt-8'>
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                        <button
                            key={num}
                            onClick={() => setPage(num)}
                            className={`px-4 py-2 rounded-lg border ${page === num ? 'bg-[#3D9970] text-[#FFFFFF]' : 'bg-[#FFFFFF] '}  `}>
                            {num}
                        </button>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default Home