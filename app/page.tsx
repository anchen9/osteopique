import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Activity, User, Settings } from "lucide-react"
import { HealthScoreCard } from "@/components/health-score-card"

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-6 bg-[#f0f7ff]">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#0c4a6e]">Bone Health Tracker</h1>

      <HealthScoreCard score={78} />

      <div className="grid grid-cols-1 gap-6 mt-6">
        <Link href="/dashboard" passHref>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full border-[#4299e1]/30">
            <CardContent className="p-5 flex flex-row items-center">
              <Activity className="h-12 w-12 mr-4 text-primary" />
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-semibold mb-1 text-[#0c4a6e]">Health Dashboard</h2>
                <p className="text-base md:text-lg">View your bone health metrics and trends</p>
              </div>
              <ArrowRight className="h-6 w-6 text-primary" />
            </CardContent>
          </Card>
        </Link>

        <Link href="/profile" passHref>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full border-[#4299e1]/30">
            <CardContent className="p-5 flex flex-row items-center">
              <User className="h-12 w-12 mr-4 text-primary" />
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-semibold mb-1 text-[#0c4a6e]">My Profile</h2>
                <p className="text-base md:text-lg">Update your health history and personal information</p>
              </div>
              <ArrowRight className="h-6 w-6 text-primary" />
            </CardContent>
          </Card>
        </Link>

        <Link href="/settings" passHref>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full border-[#4299e1]/30">
            <CardContent className="p-5 flex flex-row items-center">
              <Settings className="h-12 w-12 mr-4 text-primary" />
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-semibold mb-1 text-[#0c4a6e]">Settings</h2>
                <p className="text-base md:text-lg">Check device and app settings</p>
              </div>
              <ArrowRight className="h-6 w-6 text-primary" />
            </CardContent>
          </Card>
        </Link>
      </div>
    </main>
  )
}

