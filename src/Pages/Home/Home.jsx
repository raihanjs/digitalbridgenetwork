import React from 'react'
import Hero from './Hero'
import Join from './Join'
import Services from './Services'
import Works from './Works'
import Opportunity from './Opportunity'

export default function Home() {
  return (
    <main>
      <Hero/>
      <Services/>
      <Works/>
      <Opportunity/>
      <Join/>
  </main>
  )
}
