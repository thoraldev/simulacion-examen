"use client"

import { CheckCircle2, Circle, ListChecks, Info } from "lucide-react"

interface Question {
  id: number
  text: string
  options: string[]
}

interface AnswerPanelProps {
  question: Question
  selectedAnswer?: number
  onSelectAnswer: (index: number) => void
}

export function AnswerPanel({ question, selectedAnswer, onSelectAnswer }: AnswerPanelProps) {
  return (
    <div className="w-[500px] overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <ListChecks className="h-6 w-6 text-[#003d7a]" />
          <h3 className="text-lg font-semibold text-gray-900">Opciones de Respuesta</h3>
        </div>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onSelectAnswer(index)}
              className={`group flex w-full items-start gap-3 rounded-xl border-2 p-4 text-left transition-all duration-200 ${
                selectedAnswer === index
                  ? "border-[#003d7a] bg-gradient-to-br from-blue-50 to-blue-100 shadow-md"
                  : "border-gray-300 bg-white hover:border-gray-400 hover:bg-gray-50 hover:shadow-sm"
              }`}
            >
              <div className="mt-0.5 flex-shrink-0">
                {selectedAnswer === index ? (
                  <CheckCircle2 className="h-6 w-6 text-[#003d7a]" />
                ) : (
                  <Circle className="h-6 w-6 text-gray-400 transition-colors group-hover:text-gray-600" />
                )}
              </div>
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#003d7a] to-[#0056b3] text-xs font-bold text-white">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-xs font-semibold text-gray-500">Opción {String.fromCharCode(65 + index)}</span>
                </div>
                <p className="text-sm leading-relaxed text-gray-900">{option}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-gray-300 bg-white p-4 shadow-sm">
          <div className="flex items-start gap-2">
            <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-500" />
            <p className="text-xs text-gray-600">
              <span className="font-semibold">Nota:</span> Puede cambiar su respuesta en cualquier momento antes de
              finalizar la evaluación. Las preguntas contestadas se marcarán en verde en el monitor.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
