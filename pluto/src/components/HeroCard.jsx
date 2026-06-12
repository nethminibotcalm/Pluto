import React from 'react'
import heroBg from '../assets/hero-illustration.png'
import astronaut from '../assets/astronaut-tiger-wave.png'

export default function HeroCard() {
  return (
    <section className="border-4 border-black bg-[rgba(220,245,255,0.35)] p-4 max-w-5xl mx-auto mt-6">
      <div className="relative bg-[#03103b] text-center text-white rounded-sm overflow-hidden">
        <div className="bg-center bg-cover h-64 sm:h-96 flex items-center justify-center" style={{ backgroundImage: `url(${heroBg})` }}>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-[#ff9a2e]">PLUTO</h1>
        </div>
        <img src={astronaut} alt="astronaut" className="absolute -bottom-6 right-6 w-24 sm:w-40" />
      </div>
    </section>
  )
}
























