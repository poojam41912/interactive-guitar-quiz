'use client'

import { motion } from 'framer-motion'

export default function QuestionCard({ question, options, onSelect }) {
  return (
    <motion.div
      className="bg-gray-900 p-8 rounded-xl shadow-2xl text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">{question}</h2>
      <div className="flex flex-col gap-4">
        {options.map((option, i) => (
          <button
            key={i}
            onClick={() => onSelect(option)}
            className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl text-lg font-medium transition"
          >
            {option}
          </button>
        ))}
      </div>
    </motion.div>
  )
}
