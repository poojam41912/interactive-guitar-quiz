'use client'

import Image from 'next/image'

export default function StartScreen() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* Header Section - Brown */}
      <header className="bg-white py-4 px-6 relative flex items-center justify-center">
        {/* Logo on top-left */}
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
          <Image
            src="/images/logo-original.png"
            alt="Logo"
            width={50}
            height={50}
            className="rounded"
          />
        </div>
        {/* Welcome Note in center */}
        <h2 className="text-lg md:text-xl font-semibold text-black text-center">
          👋 Welcome! Let’s find the guitar that fits you best.
        </h2>
      </header>

      {/* Main Content - Centered */}
      <main className="flex-grow flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          🎸 What would you play first if guitar was yours today?
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Answer a few quick questions and we’ll match you with the perfect guitar.
        </p>
        <a
          href="/quiz"
          className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl text-lg font-semibold transition"
        >
          Start Journey
        </a>
      </main>

      {/* Footer - Brown */}
      <footer className="bg-white text-center text-black py-4">
        © 2025 Interactive Guitar Match. All rights reserved.
      </footer>
    </div>
  )
}
