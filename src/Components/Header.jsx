import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='py-2 bg-cyan-500 text-white fixed top-0 left-0 w-full z-50'>
        <div className="container mx-auto px-2">
           <div className="flex justify-between items-center">

                <div>
                    <strong className='text-xl'><Link to="">Digital Bridge Network</Link></strong>
                </div>

                <div className='hidden md:block'>
                    <ul className='flex gap-3 font-medium'>
                        <li><Link to="">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="contact">Contact</Link></li>
                    </ul>
                </div>

                <div className='hidden md:block'>
                    <div className='flex gap-5'>
                    <button className='text-sm font-bold border py-2 px-12 rounded-sm cursor-pointer'>Sign In</button>
                    <button className='text-sm font-bold border py-2 px-12 rounded-sm cursor-pointer'>Register</button>
                </div>
                </div>
            </div> 
        </div>
    </header>
  )
}
