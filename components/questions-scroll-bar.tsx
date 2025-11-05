"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

interface QuestionsScrollBarProps {
  totalQuestions: number
  currentQuestion: number
  onGoToQuestion: (index: number) => void
  getQuestionStatus: (index: number) => "answered" | "highlighted" | "unanswered"
}

export function QuestionsScrollBar({
  totalQuestions,
  currentQuestion,
  onGoToQuestion,
  getQuestionStatus,
}: QuestionsScrollBarProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" })
    }
  }

  const getStatusColor = (index: number) => {
    const status = getQuestionStatus(index)
    if (status === "answered") return "bg-green-600 text-white border-yellow-400 shadow-md"
    if (status === "highlighted") return "bg-yellow-400 text-gray-900 border-yellow-500 shadow-md"
    return "bg-white text-gray-900 border-gray-300 hover:border-[#003d7a]"
  }

  return (
    <div className="flex items-center gap-2 border-b border-gray-300 bg-gray-50 px-4 py-3 shadow-sm">
      {/* Scroll left button */}
      <Button
        onClick={scrollLeft}
        variant="outline"
        size="sm"
        className="h-9 w-9 shrink-0 p-0 bg-white hover:bg-gray-100 transition-all duration-300 hover:scale-110 shadow-sm"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {/* Scrollable questions container */}
      <div
        ref={scrollContainerRef}
        className="flex flex-1 gap-2 overflow-x-auto scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400"
        style={{ scrollbarWidth: "thin" }}
      >
        {Array.from({ length: totalQuestions }, (_, index) => (
          <button
            key={index}
            onClick={() => onGoToQuestion(index)}
            className={`flex h-9 min-w-[60px] shrink-0 items-center justify-center rounded-lg border-2 px-3 text-sm font-semibold transition-all duration-300 ${getStatusColor(
              index,
            )} ${currentQuestion === index ? "ring-2 ring-blue-500 ring-offset-2 scale-110" : "hover:scale-105"}`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Scroll right button */}
      <Button
        onClick={scrollRight}
        variant="outline"
        size="sm"
        className="h-9 w-9 shrink-0 p-0 bg-white hover:bg-gray-100 transition-all duration-300 hover:scale-110 shadow-sm"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
