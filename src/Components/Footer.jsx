import React from 'react'

export default function Footer() {
  return (
    <footer className='py-20 bg-[#fff9f9]'>
        <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-5">
                
                <div className='col-span-12 md:col-span-8'>
                    <h3>About Us</h3>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero nulla dicta deleniti aperiam totam, voluptate ipsum! Doloribus consequatur tempora fuga.
                    </p>
                </div>

                <div className='col-span-12 md:col-span-4'>
                    <h3>Join Our Newsletter</h3>

                    <p>Kamrangir Char, Dhaka, Bangladesh</p>
                    <p>example@gmail.com</p>
                </div>
            </div>
        </div>
    </footer>
  )
}
