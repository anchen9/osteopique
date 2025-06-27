"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function FamilyHistoryForm() {
  const [relatives, setRelatives] = useState([
    {
      id: 1,
      relation: "Mother",
      hasOsteoporosis: true,
      hasFractures: true,
      details: "Diagnosed with osteoporosis at age 65, hip fracture at 70",
    },
    {
      id: 2,
      relation: "Father",
      hasOsteoporosis: false,
      hasFractures: false,
      details: "No bone health issues",
    },
    {
      id: 3,
      relation: "Maternal Grandmother",
      hasOsteoporosis: true,
      hasFractures: true,
      details: "Multiple fractures, severe osteoporosis",
    },
  ])

  const [newRelative, setNewRelative] = useState({
    relation: "",
    hasOsteoporosis: false,
    hasFractures: false,
    details: "",
  })

  const handleRelativeChange = (id: number, field: string, value: any) => {
    setRelatives((prev) => prev.map((relative) => (relative.id === id ? { ...relative, [field]: value } : relative)))
  }

  const handleNewRelativeChange = (field: string, value: any) => {
    setNewRelative((prev) => ({ ...prev, [field]: value }))
  }

  const addRelative = () => {
    if (newRelative.relation) {
      setRelatives((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...newRelative,
        },
      ])
      setNewRelative({
        relation: "",
        hasOsteoporosis: false,
        hasFractures: false,
        details: "",
      })
    }
  }

  const removeRelative = (id: number) => {
    setRelatives((prev) => prev.filter((relative) => relative.id !== id))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would save the data to a database
    alert("Family history saved successfully!")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Family Members with Bone Health Issues</h3>

        {relatives.map((relative) => (
          <div key={relative.id} className="p-4 border rounded-lg space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-medium">{relative.relation}</h4>
              <Button type="button" variant="destructive" size="sm" onClick={() => removeRelative(relative.id)}>
                Remove
              </Button>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`osteoporosis-${relative.id}`}
                  checked={relative.hasOsteoporosis}
                  onCheckedChange={(checked) => handleRelativeChange(relative.id, "hasOsteoporosis", checked)}
                  className="h-5 w-5"
                />
                <Label htmlFor={`osteoporosis-${relative.id}`} className="text-lg">
                  Osteoporosis
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`fractures-${relative.id}`}
                  checked={relative.hasFractures}
                  onCheckedChange={(checked) => handleRelativeChange(relative.id, "hasFractures", checked)}
                  className="h-5 w-5"
                />
                <Label htmlFor={`fractures-${relative.id}`} className="text-lg">
                  Fractures
                </Label>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor={`details-${relative.id}`} className="text-lg">
                Details
              </Label>
              <Textarea
                id={`details-${relative.id}`}
                value={relative.details}
                onChange={(e) => handleRelativeChange(relative.id, "details", e.target.value)}
                className="text-lg p-4"
              />
            </div>
          </div>
        ))}

        <div className="p-4 border rounded-lg border-dashed space-y-4">
          <h4 className="text-lg font-medium">Add New Family Member</h4>

          <div className="space-y-2">
            <Label htmlFor="relation" className="text-lg">
              Relation
            </Label>
            <Select value={newRelative.relation} onValueChange={(value) => handleNewRelativeChange("relation", value)}>
              <SelectTrigger id="relation" className="text-lg p-6">
                <SelectValue placeholder="Select relation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Mother" className="text-lg">
                  Mother
                </SelectItem>
                <SelectItem value="Father" className="text-lg">
                  Father
                </SelectItem>
                <SelectItem value="Sister" className="text-lg">
                  Sister
                </SelectItem>
                <SelectItem value="Brother" className="text-lg">
                  Brother
                </SelectItem>
                <SelectItem value="Maternal Grandmother" className="text-lg">
                  Maternal Grandmother
                </SelectItem>
                <SelectItem value="Maternal Grandfather" className="text-lg">
                  Maternal Grandfather
                </SelectItem>
                <SelectItem value="Paternal Grandmother" className="text-lg">
                  Paternal Grandmother
                </SelectItem>
                <SelectItem value="Paternal Grandfather" className="text-lg">
                  Paternal Grandfather
                </SelectItem>
                <SelectItem value="Other" className="text-lg">
                  Other
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="new-osteoporosis"
                checked={newRelative.hasOsteoporosis}
                onCheckedChange={(checked) => handleNewRelativeChange("hasOsteoporosis", checked)}
                className="h-5 w-5"
              />
              <Label htmlFor="new-osteoporosis" className="text-lg">
                Osteoporosis
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="new-fractures"
                checked={newRelative.hasFractures}
                onCheckedChange={(checked) => handleNewRelativeChange("hasFractures", checked)}
                className="h-5 w-5"
              />
              <Label htmlFor="new-fractures" className="text-lg">
                Fractures
              </Label>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="new-details" className="text-lg">
              Details
            </Label>
            <Textarea
              id="new-details"
              value={newRelative.details}
              onChange={(e) => handleNewRelativeChange("details", e.target.value)}
              className="text-lg p-4"
              placeholder="Enter any relevant details about bone health issues"
            />
          </div>

          <Button type="button" onClick={addRelative} className="w-full text-lg py-4 h-auto">
            Add Family Member
          </Button>
        </div>
      </div>

      <Button type="submit" className="w-full text-lg py-6 h-auto mt-8">
        Save Family History
      </Button>
    </form>
  )
}

