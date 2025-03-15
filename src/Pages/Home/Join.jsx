import { Link } from "react-router-dom";
import { TbStack2Filled } from "react-icons/tb";

export default function Join() {
  return (
    <section className='py-8'>
        <div className="container mx-auto px-2">
            <h2 className='text-4xl font-bold text-gray-800'>Why you should Join</h2>

            <div className="w-full flex justify-center flex-wrap gap-x-5 gap-y-20 mt-20">

                <div className="relative w-[320px] p-8 border border-gray-200 rounded-sm">
                    <div className="absolute -top-8 left-2/4 -translate-x-2/4 text-white bg-cyan-500 py-3 px-5 rounded-md">
                      <TbStack2Filled className="text-4xl"/>
                    </div>
                    <h4 className="text-center mb-5 text-xl font-bold mt-5">No Investment Needed</h4>
                    <p className="text-justify my-2 text-gray-400">Earn upto 170$ every month with minimal effort.</p>
                    <div className="flex justify-center">
                      <Link to="" className="border-b-2 border-b-[#032642]">More</Link>
                    </div>
                </div>
                
                <div className="relative w-[320px] p-8 border border-gray-200 rounded-sm">
                    <div className="absolute -top-8 left-2/4 -translate-x-2/4 text-white bg-cyan-500 py-3 px-5 rounded-md">
                      <TbStack2Filled className="text-4xl"/>
                    </div>
                    <h4 className="text-center mb-5 text-xl font-bold mt-5">No Risk</h4>
                    <p className="text-justify my-2 text-gray-400">Your data and privacy are fully protected with secure access protocols.</p>
                    <div className="flex justify-center">
                      <Link to="" className="border-b-2 border-b-[#032642]">More</Link>
                    </div>
                </div>
                
                <div className="relative w-[320px] p-8 border border-gray-200 rounded-sm">
                    <div className="absolute -top-8 left-2/4 -translate-x-2/4 text-white bg-cyan-500 py-3 px-5 rounded-md">
                      <TbStack2Filled className="text-4xl"/>
                    </div>
                    <h4 className="text-center mb-5 text-xl font-bold mt-5">Guarranted Income</h4>
                    <p className="text-justify my-2 text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, earum non delectus voluptatum quos aliquam vel possimus unde pariatur optio?</p>
                    <div className="flex justify-center">
                      <Link to="" className="border-b-2 border-b-[#032642]">More</Link>
                    </div>
                </div>
                
                <div className="relative w-[320px] p-8 border border-gray-200 rounded-sm">
                    <div className="absolute -top-8 left-2/4 -translate-x-2/4 text-white bg-cyan-500 py-3 px-5 rounded-md">
                      <TbStack2Filled className="text-4xl"/>
                    </div>
                    <h4 className="text-center mb-5 text-xl font-bold mt-5">Help Poor Individual</h4>
                    <p className="text-justify my-2 text-gray-400">Make a global impact by empowering digital professionals in underserved regions.</p>
                    <div className="flex justify-center">
                      <Link to="" className="border-b-2 border-b-[#032642]">More</Link>
                    </div>
                </div>
                
                <div className="relative w-[320px] p-8 border border-gray-200 rounded-sm">
                    <div className="absolute -top-8 left-2/4 -translate-x-2/4 text-white bg-cyan-500 py-3 px-5 rounded-md">
                      <TbStack2Filled className="text-4xl"/>
                    </div>
                    <h4 className="text-center mb-5 text-xl font-bold mt-5">Earn Decent Amount</h4>
                    <p className="text-justify my-2 text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, earum non delectus voluptatum quos aliquam vel possimus unde pariatur optio?</p>
                    <div className="flex justify-center">
                      <Link to="" className="border-b-2 border-b-[#032642]">More</Link>
                    </div>
                </div>
                
                <div className="relative w-[320px] p-8 border border-gray-200 rounded-sm">
                    <div className="absolute -top-8 left-2/4 -translate-x-2/4 text-white bg-cyan-500 py-3 px-5 rounded-md">
                      <TbStack2Filled className="text-4xl"/>
                    </div>
                    <h4 className="text-center mb-5 text-xl font-bold mt-5">Earn By Refferal</h4>
                    <p className="text-justify my-2 text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, earum non delectus voluptatum quos aliquam vel possimus unde pariatur optio?</p>
                    <div className="flex justify-center">
                      <Link to="" className="border-b-2 border-b-[#032642]">More</Link>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}
