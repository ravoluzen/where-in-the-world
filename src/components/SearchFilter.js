import React from 'react'

export const SearchFilter = ({ inputValue, searchCountries, filterCountries }) => {

  return (
    <>
      <div className='bg-slate-100 dark:bg-slate-800 pt-16 flex flex-col items-start justify-between md:flex-row w-full'>

      <input
      type="text"
      placeholder='Search for a country'
      name='search'
      id='search'
      className="py-2 px-4 rounded shadow dark:bg-slate-700 dark:text-white dark:placeholder-white placeholder-gray-900 m-5 lg:w-1/3 w-half xs:w-4/5" 
      value={inputValue}
      onChange={(e) => searchCountries(e.target.value)}
      >

      </input>

      <select 
      name="countries-filter" 
      id="countries-filter" 
      value={inputValue}
      onChange={(e) => {
        filterCountries(e.target.value)
      }}
      className="py-2 px-4 rounded shadow m-5 dark:bg-slate-700 dark:text-white"
      >
        <option value="">Filter by Region</option>
        <option value="americas">Americas</option>
        <option value="africa">Africa</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
        
      </select>
      </div>
    </>
  )
}

