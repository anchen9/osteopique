import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BoneDensityChart } from "@/components/bone-density-chart"
import { NutrientLevelsChart } from "@/components/nutrient-levels-chart"
import { ActivityChart } from "@/components/activity-chart"
import { FallRiskGauge } from "@/components/fall-risk-gauge"

export default function DashboardPage() {
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

      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#0c4a6e]">Health Dashboard</h1>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6 h-auto bg-[#e6f2ff] overflow-x-auto">
          <TabsTrigger
            value="overview"
            className="text-base md:text-lg py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="bone-density"
            className="text-base md:text-lg py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Bone Density
          </TabsTrigger>
          <TabsTrigger
            value="nutrients"
            className="text-base md:text-lg py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Nutrients
          </TabsTrigger>
          <TabsTrigger
            value="activity"
            className="text-base md:text-lg py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Activity
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 gap-6">
            <Card className="border-[#4299e1]/30">
              <CardHeader className="bg-[#e6f2ff]">
                <CardTitle className="text-xl md:text-2xl text-[#0c4a6e]">Bone Density</CardTitle>
              </CardHeader>
              <CardContent>
                <BoneDensityChart />
              </CardContent>
            </Card>

            <Card className="border-[#4299e1]/30">
              <CardHeader className="bg-[#e6f2ff]">
                <CardTitle className="text-xl md:text-2xl text-[#0c4a6e]">Fall Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <FallRiskGauge />
              </CardContent>
            </Card>

            <Card className="border-[#4299e1]/30">
              <CardHeader className="bg-[#e6f2ff]">
                <CardTitle className="text-xl md:text-2xl text-[#0c4a6e]">Nutrient Levels</CardTitle>
              </CardHeader>
              <CardContent>
                <NutrientLevelsChart />
              </CardContent>
            </Card>

            <Card className="border-[#4299e1]/30">
              <CardHeader className="bg-[#e6f2ff]">
                <CardTitle className="text-xl md:text-2xl text-[#0c4a6e]">Daily Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <ActivityChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="bone-density">
          <Card className="border-[#4299e1]/30">
            <CardHeader className="bg-[#e6f2ff]">
              <CardTitle className="text-xl md:text-2xl text-[#0c4a6e]">Bone Density Trends</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <BoneDensityChart detailed={true} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="nutrients">
          <Card className="border-[#4299e1]/30">
            <CardHeader className="bg-[#e6f2ff]">
              <CardTitle className="text-xl md:text-2xl text-[#0c4a6e]">Nutrient Levels</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <NutrientLevelsChart detailed={true} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity">
          <Card className="border-[#4299e1]/30">
            <CardHeader className="bg-[#e6f2ff]">
              <CardTitle className="text-xl md:text-2xl text-[#0c4a6e]">Activity Tracking</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ActivityChart detailed={true} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}

