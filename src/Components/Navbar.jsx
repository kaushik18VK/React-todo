import React from 'react'

const NavBar = () => {
  return (
    <nav className="flex justify-between bg-stone-700 text-white py-2">
        <div className="log">
            <span className='font-bold text-xl mx-8'>
                iTask 
            </span>
        </div>
        <ul className="flex gap-8 mx-9">
            <li className='cursor-pointer hover:font-bold'>Home</li>
            <li className='cursor-pointer hover:font-bold'>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default NavBar
