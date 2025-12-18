import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import Link from "next/link"

export function EventsPreview() {
  const upcomingEvents = [
    {
      name: "1 Rep Max Bench Press Challenge",
      description: "Test your maximum strength in the classic bench press",
      date: "March 15, 2025",
      venue: "Campus Gym",
      status: "Open for Registration",
    },
    {
      name: "Dumbbell Curl Endurance Battle",
      description: "How many reps can you do? Prove your endurance",
      date: "March 22, 2025",
      venue: "Sports Complex",
      status: "Coming Soon",
    },
    {
      name: "Campus Step Count Marathon",
      description: "7-day challenge to promote daily movement",
      date: "April 1-7, 2025",
      venue: "Campus Wide",
      status: "Open for Registration",
    },
  ]

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Upcoming <span className="text-primary">Events</span>
          </h2>
          <p className="text-lg text-muted-foreground">Join our next challenges and become part of the movement</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {upcomingEvents.map((event, index) => (
            <Card
              key={index}
              className="hover:border-primary/50 transition-all hover:-translate-y-2 bg-card/50 backdrop-blur"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    {event.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl" style={{ fontFamily: "var(--font-poppins)" }}>
                  {event.name}
                </CardTitle>
                <CardDescription className="text-base">{event.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{event.venue}</span>
                </div>
                <Link href="/apply">
                  <Button className="w-full mt-4 glow-effect">Register Now</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/events">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
