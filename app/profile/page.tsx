import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PersonalInfoForm } from "@/components/personal-info-form"
import { MedicalHistoryForm } from "@/components/medical-history-form"
import { FamilyHistoryForm } from "@/components/family-history-form"
import { LifestyleForm } from "@/components/lifestyle-form"

export default function ProfilePage() {
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

      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#0c4a6e]">My Profile</h1>

      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6 h-auto bg-[#e6f2ff] overflow-x-auto">
          <TabsTrigger
            value="personal"
            className="text-base md:text-lg py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Personal Info
          </TabsTrigger>
          <TabsTrigger
            value="medical"
            className="text-base md:text-lg py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Medical History
          </TabsTrigger>
          <TabsTrigger
            value="family"
            className="text-base md:text-lg py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Family History
          </TabsTrigger>
          <TabsTrigger
            value="lifestyle"
            className="text-base md:text-lg py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Lifestyle
          </TabsTrigger>
        </TabsList>

        <TabsContent value="personal">
          <Card className="border-[#4299e1]/30">
            <CardHeader className="bg-[#e6f2ff]">
              <CardTitle className="text-xl md:text-2xl text-[#0c4a6e]">Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
              <PersonalInfoForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="medical">
          <Card className="border-[#4299e1]/30">
            <CardHeader className="bg-[#e6f2ff]">
              <CardTitle className="text-xl md:text-2xl text-[#0c4a6e]">Medical History</CardTitle>
            </CardHeader>
            <CardContent>
              <MedicalHistoryForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="family">
          <Card className="border-[#4299e1]/30">
            <CardHeader className="bg-[#e6f2ff]">
              <CardTitle className="text-xl md:text-2xl text-[#0c4a6e]">Family History</CardTitle>
            </CardHeader>
            <CardContent>
              <FamilyHistoryForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="lifestyle">
          <Card className="border-[#4299e1]/30">
            <CardHeader className="bg-[#e6f2ff]">
              <CardTitle className="text-xl md:text-2xl text-[#0c4a6e]">Lifestyle Information</CardTitle>
            </CardHeader>
            <CardContent>
              <LifestyleForm />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}

