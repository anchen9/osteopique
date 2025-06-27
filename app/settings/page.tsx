import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DeviceSettings } from "@/components/device-settings"
import { NotificationSettings } from "@/components/notification-settings"
import { AccessibilitySettings } from "@/components/accessibility-settings"

export default function SettingsPage() {
  return (
    <main className="container mx-auto px-4 py-6 bg-[#f0f7ff]">
      <div className="mb-6">
        <Link href="/" passHref>
          <Button variant="ghost" className="p-0 h-auto">
            <ArrowLeft className="h-6 w-6 mr-2 text-primary" />
            <span className="text-lg text-[#0c4a6e]">Back to Home</span>
          </Button>
        </Link>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#0c4a6e]">Settings</h1>

      <div className="mb-6 p-4 bg-[#e6f2ff] rounded-lg border border-[#4299e1]/30">
        <p className="text-base md:text-lg text-[#0c4a6e]">
          This is where you can manage your device settings, notification preferences, and accessibility options. Adjust
          your wearable device configuration, customize alerts, and make the app easier to use.
        </p>
      </div>

      <Tabs defaultValue="device" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6 h-auto bg-[#e6f2ff]">
          <TabsTrigger
            value="device"
            className="text-base md:text-lg py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Device
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="text-base md:text-lg py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Notifications
          </TabsTrigger>
          <TabsTrigger
            value="accessibility"
            className="text-base md:text-lg py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Accessibility
          </TabsTrigger>
        </TabsList>

        <TabsContent value="device">
          <Card className="border-[#4299e1]/30">
            <CardHeader className="bg-[#e6f2ff]">
              <CardTitle className="text-xl md:text-2xl text-[#0c4a6e]">Device Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <DeviceSettings />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="border-[#4299e1]/30">
            <CardHeader className="bg-[#e6f2ff]">
              <CardTitle className="text-xl md:text-2xl text-[#0c4a6e]">Notification Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <NotificationSettings />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="accessibility">
          <Card className="border-[#4299e1]/30">
            <CardHeader className="bg-[#e6f2ff]">
              <CardTitle className="text-xl md:text-2xl text-[#0c4a6e]">Accessibility Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <AccessibilitySettings />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}

