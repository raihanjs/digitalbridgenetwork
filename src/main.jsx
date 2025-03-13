import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <Header/>
      <Home/>
    </>
  </StrictMode>,
)


function Header () {
  return (
    <header className='bg-cyan-500 py-3 text-white font-bold'>
      <div className="container mx-auto flex justify-between items-center">
        <strong className='text-xl'>Digital Bridge Network</strong>

        <ul className='flex items-center gap-3'>
          <li>Home</li>
          <li>About Us</li>
          <li>Programs</li>
          <li>How It Works</li>
          <li>Contact Us</li>
          <li>
            <button className='bg-rose-500 py-2 px-6 rounded-sm cursor-pointer'>Join Now</button>
          </li>
        </ul>
      </div>
    </header>
  )
}


function Home() {
  return (
    <main>

      <section className={`relative h-[calc(100vh-50px)] flex items-center justify-center bg-[url('../src/assets/home-bg.jpg')] bg-cover bg-center`}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/75"></div>

        {/* Content - Ensure Clickable */}
        <div className="relative z-10 text-white text-center px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Earn $100+ Monthly by Partnering with a Global Digital Workforce!
            </h2>
            <h4 className="mb-6">
              Contribute to empowering global professionals while earning effortless passive income by sharing digital access securely.
            </h4>
            <button className="bg-rose-500 py-2 px-12 rounded-sm text-white font-bold cursor-pointer">
              Start Earning Today!
            </button>
          </div>
        </div>
      </section>

      <section className='mt-20'>
         <div className="container mx-auto">
         <h3 className='text-xl font-bold text-justify'>
          "Are you in the US, UK, Canada, or Australia? If so, you can earn passive monthly income by simply sharing access to your computer or select digital platforms. This opportunity allows skilled professionals in developing regions to connect with global work opportunities while you enjoy monthly rewards."
          </h3>

          <h4 className='text-xl font-bold mt-5 mb-2'>Key benefites</h4>
          <ul className='ml-5 text-lg'>
            <li>💰 Earn $30-$100+ every month with minimal effort.</li>
            <li>🔒 Your data and privacy are fully protected with secure access protocols.</li>
            <li>🌍 Make a global impact by empowering digital professionals in underserved regions.</li>
            <li>🎯 Flexible participation — no special skills or time commitment needed.</li>
          </ul>
         </div>
      </section>


      <section className='mt-5'>
        <div className="container mx-auto">
          <h4 className='text-xl font-bold mt-5 mb-2'>How It Works (Brief Overview)</h4>
          <ul className='ml-5 text-lg'>
            <li>1. Sign Up – Fill out a quick registration form.</li>
            <li>2. Share Access – Follow our secure guidelines for sharing your computer or platforms.</li>
            <li>3. Earn Rewards – Receive monthly payouts based on your participation.</li>
          </ul>
        </div>
      </section>


      <section className='mt-5'>
        <div className="container mx-auto">
          <h4 className='text-xl font-bold mt-5 mb-2'>Why Join?</h4>
          <ul className='ml-5 text-lg'>
            <li>1. No Investment Required: You don’t need to pay anything to get started.</li>
            <li>2. Guaranteed Monthly Earnings: Reliable payouts with clear earning potential.</li>
            <li>3. Contribute to Social Impact: Your participation supports job creation worldwide.</li>
          </ul>
        </div>
      </section>
      
      <section className='mt-5 mb-20'>
        <div className="container mx-auto">
          <button className='mx-auto w-full bg-rose-500 text-white font-bold rounded-sm py-2'>Get Started Today</button>
        </div>
      </section>
    </main>
  );
}

