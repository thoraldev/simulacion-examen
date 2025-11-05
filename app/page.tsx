"use client"

import { useState } from "react"
import { LoginScreen } from "@/components/login-screen"
import { ExamInterface } from "@/components/exam-interface"
import { ResultsScreen } from "@/components/results-screen"

export default function Home() {
  const [step, setStep] = useState<"login" | "exam" | "results">("login")
  const [userData, setUserData] = useState({
    name: "",
    startTime: "",
    endTime: "",
  })
  const [examResults, setExamResults] = useState({
    score: 0,
    totalQuestions: 0,
    correctAnswers: 0,
    duration: 0,
  })

  const handleLogin = (name: string) => {
    setUserData({
      name,
      startTime: new Date().toISOString(),
      endTime: "",
    })
    setStep("exam")
  }

  const handleExamComplete = (score: number, totalQuestions: number, correctAnswers: number, duration: number) => {
    const endTime = new Date().toISOString()
    setUserData((prev) => ({ ...prev, endTime }))
    setExamResults({ score, totalQuestions, correctAnswers, duration })
    setStep("results")
  }

  const handleRestart = () => {
    setStep("login")
    setUserData({
      name: "",
      startTime: "",
      endTime: "",
    })
    setExamResults({
      score: 0,
      totalQuestions: 0,
      correctAnswers: 0,
      duration: 0,
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {step === "login" && <LoginScreen onLogin={handleLogin} />}
      {step === "exam" && <ExamInterface userData={userData} onComplete={handleExamComplete} />}
      {step === "results" && <ResultsScreen userData={userData} results={examResults} onRestart={handleRestart} />}
    </div>
  )
}
