import { MdKeyboardDoubleArrowRight } from "react-icons/md";


export default function Works() {
  return (
    <section className='py-5'>
        <div className="container mx-auto px-2">
            
            
            <div className="py-12 bg-[#032642] p-5 rounded-sm">
                <h4 className="text-center text-yellow-600 font-bold flex items-center justify-center text-xl">
                    <MdKeyboardDoubleArrowRight className="text-2xl"/> HOW IT WORKS
                </h4>
                <h3 className="my-2 text-center text-5xl font-bold text-white">Convenient Service Access</h3>
           
                <div className="mt-20">
                    <div className="flex flex-col md:flex-row justify-center gap-5">
                        <div className="text-center">
                            <img src="https://template.binaryvines.com/servat/assets/images/icons/service-01.png" className="mb-2 h-24 w-24 mx-auto border border-yellow-600 p-3 rounded-full" alt="" />

                            <h5 className="text-xl text-white font-bold mb-2">Sign Up</h5>
                            <p className="text-white px-8">Fill out a quick registration form.</p>
                        </div>
                        
                        <div className="text-center">
                            <img src="https://template.binaryvines.com/servat/assets/images/icons/service-02.png" className="mb-2 h-24 w-24 mx-auto border border-yellow-600 p-3 rounded-full" alt="" />

                            <h5 className="text-xl text-white font-bold mb-2">Share Access</h5>
                            <p className="text-white px-8">Follow our secure guidelines for sharing your computer or platforms.</p>
                        </div>
                        
                        <div className="text-center">
                            <img src="https://template.binaryvines.com/servat/assets/images/icons/service-03.png" className="mb-2 h-24 w-24 mx-auto border border-yellow-600 p-3 rounded-full" alt="" />

                            <h5 className="text-xl text-white font-bold mb-2">Earn Rewards</h5>
                            <p className="text-white px-8">Receive monthly payouts based on your participation.</p>
                        </div>
                    </div>
                </div>
            </div>


           
        </div>
    </section>
  )
}
