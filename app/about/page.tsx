import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Target, Users, Trophy, Calendar, Heart, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Building a culture of fitness, discipline, and consistency across VIT campus",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Creating an inclusive environment where every student can thrive and grow",
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "Pushing boundaries and celebrating achievements, big and small",
    },
    {
      icon: Calendar,
      title: "Regular Events",
      description: "Hosting engaging challenges and competitions throughout the semester",
    },
    {
      icon: Heart,
      title: "Holistic Health",
      description: "Focusing on physical, mental, and social well-being",
    },
    {
      icon: TrendingUp,
      title: "Personal Growth",
      description: "Encouraging each member to become their strongest self",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-black" style={{ fontFamily: "var(--font-poppins)" }}>
              About <span className="text-primary">VIT Fitness Club</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're not just a club—we're a movement. A community of students dedicated to building strength,
              discipline, and a healthier campus culture.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-4xl font-black" style={{ fontFamily: "var(--font-poppins)" }}>
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The VIT Fitness Club started as a small group of passionate students who believed that fitness should be
                accessible, fun, and community-driven. What began with a handful of members has grown into one of the
                most active student organizations on campus.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We organize events ranging from strength challenges to step-count marathons, creating opportunities for
                students of all fitness levels to participate and improve. Our leaderboard system recognizes consistency
                and achievement, while our Hall of Fame celebrates those who've made outstanding contributions to campus
                fitness culture.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through peer-led initiatives, we inspire students to prioritize their health and build lifelong habits
                that extend far beyond their college years.
              </p>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20">
                <img
                  src="/diverse-college-students-working-out-together-fitn.jpg"
                  alt="VIT Fitness Club Community"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary rotate-12 rounded-lg" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-secondary -rotate-12 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground">The principles that drive everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur hover:border-primary/50 transition-all hover:-translate-y-1"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-xl mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: "var(--font-poppins)" }}>
              Ready to Join?
            </h2>
            <p className="text-xl text-muted-foreground">
              Become part of VIT's most active fitness community and start your transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="text-lg px-8 py-6 glow-effect">
                  Sign Up Now
                </Button>
              </Link>
              <Link href="/events">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Browse Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
