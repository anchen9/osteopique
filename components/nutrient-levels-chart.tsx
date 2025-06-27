"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface NutrientLevelsChartProps {
  detailed?: boolean
}

export function NutrientLevelsChart({ detailed = false }: NutrientLevelsChartProps) {
  // Sample data - in a real app, this would come from the wearable device
  const data = [
    { name: "Vitamin D", value: 75, target: 100 },
    { name: "Calcium", value: 85, target: 100 },
    { name: "Magnesium", value: 60, target: 100 },
    { name: "Vitamin K", value: 70, target: 100 },
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
          <h3 className="text-xl mb-2 text-[#0c4a6e]">Nutrient Levels</h3>
          <p className="text-lg text-[#0c4a6e]">
            Your calcium and vitamin D levels are improving. Consider increasing magnesium intake.
          </p>
        </div>
      )}

      <div className="relative w-full h-[300px] bg-white rounded-lg overflow-hidden">
        {chartRendered ? (
          <div className="w-full h-full">
            {/* Using next/image for SVG chart */}
            <Image
              src="/nutrient-levels-chart.svg"
              alt="Nutrient levels chart showing vitamin and mineral percentages"
              fill
              priority
              className="object-contain p-4"
            />

            {/* Fallback if SVG doesn't load */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0">
              <p className="text-[#0c4a6e]">
                Chart showing nutrient levels: Vitamin D (75%), Calcium (85%), Magnesium (60%), Vitamin K (70%)
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
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg border-[#4299e1]/30 bg-[#e6f2ff]">
            <h4 className="text-lg font-semibold mb-2 text-[#0c4a6e]">Vitamin D</h4>
            <p className="text-[#0c4a6e]">Current: 75% of target</p>
            <p className="mt-2 text-[#0c4a6e]">
              Recommendation: 20 minutes of sunlight daily and consider supplements.
            </p>
          </div>
          <div className="p-4 border rounded-lg border-[#4299e1]/30 bg-[#e6f2ff]">
            <h4 className="text-lg font-semibold mb-2 text-[#0c4a6e]">Calcium</h4>
            <p className="text-[#0c4a6e]">Current: 85% of target</p>
            <p className="mt-2 text-[#0c4a6e]">Recommendation: Continue with dairy products and leafy greens.</p>
          </div>
          <div className="p-4 border rounded-lg border-[#4299e1]/30 bg-[#e6f2ff]">
            <h4 className="text-lg font-semibold mb-2 text-[#0c4a6e]">Magnesium</h4>
            <p className="text-[#0c4a6e]">Current: 60% of target</p>
            <p className="mt-2 text-[#0c4a6e]">Recommendation: Increase nuts, seeds, and whole grains in your diet.</p>
          </div>
          <div className="p-4 border rounded-lg border-[#4299e1]/30 bg-[#e6f2ff]">
            <h4 className="text-lg font-semibold mb-2 text-[#0c4a6e]">Vitamin K</h4>
            <p className="text-[#0c4a6e]">Current: 70% of target</p>
            <p className="mt-2 text-[#0c4a6e]">Recommendation: Add more green vegetables to your meals.</p>
          </div>
        </div>
      )}
    </div>
  )
}

