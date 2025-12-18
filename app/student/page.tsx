import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Calendar, Award, Download } from "lucide-react"

export default function StudentPortalPage() {
  const registeredEvents = [
    { name: "1 Rep Max Bench Press Challenge", date: "March 15, 2025", status: "Upcoming" },
    { name: "Campus Step Count Marathon", date: "April 1-7, 2025", status: "Upcoming" },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
              Student <span className="text-primary">Dashboard</span>
            </h1>
            <p className="text-muted-foreground">Welcome back, Arjun!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            <Card className="bg-card/50 backdrop-blur border-primary/30">
              <CardHeader>
                <Trophy className="h-8 w-8 text-primary mb-2" />
                <CardTitle style={{ fontFamily: "var(--font-poppins)" }}>Your Rank</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-black text-primary" style={{ fontFamily: "var(--font-poppins)" }}>
                  #1
                </div>
                <p className="text-sm text-muted-foreground">All-time leaderboard</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur">
              <CardHeader>
                <Calendar className="h-8 w-8 text-secondary mb-2" />
                <CardTitle style={{ fontFamily: "var(--font-poppins)" }}>Events Joined</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-black text-secondary" style={{ fontFamily: "var(--font-poppins)" }}>
                  18
                </div>
                <p className="text-sm text-muted-foreground">Total participations</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/30">
              <CardHeader>
                <Award className="h-8 w-8 text-primary mb-2" />
                <CardTitle style={{ fontFamily: "var(--font-poppins)" }}>Total Points</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-black text-primary" style={{ fontFamily: "var(--font-poppins)" }}>
                  2,850
                </div>
                <p className="text-sm text-muted-foreground">Keep climbing!</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <Card className="bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle style={{ fontFamily: "var(--font-poppins)" }}>Registered Events</CardTitle>
                <CardDescription>Events you're signed up for</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {registeredEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border">
                    <div>
                      <h3 className="font-semibold">{event.name}</h3>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                    </div>
                    <Badge className="bg-primary/20 text-primary border-primary/30">{event.status}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle style={{ fontFamily: "var(--font-poppins)" }}>Hall of Fame Status</CardTitle>
                <CardDescription>Your achievements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <div>
                    <h3 className="font-semibold text-primary">Most Event Participations</h3>
                    <p className="text-sm text-muted-foreground">18 events</p>
                  </div>
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground text-center pt-2">
                  Keep competing to earn more achievements!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur md:col-span-2">
              <CardHeader>
                <CardTitle style={{ fontFamily: "var(--font-poppins)" }}>Certificates</CardTitle>
                <CardDescription>Download your participation certificates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <Download className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>Certificates will be available after event completion</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
