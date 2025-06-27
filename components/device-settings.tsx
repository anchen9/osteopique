"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function DeviceSettings() {
  const [settings, setSettings] = useState({
    deviceConnected: true,
    deviceName: "Bone Health Sensor 2024",
    syncFrequency: "hourly",
    batteryLevel: 78,
    dataStorage: "cloud",
    autoSync: true,
  })

  const handleChange = (field: string, value: any) => {
    setSettings((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    // In a real app, this would save the settings to a database or device
    alert("Device settings saved successfully!")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between p-4 border rounded-lg">
        <div>
          <h3 className="text-xl font-medium">Device Connection</h3>
          <p className="text-lg text-gray-500">{settings.deviceConnected ? "Connected" : "Disconnected"}</p>
        </div>
        <Switch
          checked={settings.deviceConnected}
          onCheckedChange={(checked) => handleChange("deviceConnected", checked)}
          className="scale-125"
        />
      </div>

      <div className="space-y-3">
        <Label htmlFor="deviceName" className="text-lg">
          Device Name
        </Label>
        <Input
          id="deviceName"
          value={settings.deviceName}
          onChange={(e) => handleChange("deviceName", e.target.value)}
          className="text-lg p-6"
        />
      </div>

      <div className="space-y-3">
        <Label htmlFor="syncFrequency" className="text-lg">
          Sync Frequency
        </Label>
        <Select value={settings.syncFrequency} onValueChange={(value) => handleChange("syncFrequency", value)}>
          <SelectTrigger id="syncFrequency" className="text-lg p-6">
            <SelectValue placeholder="Select sync frequency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="realtime" className="text-lg">
              Real-time
            </SelectItem>
            <SelectItem value="hourly" className="text-lg">
              Hourly
            </SelectItem>
            <SelectItem value="daily" className="text-lg">
              Daily
            </SelectItem>
            <SelectItem value="manual" className="text-lg">
              Manual Only
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <Label className="text-lg">Battery Level</Label>
        <div className="h-8 w-full bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-green-500" style={{ width: `${settings.batteryLevel}%` }}></div>
        </div>
        <p className="text-lg">{settings.batteryLevel}% remaining</p>
      </div>

      <div className="space-y-3">
        <Label htmlFor="dataStorage" className="text-lg">
          Data Storage
        </Label>
        <Select value={settings.dataStorage} onValueChange={(value) => handleChange("dataStorage", value)}>
          <SelectTrigger id="dataStorage" className="text-lg p-6">
            <SelectValue placeholder="Select data storage option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="device" className="text-lg">
              Device Only
            </SelectItem>
            <SelectItem value="cloud" className="text-lg">
              Cloud Storage
            </SelectItem>
            <SelectItem value="both" className="text-lg">
              Both Device and Cloud
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-between p-4 border rounded-lg">
        <div>
          <h3 className="text-xl font-medium">Auto Sync</h3>
          <p className="text-lg text-gray-500">Automatically sync data when connected</p>
        </div>
        <Switch
          checked={settings.autoSync}
          onCheckedChange={(checked) => handleChange("autoSync", checked)}
          className="scale-125"
        />
      </div>

      <Button onClick={handleSave} className="w-full text-lg py-6 h-auto mt-4">
        Save Device Settings
      </Button>
    </div>
  )
}

