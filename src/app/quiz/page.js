'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import quizData from '@/data/quizData'
import QuestionCard from '@/components/QuestionCard'
import ResultCard from '@/components/ResultCard'

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [showResult, setShowResult] = useState(false)
  const router = useRouter()

  const handleAnswer = (questionIndex, selectedOption) => {
    const updatedAnswers = [...answers]
    updatedAnswers[questionIndex] = selectedOption
    setAnswers(updatedAnswers)

    if (questionIndex + 1 < quizData.length) {
      setCurrentQuestion(questionIndex + 1)
    } else {
      setShowResult(true)

      // ✅ Redirect to WhatsApp page after 1.5s
      setTimeout(() => {
        router.push('/whatsapp')
      }, 1500)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      {!showResult ? (
        <QuestionCard
          question={{ ...quizData[currentQuestion], id: currentQuestion }}
          onAnswer={handleAnswer}
        />
      ) : (
        <ResultCard answers={answers} />
      )}
    </div>
  )
}
