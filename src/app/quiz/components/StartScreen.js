'use client'

export default function StartScreen() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center text-white px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        🎸 What would you play first if guitar was yours today?
      </h1>
      <p className="text-lg md:text-xl mb-6">
        Answer a few quick questions and we’ll match you with the perfect guitar.
      </p>
      <a
        href="/quiz"
        className="bg-[#8B4513] hover:bg-[#5c2e0d] text-white py-3 px-6 rounded-xl text-lg font-semibold transition"
      >
        Start Journey
      </a>
    </div>
  )
}
