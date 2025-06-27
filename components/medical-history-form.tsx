"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DatePicker } from "@/components/date-picker"

export function MedicalHistoryForm() {
  const [formData, setFormData] = useState({
    hasFractures: true,
    fractureDetails: "Wrist fracture in 2018, hip fracture in 2020",
    hasOsteoporosis: true,
    osteoporosisDiagnosed: new Date("2019-03-10"),
    hasBoneDensityScan: true,
    lastBoneDensityScan: new Date("2023-06-15"),
    medications: "Alendronate 70mg weekly, Calcium 1000mg daily, Vitamin D 2000 IU daily",
    otherConditions: "Hypertension, Hypothyroidism",
    allergies: "Penicillin",
  })

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would save the data to a database
    alert("Medical history saved successfully!")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-start space-x-3 p-4 border rounded-lg">
          <Checkbox
            id="hasFractures"
            checked={formData.hasFractures}
            onCheckedChange={(checked) => handleChange("hasFractures", checked)}
            className="h-6 w-6 mt-1"
          />
          <div className="space-y-2 flex-1">
            <Label htmlFor="hasFractures" className="text-lg font-medium">
              Previous Fractures
            </Label>
            {formData.hasFractures && (
              <Textarea
                placeholder="Provide details about previous fractures"
                value={formData.fractureDetails}
                onChange={(e) => handleChange("fractureDetails", e.target.value)}
                className="text-lg p-4"
              />
            )}
          </div>
        </div>

        <div className="flex items-start space-x-3 p-4 border rounded-lg">
          <Checkbox
            id="hasOsteoporosis"
            checked={formData.hasOsteoporosis}
            onCheckedChange={(checked) => handleChange("hasOsteoporosis", checked)}
            className="h-6 w-6 mt-1"
          />
          <div className="space-y-2 flex-1">
            <Label htmlFor="hasOsteoporosis" className="text-lg font-medium">
              Diagnosed with Osteoporosis
            </Label>
            {formData.hasOsteoporosis && (
              <div className="space-y-2">
                <Label className="text-lg">Date of Diagnosis</Label>
                <DatePicker
                  date={formData.osteoporosisDiagnosed}
                  setDate={(date) => handleChange("osteoporosisDiagnosed", date)}
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex items-start space-x-3 p-4 border rounded-lg">
          <Checkbox
            id="hasBoneDensityScan"
            checked={formData.hasBoneDensityScan}
            onCheckedChange={(checked) => handleChange("hasBoneDensityScan", checked)}
            className="h-6 w-6 mt-1"
          />
          <div className="space-y-2 flex-1">
            <Label htmlFor="hasBoneDensityScan" className="text-lg font-medium">
              Previous Bone Density Scan
            </Label>
            {formData.hasBoneDensityScan && (
              <div className="space-y-2">
                <Label className="text-lg">Date of Last Scan</Label>
                <DatePicker
                  date={formData.lastBoneDensityScan}
                  setDate={(date) => handleChange("lastBoneDensityScan", date)}
                />
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="medications" className="text-lg">
            Current Medications
          </Label>
          <Textarea
            id="medications"
            placeholder="List all current medications and supplements"
            value={formData.medications}
            onChange={(e) => handleChange("medications", e.target.value)}
            className="text-lg p-4"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="otherConditions" className="text-lg">
            Other Medical Conditions
          </Label>
          <Textarea
            id="otherConditions"
            placeholder="List any other medical conditions"
            value={formData.otherConditions}
            onChange={(e) => handleChange("otherConditions", e.target.value)}
            className="text-lg p-4"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="allergies" className="text-lg">
            Allergies
          </Label>
          <Textarea
            id="allergies"
            placeholder="List any allergies"
            value={formData.allergies}
            onChange={(e) => handleChange("allergies", e.target.value)}
            className="text-lg p-4"
          />
        </div>
      </div>

      <Button type="submit" className="w-full text-lg py-6 h-auto mt-8">
        Save Medical History
      </Button>
    </form>
  )
}

