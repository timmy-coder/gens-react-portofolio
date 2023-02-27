import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'

function Nav() {
  return (
      <nav className='py-10 mb-12 flex justify-between'>
        <h1 className='text-xl text-red'>Gens</h1>
        <ul className='flex items-center'>
            <li><BsFillMoonStarsFill className='cursor-pointer text-2xl'/></li>
            <li><a href="#">Resume</a></li>
        </ul>
      </nav>
  )
}

export default Nav
