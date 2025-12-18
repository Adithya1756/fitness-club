import { Target, Users, Trophy } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
            <h2 className="text-4xl md:text-5xl font-black leading-tight" style={{ fontFamily: "var(--font-poppins)" }}>
              About the <span className="text-primary">Club</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The VIT Fitness Club is a student-driven initiative focused on building a culture of health, strength, and
              discipline across campus. We're not a gym—we're a community.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through events, challenges, and awareness drives, we empower VIT students to become stronger versions of
              themselves—physically, mentally, and socially.
            </p>

            <div className="pt-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "var(--font-poppins)" }}>
                    Student-Driven Fitness Awareness
                  </h3>
                  <p className="text-muted-foreground">Peer-led initiatives that inspire and motivate</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "var(--font-poppins)" }}>
                    Community Participation
                  </h3>
                  <p className="text-muted-foreground">Inclusive events welcoming students of all fitness levels</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Trophy className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "var(--font-poppins)" }}>
                    Events & Challenges
                  </h3>
                  <p className="text-muted-foreground">Competitive and motivational fitness experiences</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right-8 duration-700">
            <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20">
              <img src="/diverse-college-students-working-out-together-fitn.jpg" alt="VIT Fitness Club Community" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <blockquote className="text-xl font-semibold italic text-balance">
                  "Fitness is not about being better than someone else. It's about being better than yesterday."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
