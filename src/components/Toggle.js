import React, { useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';

const Toggle = () => {

    const [darkTheme, setDarkTheme] = useState(false)

    const themeToggle = () => {
        document.body.classList.toggle("dark")
        setDarkTheme(!darkTheme)
    }
    return (
       <>
          <button onClick={themeToggle}>
              {darkTheme ? 
              <FaSun className='text-yellow-300 text-xl' />
              : 
              <FaMoon className='text-slate-400 text-xl'/>}
          </button>
       </>
    )
}

export default Toggle