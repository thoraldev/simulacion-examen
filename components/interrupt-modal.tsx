"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface InterruptModalProps {
  isOpen: boolean
  onClose: () => void
  onResume: () => void
}

export function InterruptModal({ isOpen, onClose, onResume }: InterruptModalProps) {
  const [applicatorKey, setApplicatorKey] = useState("")
  const [applicatorPassword, setApplicatorPassword] = useState("")

  const handleResume = () => {
    // In real app, would validate applicator credentials
    if (applicatorKey && applicatorPassword) {
      setApplicatorKey("")
      setApplicatorPassword("")
      onResume()
    } else {
      alert("Por favor ingrese la clave y contraseña del aplicador")
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[#003d7a]">Interrumpir Evaluación</DialogTitle>
          <DialogDescription className="text-sm text-gray-600">
            Para interrumpir la evaluación, el aplicador debe ingresar su clave y contraseña. El tiempo seguirá
            transcurriendo durante la interrupción.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="applicator-key" className="text-sm font-medium">
              Clave del Aplicador
            </Label>
            <Input
              id="applicator-key"
              type="text"
              value={applicatorKey}
              onChange={(e) => setApplicatorKey(e.target.value)}
              placeholder="Ingrese la clave"
              className="h-10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="applicator-password" className="text-sm font-medium">
              Contraseña del Aplicador
            </Label>
            <Input
              id="applicator-password"
              type="password"
              value={applicatorPassword}
              onChange={(e) => setApplicatorPassword(e.target.value)}
              placeholder="Ingrese la contraseña"
              className="h-10"
            />
          </div>

          <div className="rounded-lg border border-orange-200 bg-orange-50 p-3">
            <p className="text-xs text-orange-900">
              <span className="font-semibold">Advertencia:</span> Durante la interrupción, el cronómetro continuará
              corriendo. Asegúrese de regresar antes de que finalice el tiempo de la evaluación.
            </p>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button onClick={onClose} variant="outline" className="h-10 bg-transparent">
            Cancelar
          </Button>
          <Button onClick={handleResume} className="h-10 bg-[#003d7a] text-white hover:bg-[#002a54]">
            Confirmar Interrupción
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
