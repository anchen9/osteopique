"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export function LifestyleForm() {
  const [formData, setFormData] = useState({
    exerciseFrequency: "2-3",
    exerciseTypes: ["walking", "swimming"],
    dietaryCalcium: "moderate",
    vitaminDSupplements: true,
    sunExposure: "moderate",
    smokingStatus: "former",
    alcoholConsumption: 2,
    caffeineConsumption: "moderate",
    fallPreventionMeasures: ["home_modifications", "vision_checks"],
  })

  const exerciseTypes = [
    { id: "walking", label: "Walking" },
    { id: "swimming", label: "Swimming" },
    { id: "cycling", label: "Cycling" },
    { id: "yoga", label: "Yoga" },
    { id: "strength", label: "Strength Training" },
    { id: "tai_chi", label: "Tai Chi" },
    { id: "gardening", label: "Gardening" },
  ]

  const fallPreventionMeasures = [
    { id: "home_modifications", label: "Home Modifications (grab bars, improved lighting)" },
    { id: "vision_checks", label: "Regular Vision Checks" },
    { id: "balance_exercises", label: "Balance Exercises" },
    { id: "medication_review", label: "Medication Review" },
    { id: "footwear", label: "Appropriate Footwear" },
    { id: "mobility_aids", label: "Mobility Aids (cane, walker)" },
  ]

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleCheckboxGroupChange = (field: string, itemId: string, checked: boolean) => {
    setFormData((prev) => {
      const currentItems = [...prev[field as keyof typeof prev]] as string[]

      if (checked) {
        return { ...prev, [field]: [...currentItems, itemId] }
      } else {
        return { ...prev, [field]: currentItems.filter((id) => id !== itemId) }
      }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would save the data to a database
    alert("Lifestyle information saved successfully!")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-6">
        <div className="space-y-3">
          <Label className="text-xl font-medium">Exercise Frequency</Label>
          <RadioGroup
            value={formData.exerciseFrequency}
            onValueChange={(value) => handleChange("exerciseFrequency", value)}
            className="space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="0-1" id="freq-0-1" className="h-5 w-5" />
              <Label htmlFor="freq-0-1" className="text-lg">
                0-1 days per week
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="2-3" id="freq-2-3" className="h-5 w-5" />
              <Label htmlFor="freq-2-3" className="text-lg">
                2-3 days per week
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="4-5" id="freq-4-5" className="h-5 w-5" />
              <Label htmlFor="freq-4-5" className="text-lg">
                4-5 days per week
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="6+" id="freq-6+" className="h-5 w-5" />
              <Label htmlFor="freq-6+" className="text-lg">
                6+ days per week
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label className="text-xl font-medium">Types of Exercise</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {exerciseTypes.map((type) => (
              <div key={type.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`exercise-${type.id}`}
                  checked={formData.exerciseTypes.includes(type.id)}
                  onCheckedChange={(checked) => handleCheckboxGroupChange("exerciseTypes", type.id, checked as boolean)}
                  className="h-5 w-5"
                />
                <Label htmlFor={`exercise-${type.id}`} className="text-lg">
                  {type.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Label htmlFor="dietaryCalcium" className="text-xl font-medium">
            Dietary Calcium Intake
          </Label>
          <Select value={formData.dietaryCalcium} onValueChange={(value) => handleChange("dietaryCalcium", value)}>
            <SelectTrigger id="dietaryCalcium" className="text-lg p-6">
              <SelectValue placeholder="Select calcium intake" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low" className="text-lg">
                Low (few dairy products or calcium-rich foods)
              </SelectItem>
              <SelectItem value="moderate" className="text-lg">
                Moderate (some dairy or calcium-rich foods daily)
              </SelectItem>
              <SelectItem value="high" className="text-lg">
                High (multiple servings of calcium-rich foods daily)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-3 p-4 border rounded-lg">
          <Checkbox
            id="vitaminDSupplements"
            checked={formData.vitaminDSupplements}
            onCheckedChange={(checked) => handleChange("vitaminDSupplements", checked)}
            className="h-6 w-6"
          />
          <Label htmlFor="vitaminDSupplements" className="text-lg font-medium">
            Taking Vitamin D Supplements
          </Label>
        </div>

        <div className="space-y-3">
          <Label htmlFor="sunExposure" className="text-xl font-medium">
            Sun Exposure
          </Label>
          <Select value={formData.sunExposure} onValueChange={(value) => handleChange("sunExposure", value)}>
            <SelectTrigger id="sunExposure" className="text-lg p-6">
              <SelectValue placeholder="Select sun exposure" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="minimal" className="text-lg">
                Minimal (less than 10 minutes daily)
              </SelectItem>
              <SelectItem value="moderate" className="text-lg">
                Moderate (10-30 minutes daily)
              </SelectItem>
              <SelectItem value="significant" className="text-lg">
                Significant (more than 30 minutes daily)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <Label className="text-xl font-medium">Smoking Status</Label>
          <RadioGroup
            value={formData.smokingStatus}
            onValueChange={(value) => handleChange("smokingStatus", value)}
            className="space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="never" id="smoke-never" className="h-5 w-5" />
              <Label htmlFor="smoke-never" className="text-lg">
                Never Smoked
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="former" id="smoke-former" className="h-5 w-5" />
              <Label htmlFor="smoke-former" className="text-lg">
                Former Smoker
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="current" id="smoke-current" className="h-5 w-5" />
              <Label htmlFor="smoke-current" className="text-lg">
                Current Smoker
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between">
            <Label className="text-xl font-medium">Alcohol Consumption</Label>
            <span className="text-lg font-medium">{formData.alcoholConsumption} drinks per week</span>
          </div>
          <Slider
            value={[formData.alcoholConsumption]}
            min={0}
            max={14}
            step={1}
            onValueChange={(value) => handleChange("alcoholConsumption", value[0])}
            className="py-4"
          />
        </div>

        <div className="space-y-3">
          <Label htmlFor="caffeineConsumption" className="text-xl font-medium">
            Caffeine Consumption
          </Label>
          <Select
            value={formData.caffeineConsumption}
            onValueChange={(value) => handleChange("caffeineConsumption", value)}
          >
            <SelectTrigger id="caffeineConsumption" className="text-lg p-6">
              <SelectValue placeholder="Select caffeine consumption" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none" className="text-lg">
                None
              </SelectItem>
              <SelectItem value="low" className="text-lg">
                Low (1 cup of coffee/tea daily)
              </SelectItem>
              <SelectItem value="moderate" className="text-lg">
                Moderate (2-3 cups daily)
              </SelectItem>
              <SelectItem value="high" className="text-lg">
                High (4+ cups daily)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <Label className="text-xl font-medium">Fall Prevention Measures</Label>
          <div className="space-y-2">
            {fallPreventionMeasures.map((measure) => (
              <div key={measure.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`measure-${measure.id}`}
                  checked={formData.fallPreventionMeasures.includes(measure.id)}
                  onCheckedChange={(checked) =>
                    handleCheckboxGroupChange("fallPreventionMeasures", measure.id, checked as boolean)
                  }
                  className="h-5 w-5"
                />
                <Label htmlFor={`measure-${measure.id}`} className="text-lg">
                  {measure.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full text-lg py-6 h-auto mt-8">
        Save Lifestyle Information
      </Button>
    </form>
  )
}

