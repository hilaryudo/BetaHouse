import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import bgImage from "../assets/bg.png"
import Filter from '../components/Filter'
import PropertyCard from '../components/PropertyCard'
import Footer from '../components/Footer'
import PopularProperties from '../components/PopularProperties'


const Home = () => {

    const [properties, setProperties] = useState([]);
    const [sort, setSort] = useState('default');
    const [page, setPage] = useState(1);
    const [filters, setFilters] = useState({});

    const buildParams = (filters, sort, page) => {
        const params = new URLSearchParams();
        Object.entries(filters).forEach(([key, value]) => {
            if (value) params.append(key, value);
        });

        if (sort && sort !== "default") params.append("sort", sort);
        params.append('page', page);
        params.append('limit', 9);
        return params.toString();
    };

    const fetchProperties = async () => {
        const params = buildParams(filters, sort, page);
        const url = `https://betahouse-backend-twfz.onrender.com/api/v1/properties?${params}`;

        try {
            const res = await fetch(url)
            const data = await res.json();
            setProperties(data.properties || []);

        } catch (error) {
            console.log("FETCH ERROR:", error);
        }
    };

    const handleFilterSubmit = (newFilters) => {
        setFilters(newFilters);
        setPage(1);
        fetchProperties(newFilters, sort, 1);
    };

    useEffect(() => {
        fetchProperties(filters, sort, page);
    }, [filters, sort, page]);


    return (
        <div>
            <main className='md:mx-auto lg:w-[1300px]'>
                <div className='md:h-[680px] h-[720px] w-full bg-cover bg-center' style={{ backgroundImage: `url(${bgImage})` }}>
                    <Navbar />
                    <div className=''>
                        <div className='p-10 font-[Outfit] text-[#FFFFFF] mx-auto text-center'>
                            <h1 className=' text-[40px] md:text-[68px] font-bold'>Browse Our Properties</h1>
                            <p className='text-[18px] md:text-[26px] font-normal mt-6'>Find your perfect home among our curated properties. Start <br /> browsing now!</p>
                        </div>
                        <div>
                            <Filter onFilter={handleFilterSubmit} />
                        </div>
                    </div>
                </div>

                <div className='wrapper'>
                    <div className='flex justify-between items-center my-6'>
                        <p className='text-[#181A20] font-normal font-[Outfit] md:text-[21px] text-[16px]'>Showing {properties.length} results</p>
                        <select className='border px-3 py-2 rounded-lg text-[#181A20] font-[Outfit] font-normal md:text-[21px] text-[16px]'
                            value={sort} onChange={(e) => setSort(e.target.value)}>
                            <option value="default">Sort By: Default </option>
                            <option value="price-low">Price: (Low to High)</option>
                            <option value="price-high">Price: (High to Low)</option>

                        </select>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3  lg:grid-cols-2 gap-4'>
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

                    <PopularProperties />
                </div>
                <Footer />

            </main>
        </div>
    )
}

export default Home