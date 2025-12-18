import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Medal, Award } from "lucide-react"

export default function LeaderboardPage() {
  const leaderboardData = [
    { rank: 1, name: "Arjun Mehta", points: 2850, badge: "Champion", events: 18 },
    { rank: 2, name: "Priya Sharma", points: 2720, badge: "Elite", events: 16 },
    { rank: 3, name: "Rohan Kumar", points: 2650, badge: "Elite", events: 15 },
    { rank: 4, name: "Ananya Iyer", points: 2480, badge: "Advanced", events: 14 },
    { rank: 5, name: "Vikram Singh", points: 2350, badge: "Advanced", events: 13 },
    { rank: 6, name: "Neha Patel", points: 2220, badge: "Advanced", events: 12 },
    { rank: 7, name: "Aditya Rao", points: 2150, badge: "Intermediate", events: 11 },
    { rank: 8, name: "Sanya Gupta", points: 2080, badge: "Intermediate", events: 10 },
    { rank: 9, name: "Karthik Reddy", points: 1950, badge: "Intermediate", events: 9 },
    { rank: 10, name: "Ishita Das", points: 1880, badge: "Intermediate", events: 9 },
  ]

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-6 w-6 text-yellow-400" />
    if (rank === 2) return <Medal className="h-6 w-6 text-gray-400" />
    if (rank === 3) return <Award className="h-6 w-6 text-amber-600" />
    return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>
  }

  const getRankGlow = (rank: number) => {
    if (rank === 1) return "border-yellow-400/50 bg-yellow-400/5 glow-effect"
    if (rank === 2) return "border-gray-400/50 bg-gray-400/5"
    if (rank === 3) return "border-amber-600/50 bg-amber-600/5"
    return "border-border bg-card/50"
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              <span className="text-primary">Leaderboard</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compete, climb, and claim your spot among the elite
            </p>
          </div>

          <Tabs defaultValue="all-time" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto mb-12">
              <TabsTrigger value="all-time">All-Time</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="events">Event-Wise</TabsTrigger>
            </TabsList>

            <TabsContent value="all-time" className="space-y-3">
              {leaderboardData.map((student) => (
                <Card
                  key={student.rank}
                  className={`${getRankGlow(student.rank)} backdrop-blur transition-all hover:scale-[1.02]`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="flex items-center justify-center w-12">{getRankIcon(student.rank)}</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-poppins)" }}>
                            {student.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">{student.events} events participated</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                          {student.badge}
                        </Badge>
                        <div className="text-right">
                          <div
                            className="text-3xl font-black text-primary"
                            style={{ fontFamily: "var(--font-poppins)" }}
                          >
                            {student.points.toLocaleString()}
                          </div>
                          <div className="text-xs text-muted-foreground">points</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="monthly" className="space-y-3">
              <div className="text-center py-12 text-muted-foreground">
                <Trophy className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Monthly leaderboard updates at month end</p>
                <p className="text-sm">Current month: March 2025</p>
              </div>
            </TabsContent>

            <TabsContent value="events" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle style={{ fontFamily: "var(--font-poppins)" }}>Bench Press Challenge</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">1. Rohan Kumar</span>
                        <span className="text-primary font-bold">95kg</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">2. Vikram Singh</span>
                        <span className="text-primary font-bold">92kg</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">3. Aditya Rao</span>
                        <span className="text-primary font-bold">88kg</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle style={{ fontFamily: "var(--font-poppins)" }}>Plank Hold Competition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">1. Priya Sharma</span>
                        <span className="text-primary font-bold">6:42</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">2. Ananya Iyer</span>
                        <span className="text-primary font-bold">6:12</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">3. Sanya Gupta</span>
                        <span className="text-primary font-bold">5:48</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Hall of Fame Section */}
          <div className="mt-20">
            <h2 className="text-4xl font-black text-center mb-12" style={{ fontFamily: "var(--font-poppins)" }}>
              Hall of <span className="text-primary">Fame</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="bg-card/50 backdrop-blur border-primary/30 shine-effect">
                <CardHeader className="text-center">
                  <Trophy className="h-12 w-12 text-primary mx-auto mb-3" />
                  <CardTitle style={{ fontFamily: "var(--font-poppins)" }}>Highest Bench PR</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-4xl font-black text-primary mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                    95kg
                  </p>
                  <p className="text-lg font-semibold">Rohan Kumar</p>
                  <p className="text-sm text-muted-foreground">Set on Jan 28, 2025</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-secondary/30 shine-effect">
                <CardHeader className="text-center">
                  <Award className="h-12 w-12 text-secondary mx-auto mb-3" />
                  <CardTitle style={{ fontFamily: "var(--font-poppins)" }}>Most Event Participations</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-4xl font-black text-secondary mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                    18
                  </p>
                  <p className="text-lg font-semibold">Arjun Mehta</p>
                  <p className="text-sm text-muted-foreground">True dedication</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-primary/30 shine-effect">
                <CardHeader className="text-center">
                  <Medal className="h-12 w-12 text-primary mx-auto mb-3" />
                  <CardTitle style={{ fontFamily: "var(--font-poppins)" }}>Consistency Champion</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-4xl font-black text-primary mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                    52
                  </p>
                  <p className="text-lg font-semibold">Priya Sharma</p>
                  <p className="text-sm text-muted-foreground">Weeks active</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
