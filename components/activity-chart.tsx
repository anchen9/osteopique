"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ActivityChartProps {
  detailed?: boolean
}

export function ActivityChart({ detailed = false }: ActivityChartProps) {
  // Sample data - in a real app, this would come from the wearable device
  const data = [
    { day: "Mon", steps: 3200, minutes: 22 },
    { day: "Tue", steps: 4500, minutes: 30 },
    { day: "Wed", steps: 2800, minutes: 18 },
    { day: "Thu", steps: 3600, minutes: 25 },
    { day: "Fri", steps: 4200, minutes: 28 },
    { day: "Sat", steps: 5100, minutes: 35 },
    { day: "Sun", steps: 3800, minutes: 26 },
  ]

  const [chartRendered, setChartRendered] = useState(false)

  useEffect(() => {
    // Simulate chart rendering
    const timer = setTimeout(() => {
      setChartRendered(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full">
      {detailed && (
        <div className="mb-6">
          <h3 className="text-xl mb-2 text-[#0c4a6e]">Weekly Activity Summary</h3>
          <p className="text-lg text-[#0c4a6e]">
            Average daily steps: 3,886
            <br />
            Average active minutes: 26 min/day
          </p>
        </div>
      )}

      <div className="relative w-full h-[300px] bg-white rounded-lg overflow-hidden">
        {chartRendered ? (
          <div className="w-full h-full">
            {/* Using next/image for SVG chart */}
            <Image
              src="/activity-chart.svg"
              alt="Activity chart showing steps and active minutes"
              fill
              priority
              className="object-contain p-4"
            />

            {/* Legend */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-white/80 px-2 py-1 rounded-full">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#4299e1] rounded-full mr-1"></div>
                <span className="text-xs text-[#0c4a6e]">Steps</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#10b981] rounded-full mr-1"></div>
                <span className="text-xs text-[#0c4a6e]">Minutes</span>
              </div>
            </div>

            {/* Fallback if SVG doesn't load */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0">
              <p className="text-[#0c4a6e]">
                Chart showing weekly activity with steps ranging from 2,800 to 5,100 and active minutes from 18 to 35
              </p>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        )}
      </div>

      {detailed && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2 text-[#0c4a6e]">Activity Recommendations</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg text-[#0c4a6e]">
            <li>Aim for at least 30 minutes of weight-bearing exercise daily</li>
            <li>Try to reach 5,000 steps per day</li>
            <li>Include balance exercises to reduce fall risk</li>
            <li>Consider gentle resistance training 2-3 times per week</li>
          </ul>
        </div>
      )}
    </div>
  )
}

