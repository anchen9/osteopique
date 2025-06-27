"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"

export function AccessibilitySettings() {
  const [settings, setSettings] = useState({
    fontSize: 2, // 1: Small, 2: Medium, 3: Large, 4: Extra Large
    highContrast: false,
    reducedMotion: true,
    screenReader: false,
    voiceControl: false,
    darkMode: false,
  })

  const handleChange = (field: string, value: any) => {
    setSettings((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    // In a real app, this would save the settings to a database
    alert("Accessibility settings saved successfully!")
  }

  const getFontSizeLabel = (size: number) => {
    switch (size) {
      case 1:
        return "Small"
      case 2:
        return "Medium"
      case 3:
        return "Large"
      case 4:
        return "Extra Large"
      default:
        return "Medium"
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex justify-between">
          <Label className="text-xl font-medium">Text Size</Label>
          <span className="text-lg font-medium">{getFontSizeLabel(settings.fontSize)}</span>
        </div>
        <Slider
          value={[settings.fontSize]}
          min={1}
          max={4}
          step={1}
          onValueChange={(value) => handleChange("fontSize", value[0])}
          className="py-4"
        />
        <div className="flex justify-between text-sm">
          <span>A</span>
          <span className="text-lg">A</span>
          <span className="text-xl">A</span>
          <span className="text-2xl">A</span>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 border rounded-lg">
        <div>
          <h3 className="text-xl font-medium">High Contrast</h3>
          <p className="text-lg text-gray-500">Increase contrast for better visibility</p>
        </div>
        <Switch
          checked={settings.highContrast}
          onCheckedChange={(checked) => handleChange("highContrast", checked)}
          className="scale-125"
        />
      </div>

      <div className="flex items-center justify-between p-4 border rounded-lg">
        <div>
          <h3 className="text-xl font-medium">Reduced Motion</h3>
          <p className="text-lg text-gray-500">Minimize animations and transitions</p>
        </div>
        <Switch
          checked={settings.reducedMotion}
          onCheckedChange={(checked) => handleChange("reducedMotion", checked)}
          className="scale-125"
        />
      </div>

      <div className="flex items-center justify-between p-4 border rounded-lg">
        <div>
          <h3 className="text-xl font-medium">Screen Reader Support</h3>
          <p className="text-lg text-gray-500">Optimize for screen readers</p>
        </div>
        <Switch
          checked={settings.screenReader}
          onCheckedChange={(checked) => handleChange("screenReader", checked)}
          className="scale-125"
        />
      </div>

      <div className="flex items-center justify-between p-4 border rounded-lg">
        <div>
          <h3 className="text-xl font-medium">Voice Control</h3>
          <p className="text-lg text-gray-500">Navigate the app using voice commands</p>
        </div>
        <Switch
          checked={settings.voiceControl}
          onCheckedChange={(checked) => handleChange("voiceControl", checked)}
          className="scale-125"
        />
      </div>

      <div className="flex items-center justify-between p-4 border rounded-lg">
        <div>
          <h3 className="text-xl font-medium">Dark Mode</h3>
          <p className="text-lg text-gray-500">Use dark theme for reduced eye strain</p>
        </div>
        <Switch
          checked={settings.darkMode}
          onCheckedChange={(checked) => handleChange("darkMode", checked)}
          className="scale-125"
        />
      </div>

      <Button onClick={handleSave} className="w-full text-lg py-6 h-auto mt-4">
        Save Accessibility Settings
      </Button>
    </div>
  )
}

