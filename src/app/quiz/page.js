'use client'

import { useState } from 'react'
import quizData from '@/utils/quizData'
import QuestionCard from '@/components/QuestionCard'
import ResultCard from '@/components/ResultCard'
import { AnimatePresence, motion } from 'framer-motion'

export default function QuizPage() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState([])

  const handleAnswer = (answer) => {
    setAnswers((prev) => [...prev, answer])
    setCurrent((prev) => prev + 1)
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-black p-4 text-white">
      <AnimatePresence mode="wait">
        {current < quizData.length ? (
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-xl space-y-6"
          >
            {/* ✅ Progress Indicator */}
            <div className="text-right text-sm text-gray-400">
              Question {current + 1} of {quizData.length}
            </div>

            {/* ✅ Animated QuestionCard */}
            <QuestionCard
              question={quizData[current].question}
              options={quizData[current].options}
              onSelect={handleAnswer}
            />
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-xl"
          >
            {/* ✅ Final ResultCard */}
            <ResultCard answers={answers} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
