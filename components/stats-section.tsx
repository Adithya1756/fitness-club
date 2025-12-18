"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Trophy, Users, Target, Handshake } from "lucide-react"

interface StatCardProps {
  icon: React.ReactNode
  value: number
  label: string
  delay: number
}

function StatCard({ icon, value, label, delay }: StatCardProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const counter = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(counter)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(counter)
    }, delay)

    return () => clearTimeout(timer)
  }, [value, delay])

  return (
    <Card className="p-6 text-center hover:scale-105 transition-transform bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50">
      <div className="flex justify-center mb-4">
        <div className="p-4 rounded-full bg-primary/10 text-primary">{icon}</div>
      </div>
      <div className="text-4xl md:text-5xl font-black text-primary mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
        {count.toLocaleString()}+
      </div>
      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{label}</div>
    </Card>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            What We've <span className="text-primary">Achieved</span>
          </h2>
          <p className="text-lg text-muted-foreground">Building a legacy of fitness and community at VIT</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <StatCard icon={<Trophy className="h-8 w-8" />} value={24} label="Events Conducted" delay={0} />
          <StatCard icon={<Users className="h-8 w-8" />} value={1450} label="Student Participants" delay={200} />
          <StatCard icon={<Target className="h-8 w-8" />} value={38} label="Challenges Completed" delay={400} />
          <StatCard icon={<Handshake className="h-8 w-8" />} value={12} label="Campus Collaborations" delay={600} />
        </div>
      </div>
    </section>
  )
}
