import { Dumbbell, Instagram, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg" style={{ fontFamily: "var(--font-poppins)" }}>
              VIT FITNESS CLUB
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground italic text-center text-balance">
            "The body achieves what the mind believes."
          </p>

          <div className="text-xs text-muted-foreground">© 2025 VIT Fitness Club. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
