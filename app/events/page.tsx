import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Users, Trophy, Clock } from "lucide-react"
import Link from "next/link"

export default function EventsPage() {
  const upcomingEvents = [
    {
      name: "1 Rep Max Bench Press Challenge",
      description:
        "Test your maximum strength in the classic bench press. Compete for the title of strongest student on campus.",
      date: "March 15, 2025",
      venue: "Campus Gym",
      status: "Open for Registration",
      category: "Strength",
    },
    {
      name: "Dumbbell Curl Endurance Battle",
      description: "How many reps can you complete? This endurance challenge will push your limits.",
      date: "March 22, 2025",
      venue: "Sports Complex",
      status: "Coming Soon",
      category: "Endurance",
    },
    {
      name: "Push-up Consistency Challenge",
      description: "7-day challenge to build the habit of daily push-ups. Track your progress and stay consistent.",
      date: "March 28 - April 3, 2025",
      venue: "Anywhere",
      status: "Open for Registration",
      category: "Consistency",
    },
    {
      name: "Campus Step Count Marathon",
      description: "Week-long campus-wide challenge to promote daily movement. Sync your fitness tracker and compete!",
      date: "April 1-7, 2025",
      venue: "Campus Wide",
      status: "Open for Registration",
      category: "Cardio",
    },
    {
      name: "Fitness Awareness Week",
      description: "A week of workshops, talks, and activities focused on nutrition, training, and mental health.",
      date: "April 15-20, 2025",
      venue: "Multiple Venues",
      status: "Coming Soon",
      category: "Awareness",
    },
  ]

  const pastEvents = [
    {
      name: "F1 Streaming Night + Fitness Awareness Drive",
      description: "Combined entertainment with fitness education. A unique event bringing students together.",
      date: "February 10, 2025",
      attendance: 320,
      duration: "4 hours",
      highlight: "Record attendance",
    },
    {
      name: "Pull-up Challenge",
      description: "Test of upper body strength and determination. Students competed in multiple categories.",
      date: "January 28, 2025",
      attendance: 180,
      duration: "3 hours",
      highlight: "Max reps: 42",
    },
    {
      name: "Campus Fitness Awareness Walk",
      description: "Campus-wide walk to promote fitness awareness and community bonding.",
      date: "January 15, 2025",
      attendance: 250,
      duration: "2 hours",
      highlight: "Reached all blocks",
    },
    {
      name: "Plank Hold Competition",
      description: "Core strength showdown. Students held planks for as long as possible.",
      date: "December 18, 2024",
      attendance: 145,
      duration: "2.5 hours",
      highlight: "Best time: 6 min 42 sec",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              Our <span className="text-primary">Events</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join challenges, compete with peers, and push your limits
            </p>
          </div>

          <Tabs defaultValue="upcoming" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="upcoming" className="text-base">
                Upcoming Events
              </TabsTrigger>
              <TabsTrigger value="past" className="text-base">
                Past Events
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {upcomingEvents.map((event, index) => (
                  <Card
                    key={index}
                    className="hover:border-primary/50 transition-all hover:-translate-y-1 bg-card/50 backdrop-blur"
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                          {event.status}
                        </Badge>
                        <Badge variant="outline">{event.category}</Badge>
                      </div>
                      <CardTitle className="text-2xl" style={{ fontFamily: "var(--font-poppins)" }}>
                        {event.name}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{event.venue}</span>
                      </div>
                      <Link href="/register-event">
                        <Button className="w-full mt-4 glow-effect">Register Now</Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="past" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {pastEvents.map((event, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur border-border/50">
                    <CardHeader>
                      <CardTitle className="text-2xl" style={{ fontFamily: "var(--font-poppins)" }}>
                        {event.name}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>

                      <div className="grid grid-cols-3 gap-3 pt-3 border-t border-border">
                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <Users className="h-4 w-4 text-primary" />
                          </div>
                          <div
                            className="text-2xl font-bold text-primary"
                            style={{ fontFamily: "var(--font-poppins)" }}
                          >
                            {event.attendance}
                          </div>
                          <div className="text-xs text-muted-foreground">Attended</div>
                        </div>

                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <Clock className="h-4 w-4 text-secondary" />
                          </div>
                          <div
                            className="text-2xl font-bold text-secondary"
                            style={{ fontFamily: "var(--font-poppins)" }}
                          >
                            {event.duration}
                          </div>
                          <div className="text-xs text-muted-foreground">Duration</div>
                        </div>

                        <div className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <Trophy className="h-4 w-4 text-primary" />
                          </div>
                          <div className="text-xs font-semibold text-foreground mt-2">{event.highlight}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </main>
  )
}
