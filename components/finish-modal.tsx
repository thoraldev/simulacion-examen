"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle, CheckCircle2, XCircle, Info } from "lucide-react"

interface FinishModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  answeredCount: number
  totalQuestions: number
}

export function FinishModal({ isOpen, onClose, onConfirm, answeredCount, totalQuestions }: FinishModalProps) {
  const unansweredCount = totalQuestions - answeredCount

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#003d7a] to-[#0056b3] shadow-lg">
              <AlertTriangle className="h-6 w-6 text-white" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold text-[#003d7a]">Finalizar Evaluación</DialogTitle>
              <DialogDescription className="text-sm text-gray-600">Esta acción es definitiva</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-4 shadow-sm">
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Info className="h-4 w-4 text-gray-500" />
                  <span className="font-medium text-gray-700">Total de preguntas:</span>
                </div>
                <span className="font-semibold text-gray-900">{totalQuestions}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="font-medium text-gray-700">Preguntas contestadas:</span>
                </div>
                <span className="font-semibold text-green-600">{answeredCount}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <XCircle className="h-4 w-4 text-red-600" />
                  <span className="font-medium text-gray-700">Preguntas sin contestar:</span>
                </div>
                <span className="font-semibold text-red-600">{unansweredCount}</span>
              </div>
            </div>
          </div>

          {unansweredCount > 0 && (
            <div className="rounded-xl border border-red-200 bg-gradient-to-br from-red-50 to-red-100/50 p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                <p className="text-sm text-red-900">
                  <span className="font-semibold">Atención:</span> Tiene {unansweredCount} pregunta
                  {unansweredCount !== 1 ? "s" : ""} sin contestar. ¿Está seguro que desea finalizar la evaluación?
                </p>
              </div>
            </div>
          )}

          <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100/50 p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
              <p className="text-sm text-blue-900">
                Al confirmar, su evaluación será enviada y no podrá realizar cambios. Por favor, verifique que haya
                contestado todas las preguntas que desea antes de continuar.
              </p>
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button onClick={onClose} variant="outline" className="h-10 gap-2 bg-transparent">
            <XCircle className="h-4 w-4" />
            Cancelar
          </Button>
          <Button
            onClick={onConfirm}
            className="h-10 gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white shadow-md hover:from-red-700 hover:to-red-800"
          >
            <CheckCircle2 className="h-4 w-4" />
            Confirmar y Finalizar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
