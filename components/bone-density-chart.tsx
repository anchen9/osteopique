"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface BoneDensityChartProps {
  detailed?: boolean
}

export function BoneDensityChart({ detailed = false }: BoneDensityChartProps) {
  // Sample data - in a real app, this would come from the wearable device
  const data = [
    { date: "Jan", value: 0.82 },
    { date: "Feb", value: 0.83 },
    { date: "Mar", value: 0.84 },
    { date: "Apr", value: 0.85 },
    { date: "May", value: 0.86 },
    { date: "Jun", value: 0.87 },
    { date: "Jul", value: 0.88 },
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
          <h3 className="text-xl mb-2 text-[#0c4a6e]">Current Bone Density: 0.88 g/cm²</h3>
          <p className="text-lg text-[#0c4a6e]">
            Your bone density has improved by 7.3% over the last 6 months. Continue with your current exercise and
            nutrition plan.
          </p>
        </div>
      )}

      <div className="relative w-full h-[300px] bg-white rounded-lg overflow-hidden">
        {chartRendered ? (
          <div className="w-full h-full">
            {/* Using next/image for SVG chart */}
            <Image
              src="/bone-density-chart.svg"
              alt="Bone density chart showing improvement over time"
              fill
              priority
              className="object-contain p-4"
            />

            {/* Fallback if SVG doesn't load */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0">
              <p className="text-[#0c4a6e]">
                Chart showing bone density improvement from 0.82 to 0.88 g/cm² over 7 months
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
          <h3 className="text-xl font-semibold mb-2 text-[#0c4a6e]">Understanding Your Bone Density</h3>
          <p className="text-lg mb-4 text-[#0c4a6e]">
            Bone density is measured in grams per square centimeter (g/cm²). A higher number indicates stronger bones.
          </p>
          <Card className="p-4 bg-[#e6f2ff] border-[#4299e1]/30">
            <h4 className="text-lg font-semibold mb-2 text-[#0c4a6e]">Healthy Range</h4>
            <p className="text-[#0c4a6e]">For your age group, a healthy bone density is between 0.85 - 1.0 g/cm²</p>
          </Card>
        </div>
      )}
    </div>
  )
}

