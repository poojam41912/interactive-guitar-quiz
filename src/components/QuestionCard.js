'use client'

export default function QuestionCard({ question, onAnswer }) {
  return (
    <div className="bg-white bg-opacity-90 rounded-2xl p-10 shadow-2xl text-black max-w-3xl w-full mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-black">
        {question.question}
      </h2>

      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(question.id, option)}
            className="w-full bg-[#8B4513] hover:bg-[#5c2e0d] text-white py-4 px-6 rounded-xl text-lg font-semibold transition"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
