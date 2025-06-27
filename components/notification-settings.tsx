"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TimeInput } from "@/components/time-input"

export function NotificationSettings() {
  const [settings, setSettings] = useState({
    enableNotifications: true,
    reminderTime: "08:00",
    lowBatteryAlerts: true,
    healthAlerts: true,
    weeklyReports: true,
    notificationSound: "chime",
    vibration: true,
  })

  const handleChange = (field: string, value: any) => {
    setSettings((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    // In a real app, this would save the settings to a database
    alert("Notification settings saved successfully!")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between p-4 border rounded-lg">
        <div>
          <h3 className="text-xl font-medium">Enable Notifications</h3>
          <p className="text-lg text-gray-500">Receive app notifications</p>
        </div>
        <Switch
          checked={settings.enableNotifications}
          onCheckedChange={(checked) => handleChange("enableNotifications", checked)}
          className="scale-125"
        />
      </div>

      {settings.enableNotifications && (
        <>
          <div className="space-y-3">
            <Label htmlFor="reminderTime" className="text-lg">
              Daily Reminder Time
            </Label>
            <TimeInput value={settings.reminderTime} onChange={(value) => handleChange("reminderTime", value)} />
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="text-xl font-medium">Low Battery Alerts</h3>
              <p className="text-lg text-gray-500">Notify when device battery is low</p>
            </div>
            <Switch
              checked={settings.lowBatteryAlerts}
              onCheckedChange={(checked) => handleChange("lowBatteryAlerts", checked)}
              className="scale-125"
            />
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="text-xl font-medium">Health Alerts</h3>
              <p className="text-lg text-gray-500">Notify about important health changes</p>
            </div>
            <Switch
              checked={settings.healthAlerts}
              onCheckedChange={(checked) => handleChange("healthAlerts", checked)}
              className="scale-125"
            />
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="text-xl font-medium">Weekly Reports</h3>
              <p className="text-lg text-gray-500">Receive weekly bone health summaries</p>
            </div>
            <Switch
              checked={settings.weeklyReports}
              onCheckedChange={(checked) => handleChange("weeklyReports", checked)}
              className="scale-125"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="notificationSound" className="text-lg">
              Notification Sound
            </Label>
            <Select
              value={settings.notificationSound}
              onValueChange={(value) => handleChange("notificationSound", value)}
            >
              <SelectTrigger id="notificationSound" className="text-lg p-6">
                <SelectValue placeholder="Select notification sound" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="chime" className="text-lg">
                  Chime
                </SelectItem>
                <SelectItem value="bell" className="text-lg">
                  Bell
                </SelectItem>
                <SelectItem value="gentle" className="text-lg">
                  Gentle
                </SelectItem>
                <SelectItem value="none" className="text-lg">
                  None
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="text-xl font-medium">Vibration</h3>
              <p className="text-lg text-gray-500">Enable vibration with notifications</p>
            </div>
            <Switch
              checked={settings.vibration}
              onCheckedChange={(checked) => handleChange("vibration", checked)}
              className="scale-125"
            />
          </div>
        </>
      )}

      <Button onClick={handleSave} className="w-full text-lg py-6 h-auto mt-4">
        Save Notification Settings
      </Button>
    </div>
  )
}

