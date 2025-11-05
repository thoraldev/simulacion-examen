"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User, GraduationCap } from "lucide-react"

interface LoginScreenProps {
  onLogin: (name: string) => void
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [name, setName] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      onLogin(name.trim())
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl border-0 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#003d7a] to-[#0066cc] flex items-center justify-center shadow-lg animate-in zoom-in duration-500">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-[#003d7a] animate-in fade-in slide-in-from-top duration-500">
            Sistema de simulacion en linea
          </h1>
          <p className="mt-2 text-sm text-gray-600">Prueba de Conocimientos PLD-FT</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <User className="h-4 w-4 text-[#003d7a]" />
              Nombre completo
            </Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ingrese su nombre completo"
              className="h-11 border-gray-300 focus:border-[#003d7a] focus:ring-2 focus:ring-[#003d7a] focus:ring-opacity-20 transition-all duration-300"
              required
            />
          </div>

          <Button
            type="submit"
            className="h-11 w-full bg-[#003d7a] text-white hover:bg-[#002a54] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Comenzar evaluación
          </Button>
        </form>

        <div className="mt-6 border-t border-gray-200 pt-6">
          <p className="text-center text-xs text-gray-500">
            Creado por Alejandro Toral 🚀
          </p>
        </div>
      </div>
    </div>
  )
}
