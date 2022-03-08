import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Country = () => {
    const [countryDetail, setCountryDetail] = useState([])
    const { capital } = useParams();



    useEffect(() => {
      const getCountryDetail = async () => {
        const response = await fetch(`https://restcountries.com/v2/capital/${capital}`)
        const details = await response.json();
        
        setCountryDetail(details);
    }
        getCountryDetail()
    }, [capital])

  return (
    <>
      
      <section className='pt-32 flex flex-col items-start w-screen h-screen shadow leading-loose dark:bg-slate-800 dark:text-white'>

          {countryDetail.map(({ name, nativeName, population, region, subregion, capital, flag, topLevelDomain, currencies, languages }) => (

            <div>

              <div className='m-5'>
                <Link to='/' className='rounded shadow px-4 py-2 m-5 dark:bg-slate-700'>Back</Link>
              </div>

            <main className='grid grid-cols-2 justify-between gap-16 items-center p-5 m-5 lg:grid-cols-2 md:grid-cols-1 xs:grid-cols-1'>

              <img src={flag} alt="Country Flag" className='xs:w-full'></img>

              <article key={capital} className="">
                  
                  <h1 className='text-xl font-bold'>{name}</h1>

                  <section className='grid grid-cols-2 mt-5 pt-5 lg:grid-cols-2 md:grid-cols-1 xs:grid-cols-1 xs:mt-0 xs:pt-0'>

                  <ul className='list-none mt-5'>
                    <li><span>Native Name: </span>{nativeName}</li>
                    <li><span>Population: </span>{population}</li>
                    <li><span>Region: </span>{region}</li>
                    <li><span>Sub Region: </span>{subregion}</li>
                    <li><span>Capital: </span>{capital}</li>
                  </ul>

                  <ul className='mt-10'>
                    <li><span>Top Level Domain: </span>{topLevelDomain[0]}</li>
                    <li><span>Currencies: </span>{currencies[0].name}</li>
                    <li><span>Languages: </span>{languages[0].name}</li>
                  </ul>

                  </section>

              </article>

            </main>

            </div>

          ))}
      </section>
    </>
  )
}
