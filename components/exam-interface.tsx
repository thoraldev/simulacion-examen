"use client"

import { useState, useEffect } from "react"
import { ExamHeader } from "./exam-header"
import { QuestionsScrollBar } from "./questions-scroll-bar"
import { QuestionPanel } from "./question-panel"
import { AnswerPanel } from "./answer-panel"
import { FinishModal } from "./finish-modal"
import { SAMPLE_QUESTIONS } from "@/lib/exam-data"

interface ExamInterfaceProps {
  userData: {
    name: string
    startTime: string
  }
  onComplete: (score: number, totalQuestions: number, correctAnswers: number, duration: number) => void
}

export function ExamInterface({ userData, onComplete }: ExamInterfaceProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [highlighted, setHighlighted] = useState<Set<number>>(new Set())
  const [showFinishModal, setShowFinishModal] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [isActive, setIsActive] = useState(true)
  const [lastActivity, setLastActivity] = useState(Date.now())

  const totalQuestions = SAMPLE_QUESTIONS.length
  const maxTime = 4 * 60 * 60 // 4 hours in seconds

  // Timer
  useEffect(() => {
    const interval = setInterval(() => {
      if (isActive) {
        setElapsedTime((prev) => {
          if (prev >= maxTime) {
            setShowFinishModal(true)
            return prev
          }
          return prev + 1
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [isActive, maxTime])

  // Inactivity detector
  useEffect(() => {
    const checkInactivity = setInterval(() => {
      const now = Date.now()
      if (now - lastActivity > 5 * 60 * 1000 && isActive) {
        // 5 minutes
        setIsActive(false)
        alert("Su sesión ha sido bloqueada por inactividad. Espere 5 minutos para continuar.")
      }
    }, 1000)

    return () => clearInterval(checkInactivity)
  }, [lastActivity, isActive])

  // Track activity
  useEffect(() => {
    const handleActivity = () => {
      setLastActivity(Date.now())
      if (!isActive) {
        setIsActive(true)
      }
    }

    window.addEventListener("mousemove", handleActivity)
    window.addEventListener("keydown", handleActivity)
    window.addEventListener("click", handleActivity)

    return () => {
      window.removeEventListener("mousemove", handleActivity)
      window.removeEventListener("keydown", handleActivity)
      window.removeEventListener("click", handleActivity)
    }
  }, [isActive])

  const handleAnswer = (questionIndex: number, answerIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: answerIndex }))
    // Remove highlight when answered
    setHighlighted((prev) => {
      const newSet = new Set(prev)
      newSet.delete(questionIndex)
      return newSet
    })
  }

  const handleHighlight = () => {
    if (answers[currentQuestion] === undefined) {
      setHighlighted((prev) => {
        const newSet = new Set(prev)
        if (newSet.has(currentQuestion)) {
          newSet.delete(currentQuestion)
        } else {
          newSet.add(currentQuestion)
        }
        return newSet
      })
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handleGoToQuestion = (index: number) => {
    setCurrentQuestion(index)
  }

  const handleFinish = () => {
    setShowFinishModal(true)
  }

  const handleConfirmFinish = () => {
    let correctAnswers = 0
    SAMPLE_QUESTIONS.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correctAnswers++
      }
    })

    const score = Math.round((correctAnswers / totalQuestions) * 100)
    onComplete(score, totalQuestions, correctAnswers, elapsedTime)
  }

  const getQuestionStatus = (index: number) => {
    if (answers[index] !== undefined) return "answered"
    if (highlighted.has(index)) return "highlighted"
    return "unanswered"
  }

  return (
    <div className="flex h-screen flex-col bg-white">
      <ExamHeader
        userData={userData}
        elapsedTime={elapsedTime}
        maxTime={maxTime}
        currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
        answers={answers}
        highlighted={highlighted}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onHighlight={handleHighlight}
        onFinish={handleFinish}
        onGoToQuestion={handleGoToQuestion}
        getQuestionStatus={getQuestionStatus}
      />

      <QuestionsScrollBar
        totalQuestions={totalQuestions}
        currentQuestion={currentQuestion}
        onGoToQuestion={handleGoToQuestion}
        getQuestionStatus={getQuestionStatus}
      />

      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/2 border-r border-gray-300">
          <QuestionPanel question={SAMPLE_QUESTIONS[currentQuestion]} />
        </div>
        <div className="w-1/2">
          <AnswerPanel
            question={SAMPLE_QUESTIONS[currentQuestion]}
            selectedAnswer={answers[currentQuestion]}
            onSelectAnswer={(answerIndex) => handleAnswer(currentQuestion, answerIndex)}
          />
        </div>
      </div>

      <FinishModal
        isOpen={showFinishModal}
        onClose={() => setShowFinishModal(false)}
        onConfirm={handleConfirmFinish}
        answeredCount={Object.keys(answers).length}
        totalQuestions={totalQuestions}
      />
    </div>
  )
}
