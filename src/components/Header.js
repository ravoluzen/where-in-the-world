import React from 'react'
import Toggle from './Toggle'

export const Header = () => {
  return (
    <>
      <header className='flex justify-between w-full p-5 shadow fixed bg-white dark:bg-slate-700'>
          <div>
              <h1 className="font-bold text-black dark:text-white">Where in the world?</h1>
          </div>
          <div>
              <Toggle />
          </div>
      </header>
    </>
  )
}
