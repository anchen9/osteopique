"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface HealthScoreCardProps {
  score: number
}

export function HealthScoreCard({ score }: HealthScoreCardProps) {
  const [animatedScore, setAnimatedScore] = useState(0)

  useEffect(() => {
    // Animate the score from 0 to the actual value
    const timer = setTimeout(() => {
      setAnimatedScore(score)
    }, 500)

    return () => clearTimeout(timer)
  }, [score])

  // Determine color based on score
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreMessage = (score: number) => {
    if (score >= 80) return "Excellent"
    if (score >= 60) return "Good"
    if (score >= 40) return "Fair"
    return "Needs Attention"
  }

  return (
    <Card className="w-full border-[#4299e1]/30">
      <CardContent className="p-6 bg-[#e6f2ff] rounded-md">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-[#0c4a6e]">Bone Health Score</h2>

        <div className="flex flex-col items-center justify-center mb-4">
          <div className={`text-5xl md:text-6xl font-bold ${getScoreColor(score)} transition-all duration-1000`}>
            {animatedScore}
          </div>
          <div className="text-xl md:text-2xl mt-2 text-[#0c4a6e]">{getScoreMessage(score)}</div>
        </div>

        <Progress value={animatedScore} className="h-4 mb-4 bg-blue-100 transition-all duration-1000" />

        <p className="text-base md:text-lg text-center text-[#0c4a6e]">
          Your bone health score is calculated based on sensor data, activity levels, and your health history.
        </p>
      </CardContent>
    </Card>
  )
}

