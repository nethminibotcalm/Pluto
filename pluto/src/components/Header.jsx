import React from 'react'
import logo from '../assets/mobile-mockup.png'

export default function Header() {
  return (
    <header className="bg-[#0f1b3a] text-white py-3 sticky top-0 z-20">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden">
            <img src={logo} alt="logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold">Pluto</span>
        </div>
        <button aria-label="menu" className="text-white text-2xl">☰</button>
      </div>
    </header>
  )
}
























