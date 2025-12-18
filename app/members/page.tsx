import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"
import Link from "next/link"

export default function MembersPage() {
  const coreTeam = [
    { name: "Arjun Mehta", role: "President", contribution: "Leading the club with vision and energy" },
    { name: "Priya Sharma", role: "Vice President", contribution: "Event coordination and community building" },
    { name: "Rohan Kumar", role: "Events Head", contribution: "Planning and executing all fitness challenges" },
    { name: "Ananya Iyer", role: "Social Media Lead", contribution: "Growing our online presence and engagement" },
  ]

  const volunteers = [
    { name: "Vikram Singh", role: "Volunteer", contribution: "Event support and logistics" },
    { name: "Neha Patel", role: "Volunteer", contribution: "Content creation and design" },
    { name: "Aditya Rao", role: "Volunteer", contribution: "Technical support and website" },
    { name: "Sanya Gupta", role: "Volunteer", contribution: "Photography and documentation" },
    { name: "Karthik Reddy", role: "Volunteer", contribution: "Fitness guidance and mentoring" },
    { name: "Ishita Das", role: "Volunteer", contribution: "Community outreach" },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the passionate students driving our fitness community
            </p>
          </div>

          {/* Core Team */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2
              className="text-3xl font-bold mb-8 flex items-center gap-3"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <Users className="h-8 w-8 text-primary" />
              Core Team
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreTeam.map((member, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur hover:border-primary/50 transition-all hover:-translate-y-2"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                      <span
                        className="text-3xl font-black text-primary-foreground"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "var(--font-poppins)" }}>
                      {member.name}
                    </h3>
                    <Badge className="mb-3 bg-primary/20 text-primary border-primary/30">{member.role}</Badge>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.contribution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Volunteers */}
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-3xl font-bold mb-8 flex items-center gap-3"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <Users className="h-8 w-8 text-secondary" />
              Volunteers
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {volunteers.map((member, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur hover:border-secondary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-primary flex-shrink-0 flex items-center justify-center">
                        <span
                          className="text-xl font-bold text-secondary-foreground"
                          style={{ fontFamily: "var(--font-poppins)" }}
                        >
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "var(--font-poppins)" }}>
                          {member.name}
                        </h3>
                        <Badge variant="outline" className="mb-2 text-xs">
                          {member.role}
                        </Badge>
                        <p className="text-sm text-muted-foreground leading-relaxed">{member.contribution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Join CTA */}
          <div className="mt-20 text-center">
            <Card className="max-w-2xl mx-auto bg-card/50 backdrop-blur border-primary/30">
              <CardContent className="p-12">
                <h3 className="text-3xl font-black mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
                  Want to Join Our Team?
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  We're always looking for passionate students to help grow our fitness community
                </p>
                <Link href="/apply">
                  <Button size="lg" className="glow-effect">
                    Apply Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
