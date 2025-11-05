import { HelpCircle, Info } from "lucide-react"

interface Question {
  id: number
  text: string
  options: string[]
}

interface QuestionPanelProps {
  question: Question
}

export function QuestionPanel({ question }: QuestionPanelProps) {
  return (
    <div className="flex-1 overflow-y-auto border-r border-gray-300 bg-white p-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#003d7a] to-[#0056b3] text-sm font-bold text-white shadow-lg">
            {question.id}
          </div>
          <div className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-[#003d7a]" />
            <h2 className="text-lg font-semibold text-gray-900">Pregunta {question.id}</h2>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm">
          <p className="text-base leading-relaxed text-gray-900">{question.text}</p>
        </div>

        <div className="mt-6 rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100/50 p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <p className="text-sm text-blue-900">
              <span className="font-semibold">Instrucción:</span> Lea cuidadosamente la pregunta y seleccione la opción
              que considere correcta en el panel derecho.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
