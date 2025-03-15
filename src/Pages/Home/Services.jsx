import WorkSurvey from '../../assets/Services/work-survey.jpg';
import RentPC from '../../assets/Services/pc-rent.avif';
import MicroWork from '../../assets/Services/micro-work.jpg';
import Workers from '../../assets/Services/workers.jpg';
import Skilled from '../../assets/Services/skilled.jpg';
import It from '../../assets/Services/it.jpg';


export default function Services() {
  return (
    <section className='py-8'>
        <div className="container mx-auto px-2">
            <h2 className='text-4xl font-bold text-gray-800'>Types of Service We Provide</h2>

            <div className="w-full flex justify-center flex-wrap gap-5 mt-10">

                <div className='w-[400px] border border-gray-500 rounded-sm hover:bg-orange-100 py-12'>
                    <div className="flex flex-col justify-center items-center">
                        <img src={WorkSurvey} className='h-32 rounded-sm' alt="" />
                        <h3 className='text-lg font-bold hover:text-orange-400 mt-2'>Work On Survey Accounts</h3>
                    </div>
                </div>
                
                <div className='w-[400px] border border-gray-500 rounded-sm hover:bg-orange-100 py-12'>
                    <div className="flex flex-col justify-center items-center">
                        <img src={RentPC} className='h-32 rounded-sm' alt="" />
                        <h3 className='text-lg font-bold hover:text-orange-400 mt-2'>We rent your PC</h3>
                    </div>
                </div>
                
                <div className='w-[400px] border border-gray-500 rounded-sm hover:bg-orange-100 py-12'>
                    <div className="flex flex-col justify-center items-center">
                        <img src={MicroWork} className='h-32 rounded-sm' alt="" />
                        <h3 className='text-lg font-bold hover:text-orange-400 mt-2'>Work On Micro Workers Sites</h3>
                    </div>
                </div>

                <div className='w-[400px] border border-gray-500 rounded-sm hover:bg-orange-100 py-12'>
                    <div className="flex flex-col justify-center items-center">
                        <img src={Workers} className='h-32 rounded-sm' alt="" />
                        <h3 className='text-lg font-bold hover:text-orange-400 mt-2'>Provides Cheaper Workers</h3>
                    </div>
                </div>
                
                <div className='w-[400px] border border-gray-500 rounded-sm hover:bg-orange-100 py-12'>
                    <div className="flex flex-col justify-center items-center">
                        <img src={Skilled} className='h-32 rounded-sm' alt="" />
                        <h3 className='text-lg font-bold hover:text-orange-400 mt-2'>Provides Skilled Workers</h3>
                    </div>
                </div>
                
                <div className='w-[400px] border border-gray-500 rounded-sm hover:bg-orange-100 py-12'>
                    <div className="flex flex-col justify-center items-center">
                        <img src={It} className='h-32 rounded-sm' alt="" />
                        <h3 className='text-lg font-bold hover:text-orange-400 mt-2'>Provides IT Services</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
