"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Dumbbell, Trophy } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />

      {/* Geometric overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary rotate-45" />
        <div className="absolute bottom-32 right-20 w-48 h-48 border-2 border-secondary rotate-12" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-primary/50 -rotate-12" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Dumbbell className="h-12 w-12 text-primary" />
            <Trophy className="h-12 w-12 text-secondary" />
          </div>

          <h1
            className="text-5xl md:text-7xl font-black tracking-tight text-balance leading-tight"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Stronger Students.
            <br />
            <span className="text-primary">Healthier Campus.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Building a culture of fitness, discipline, and consistency at VIT.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/signup">
              <Button size="lg" className="text-lg px-8 py-6 glow-effect">
                Join the Club
              </Button>
            </Link>
            <Link href="/events">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                View Events
              </Button>
            </Link>
          </div>

          <blockquote className="mt-12 pt-8 border-t border-border/50">
            <p className="text-lg md:text-xl italic text-muted-foreground text-balance">
              "Strength doesn't come from what you can do. It comes from overcoming what you once couldn't."
            </p>
          </blockquote>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}
