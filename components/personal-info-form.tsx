"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/date-picker"

export function PersonalInfoForm() {
  const [formData, setFormData] = useState({
    firstName: "Jane",
    lastName: "Smith",
    dateOfBirth: new Date("1955-05-15"),
    gender: "female",
    height: "165",
    weight: "68",
    email: "jane.smith@example.com",
    phone: "(555) 123-4567",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would save the data to a database
    alert("Personal information saved successfully!")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-lg">
            First Name
          </Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            className="text-lg p-6"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-lg">
            Last Name
          </Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            className="text-lg p-6"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="dateOfBirth" className="text-lg">
            Date of Birth
          </Label>
          <DatePicker
            date={formData.dateOfBirth}
            setDate={(date) => setFormData((prev) => ({ ...prev, dateOfBirth: date || new Date() }))}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="gender" className="text-lg">
            Gender
          </Label>
          <Select value={formData.gender} onValueChange={(value) => handleChange("gender", value)}>
            <SelectTrigger id="gender" className="text-lg p-6">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male" className="text-lg">
                Male
              </SelectItem>
              <SelectItem value="female" className="text-lg">
                Female
              </SelectItem>
              <SelectItem value="other" className="text-lg">
                Other
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="height" className="text-lg">
            Height (cm)
          </Label>
          <Input
            id="height"
            type="number"
            value={formData.height}
            onChange={(e) => handleChange("height", e.target.value)}
            className="text-lg p-6"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="weight" className="text-lg">
            Weight (kg)
          </Label>
          <Input
            id="weight"
            type="number"
            value={formData.weight}
            onChange={(e) => handleChange("weight", e.target.value)}
            className="text-lg p-6"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-lg">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="text-lg p-6"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-lg">
            Phone
          </Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="text-lg p-6"
          />
        </div>
      </div>

      <Button type="submit" className="w-full text-lg py-6 h-auto mt-8">
        Save Personal Information
      </Button>
    </form>
  )
}

