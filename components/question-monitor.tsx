"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { LayoutGrid, CheckCircle, AlertCircle, Circle } from "lucide-react"

interface QuestionMonitorProps {
  currentQuestion: number
  totalQuestions: number
  onGoToQuestion: (index: number) => void
  getQuestionStatus: (index: number) => "answered" | "highlighted" | "unanswered"
}

export function QuestionMonitor({
  currentQuestion,
  totalQuestions,
  onGoToQuestion,
  getQuestionStatus,
}: QuestionMonitorProps) {
  const [open, setOpen] = useState(false)

  const getButtonColor = (index: number) => {
    const status = getQuestionStatus(index)
    if (index === currentQuestion) {
      return "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
    }
    if (status === "answered") {
      return "bg-green-600 text-white hover:bg-green-700 shadow-md"
    }
    if (status === "highlighted") {
      return "bg-yellow-400 text-gray-900 hover:bg-yellow-500 shadow-md"
    }
    return "bg-gray-800 text-white hover:bg-gray-700"
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="secondary" size="sm" className="h-9 gap-2 bg-white text-[#003d7a] shadow-sm hover:bg-gray-100">
          <LayoutGrid className="h-4 w-4" />
          Monitor ({currentQuestion + 1}/{totalQuestions})
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[420px] p-5 shadow-xl" align="end">
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center gap-2">
              <LayoutGrid className="h-5 w-5 text-[#003d7a]" />
              <h3 className="font-semibold text-sm text-gray-900">Monitor de Preguntas</h3>
            </div>
            <div className="text-xs font-medium text-gray-500">
              Pregunta {currentQuestion + 1} de {totalQuestions}
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <Circle className="h-3.5 w-3.5 text-gray-800" />
              <span>Sin contestar</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="h-3.5 w-3.5 text-green-600" />
              <span>Contestada</span>
            </div>
            <div className="flex items-center gap-1.5">
              <AlertCircle className="h-3.5 w-3.5 text-yellow-500" />
              <span>Resaltada</span>
            </div>
          </div>

          <div className="grid grid-cols-10 gap-2 max-h-[300px] overflow-y-auto rounded-lg bg-gray-50 p-3">
            {Array.from({ length: totalQuestions }, (_, i) => (
              <Button
                key={i}
                onClick={() => {
                  onGoToQuestion(i)
                  setOpen(false)
                }}
                className={`h-9 w-9 p-0 text-xs font-semibold transition-all duration-200 ${getButtonColor(i)}`}
              >
                {i + 1}
              </Button>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
