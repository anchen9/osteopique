"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export function FallRiskGauge() {
  // In a real app, this would come from the wearable device and AI analysis
  const [fallRisk, setFallRisk] = useState(35)

  const getColor = (risk: number) => {
    if (risk < 30) return "#22c55e" // green
    if (risk < 60) return "#eab308" // yellow
    return "#ef4444" // red
  }

  const getRiskLevel = (risk: number) => {
    if (risk < 30) return "Low"
    if (risk < 60) return "Moderate"
    return "High"
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-48 h-24 overflow-hidden mb-4">
        <div className="absolute w-48 h-48 rounded-full border-8 border-[#e6f2ff] bottom-0"></div>
        <div
          className="absolute w-48 h-48 rounded-full border-8 bottom-0 transition-all duration-500"
          style={{
            borderColor: `${getColor(fallRisk)} transparent transparent transparent`,
            transform: `rotate(${(fallRisk / 100) * 180}deg)`,
          }}
        ></div>
        <div className="absolute bottom-0 left-1/2 w-1 h-8 bg-[#0c4a6e] origin-bottom transform -translate-x-1/2"></div>
      </div>

      <div className="text-2xl font-bold" style={{ color: getColor(fallRisk) }}>
        {getRiskLevel(fallRisk)} Risk
      </div>

      <div className="text-lg mt-2 text-[#0c4a6e]">Fall Risk: {fallRisk}%</div>

      <div className="w-full flex justify-between mt-4 px-4">
        <span className="text-green-500 font-semibold">Low</span>
        <span className="text-yellow-500 font-semibold">Moderate</span>
        <span className="text-red-500 font-semibold">High</span>
      </div>

      <Card className="w-full mt-6 p-4 bg-[#e6f2ff] border-[#4299e1]/30">
        <h3 className="text-lg font-semibold mb-2 text-[#0c4a6e]">Factors Affecting Your Fall Risk</h3>
        <ul className="list-disc pl-6 text-[#0c4a6e]">
          <li>Gait stability: Moderate</li>
          <li>Balance: Good</li>
          <li>Reaction time: Needs improvement</li>
          <li>Muscle strength: Moderate</li>
        </ul>
      </Card>
    </div>
  )
}

