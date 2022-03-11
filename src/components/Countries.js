import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { SearchFilter } from './SearchFilter';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filteredCountries, setFilteredCountries] = useState([])
    const [inputValue, setInputValue] = useState("")

    const getCountries = async () => {
        const response = await fetch(`https://restcountries.com/v2/all`);
        const countryData = await response.json();

        setCountries(countryData);
        setIsLoading(false)
    }

    useEffect(() => {
        getCountries()
    }, []);


    const searchCountries = (searchParameter) => {
        setInputValue(searchParameter)

        if(inputValue) {
            const searchCountryData = countries.filter((country) => (
                Object.values(country).join("").toLowerCase().includes(inputValue.toLowerCase())
            ))
            setFilteredCountries(searchCountryData)

        }else{
            setFilteredCountries(countries)
        }
    }


    const filterCountries = (filterParameter) => {
        setInputValue(filterParameter);
    
        if (filterParameter) {
          const filterCountryData = countries.filter(
            (country) =>
              country.region.toLowerCase() === filterParameter.toLowerCase()
          );
    
          setFilteredCountries(filterCountryData);
        } else {
          setFilteredCountries(countries);
        }
      };


    return (
        <div className='bg-slate-100 dark:bg-slate-800 h-full'>
          {isLoading ? <h1 className='flex items-center justify-center font-bold text-4xl h-screen dark:text-white'>Loading...</h1> : (
          <>
          <SearchFilter searchCountries={searchCountries} filterCountries={filterCountries}
          />
          { inputValue.length > 0 ? 

                <section className='h-full items-center pt-16 grid grid-cols-4 justify-between gap-5 gap-x-28 p-5 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 ss:grid-cols-1 xs:grid-cols-1 bg-slate-100 dark:bg-slate-800 border-none leading-relaxed'>

                {filteredCountries.map(({ name, capital, region, population, flag }) => (

                    <Link to={`/${capital}`} key={name}>

                    <article className="bg-white rounded shadow p-5 dark:bg-slate-700 w-auto h-80" >

                        <img src={flag} alt="Country Flag" className='w-full h-40 object-cover'></img>

                        <h2 className='font-bold text-gray-900 dark:text-white mt-5'>{name}</h2>

                        <ul className='list-none dark:text-white'>
                            <li>Population: {population}</li>
                            <li>Capital: {capital}</li>
                            <li>Region: {region}</li>
                        </ul>

                    </article>

                    </Link>
                ))}
                </section>
                :
                <section className='h-full items-center pt-16 grid grid-cols-4 justify-between gap-5 gap-x-28 p-5 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 ss:grid-cols-1 xs:grid-cols-1 bg-slate-100 dark:bg-slate-800 border-none leading-relaxed'>

                {countries.map(({ name, capital, region, population, flag }) => (

                    <Link to={`/${capital}`} key={name}>

                    <article className="bg-white rounded shadow p-5 dark:bg-slate-700 w-auto h-80" >

                        <img src={flag} alt="Country Flag" className='w-full h-40 object-fill'></img>

                        <h2 className='font-bold text-gray-900 dark:text-white mt-5'>{name}</h2>

                        <ul className='list-none dark:text-white'>
                            <li>Population: {population}</li>
                            <li>Capital: {capital}</li>
                            <li>Region: {region}</li>
                        </ul>

                    </article>

                    </Link>
                    
                ))}
                </section>}            
          </>
          )}

          
        </div>
    )
}

export default Countries;
