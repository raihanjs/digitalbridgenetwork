import React from 'react'

export default function Hero() {
  return (
    <section className={`mt-10 md:mt-12 relative h-[calc(100vh-50px)] bg-[url('../src/assets/home-bg.jpg')] bg-cover bg-top`}>
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10 text-white px-4">
            <div className='container mx-auto pt-[10vh] md:pt-[20vh]'>

                <div>
                    <h3 className='text-4xl font-bold'>Welcome TO <span className='text-orange-600'>Digital Bridge Network</span></h3>

                    <p className="my-5 text-lg text-justify">
                        People living in <span className='text-orange-400'>USA</span> have some resources which may not important for them. But, these resources can be helpful for the people of Asia. Which can make a family Self-reliant or make an earning source of a poor individual while all the controlls will be in your hand. In addition you can make some extra cash by sharing these resources.
                    </p>
                    
                    <p className="my-5 text-lg text-justify">
                        Or even you can hire workers with cheap rate from us for reduce your tedious task.
                    </p>

                    <button className='text-lg font-bold bg-[#f15a29] hover:bg-[#022744] py-2.5 px-12 rounded-sm cursor-pointer'>Know More</button>
                </div>

                <div>

                </div>
            </div>
      </div>
    </section>
  )
}
