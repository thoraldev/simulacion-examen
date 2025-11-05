"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Download,
  CheckCircle2,
  XCircle,
  Clock,
  Calendar,
  User,
  RotateCcw,
  Award,
  Github,
  MessageCircle,
  Code2,
} from "lucide-react"

interface ResultsScreenProps {
  userData: {
    name: string
    startTime: string
    endTime: string
  }
  results: {
    score: number
    totalQuestions: number
    correctAnswers: number
    duration: number
  }
  onRestart: () => void
}

export function ResultsScreen({ userData, results, onRestart }: ResultsScreenProps) {
  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours}h ${minutes}m ${secs}s`
  }

  const formatDateTime = (isoString: string) => {
    const date = new Date(isoString)
    return date.toLocaleString("es-MX", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreStatus = (score: number) => {
    if (score >= 80) return "APROBADO"
    if (score >= 60) return "SUFICIENTE"
    return "NO APROBADO"
  }

  const handleDownloadReport = () => {
    const reportContent = `
INFORME DE EVALUACIÓN PLD-FT
═══════════════════════════════════════════════════════════

DATOS DEL SUSTENTANTE
─────────────────────────────────────────────────────────
Nombre: ${userData.name}
Fecha de inicio: ${formatDateTime(userData.startTime)}
Fecha de finalización: ${formatDateTime(userData.endTime)}

RESULTADOS DE LA EVALUACIÓN
─────────────────────────────────────────────────────────
Puntuación: ${results.score}%
Estado: ${getScoreStatus(results.score)}
Respuestas correctas: ${results.correctAnswers} de ${results.totalQuestions}
Respuestas incorrectas: ${results.totalQuestions - results.correctAnswers}
Duración del examen: ${formatDuration(results.duration)}

DETALLES
─────────────────────────────────────────────────────────
Total de preguntas: ${results.totalQuestions}
Preguntas contestadas: ${results.totalQuestions}
Porcentaje de aciertos: ${results.score}%

═══════════════════════════════════════════════════════════
Centro Nacional de Evaluación para la Educación Superior, A.C.
Prueba de Conocimientos en Materia de Prevención de Lavado 
de Dinero y Financiamiento al Terrorismo (PLD-FT)
═══════════════════════════════════════════════════════════
    `.trim()

    const blob = new Blob([reportContent], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `Informe_PLD-FT_${userData.name.replace(/\s+/g, "_")}_${new Date().toISOString().split("T")[0]}.txt`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4">
      <Card className="w-full max-w-3xl bg-white p-8 shadow-2xl border-0 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#003d7a] to-[#0066cc] px-6 py-2 shadow-lg">
            <Code2 className="h-5 w-5 text-white" />
            <span className="text-lg font-bold text-white">ThoralDev</span>
          </div>
        </div>

        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[#003d7a] to-[#0066cc] flex items-center justify-center shadow-lg animate-in zoom-in duration-500">
              <Award className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-[#003d7a] animate-in fade-in slide-in-from-top duration-500">
            Evaluación finalizada
          </h1>
          <p className="mt-2 text-gray-600">Prueba de conocimientos PLD-FT</p>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-blue-100 p-2">
                <User className="h-5 w-5 text-[#003d7a]" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Sustentante</p>
                <p className="font-semibold text-gray-900">{userData.name}</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-green-100 p-2">
                <Clock className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Duración</p>
                <p className="text-sm font-semibold text-gray-900">{formatDuration(results.duration)}</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-purple-100 p-2">
                <Calendar className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Fecha de inicio</p>
                <p className="text-sm font-semibold text-gray-900">{formatDateTime(userData.startTime)}</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-orange-100 p-2">
                <Calendar className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Fecha de finalización</p>
                <p className="text-sm font-semibold text-gray-900">{formatDateTime(userData.endTime)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 space-y-3">
          <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-green-100 p-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              </div>
              <span className="font-medium text-gray-700">Respuestas correctas</span>
            </div>
            <span className="text-xl font-bold text-green-600">{results.correctAnswers}</span>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-red-100 p-2">
                <XCircle className="h-5 w-5 text-red-600" />
              </div>
              <span className="font-medium text-gray-700">Respuestas incorrectas</span>
            </div>
            <span className="text-xl font-bold text-red-600">{results.totalQuestions - results.correctAnswers}</span>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-blue-100 p-2">
                <Award className="h-5 w-5 text-[#003d7a]" />
              </div>
              <span className="font-medium text-gray-700">Total de preguntas</span>
            </div>
            <span className="text-xl font-bold text-gray-900">{results.totalQuestions}</span>
          </div>
        </div>

        <div className="space-y-3">
          <Button
            onClick={handleDownloadReport}
            className="h-12 w-full bg-[#003d7a] text-white hover:bg-[#002a54] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            size="lg"
          >
            <Download className="mr-2 h-5 w-5" />
            Descargar Informe Completo
          </Button>

          <Button
            onClick={onRestart}
            variant="outline"
            className="h-12 w-full border-2 border-[#003d7a] text-[#003d7a] hover:bg-[#003d7a] hover:text-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg bg-transparent"
            size="lg"
          >
            <RotateCcw className="mr-2 h-5 w-5" />
            Realizar Nuevo Examen
          </Button>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <div className="mb-4 text-center">
            <p className="text-sm font-semibold text-gray-700 mb-3">Desarrollado por ThoralDev</p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://github.com/ThoralDev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:scale-105 hover:border-[#003d7a] hover:bg-[#003d7a] hover:text-white shadow-sm hover:shadow-md"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
              <a
                href="https://wa.me/+529982358520"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:scale-105 hover:border-green-500 hover:bg-green-500 hover:text-white shadow-sm hover:shadow-md"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>
          <p className="text-center text-xs text-gray-500">
            Simulador
          </p>
          <p className="mt-1 text-center text-xs text-gray-400">
            Este informe es un documento de práctica y no tiene validez oficial
          </p>
        </div>
      </Card>
    </div>
  )
}
