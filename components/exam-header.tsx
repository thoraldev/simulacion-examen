"use client"

import { Button } from "@/components/ui/button"
import { QuestionMonitor } from "./question-monitor"
import { useState, useEffect, useRef } from "react"
import { Clock, ChevronLeft, ChevronRight, X, Highlighter } from "lucide-react"

interface ExamHeaderProps {
  userData: {
    name: string
  }
  elapsedTime: number
  maxTime: number
  currentQuestion: number
  totalQuestions: number
  answers: Record<number, number>
  highlighted: Set<number>
  onPrevious: () => void
  onNext: () => void
  onHighlight: () => void
  onFinish: () => void
  onGoToQuestion: (index: number) => void
  getQuestionStatus: (index: number) => "answered" | "highlighted" | "unanswered"
}

export function ExamHeader({
  userData,
  elapsedTime,
  maxTime,
  currentQuestion,
  totalQuestions,
  onPrevious,
  onNext,
  onHighlight,
  onFinish,
  onGoToQuestion,
  getQuestionStatus,
}: ExamHeaderProps) {
  const [showTime, setShowTime] = useState(false)
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null)

  const formatTime = (seconds: number) => {
    const remainingSeconds = maxTime - seconds
    const hours = Math.floor(remainingSeconds / 3600)
    const minutes = Math.floor((remainingSeconds % 3600) / 60)
    const secs = remainingSeconds % 60
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleShowTime = () => {
    setShowTime(true)
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current)
    }
    hideTimerRef.current = setTimeout(() => {
      setShowTime(false)
    }, 5000)
  }

  const handleHideTime = () => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current)
    }
    setShowTime(false)
  }

  useEffect(() => {
    return () => {
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current)
      }
    }
  }, [])

  return (
    <div className="border-b border-gray-300 bg-[#003d7a] shadow-lg">
      {/* Top bar with user info and time */}
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-6">
          <div className="text-sm text-white">
            <span className="font-semibold">Sustentante:</span> {userData.name}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Button
              onMouseEnter={handleShowTime}
              onMouseLeave={handleHideTime}
              onClick={handleShowTime}
              variant="secondary"
              size="sm"
              className="h-8 bg-white text-[#003d7a] hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-md"
            >
              <Clock className="h-4 w-4 mr-2" />
              Ver tiempo
            </Button>
            {showTime && (
              <div className="absolute right-0 top-full mt-2 bg-white border-2 border-[#003d7a] rounded-lg px-4 py-2 shadow-xl z-50 whitespace-nowrap animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="text-sm text-[#003d7a] font-semibold">Tiempo restante: {formatTime(elapsedTime)}</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="flex items-center justify-between border-t border-[#004a94] bg-[#004a94] px-6 py-2">
        <div className="flex items-center gap-2">
          <Button
            onClick={onHighlight}
            variant="secondary"
            size="sm"
            className="h-8 bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition-all duration-300 hover:scale-105 shadow-md"
          >
            <Highlighter className="h-4 w-4 mr-1" />
            Resaltar pregunta
          </Button>
          <QuestionMonitor
            currentQuestion={currentQuestion}
            totalQuestions={totalQuestions}
            onGoToQuestion={onGoToQuestion}
            getQuestionStatus={getQuestionStatus}
          />
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={onPrevious}
            disabled={currentQuestion === 0}
            variant="secondary"
            size="sm"
            className="h-8 bg-white text-[#003d7a] hover:bg-gray-100 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 shadow-md"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Anterior
          </Button>
          <Button
            onClick={onNext}
            disabled={currentQuestion === totalQuestions - 1}
            variant="secondary"
            size="sm"
            className="h-8 bg-white text-[#003d7a] hover:bg-gray-100 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 shadow-md"
          >
            Siguiente
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
          <Button
            onClick={onFinish}
            variant="destructive"
            size="sm"
            className="h-8 bg-red-600 text-white hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-md"
          >
            <X className="h-4 w-4 mr-1" />
            Terminar
          </Button>
        </div>
      </div>
    </div>
  )
}
