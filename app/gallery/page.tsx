"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { X } from "lucide-react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    { url: "/students-at-fitness-challenge-event-campus.jpg", title: "Bench Press Challenge", date: "Jan 28, 2025" },
    { url: "/student-doing-plank-exercise-fitness.jpg", title: "Plank Competition", date: "Dec 18, 2024" },
    { url: "/group-of-students-walking-together-campus-fitness.jpg", title: "Awareness Walk", date: "Jan 15, 2025" },
    { url: "/students-celebrating-fitness-achievement-trophy.jpg", title: "Award Ceremony", date: "Feb 10, 2025" },
    { url: "/students-doing-push-ups-outdoor-campus.jpg", title: "Push-up Challenge", date: "Nov 22, 2024" },
    { url: "/student-lifting-weights-gym-strength-training.jpg", title: "Strength Training", date: "Jan 10, 2025" },
    { url: "/fitness-club-team-photo-students-together.jpg", title: "Team Photo 2025", date: "Jan 5, 2025" },
    { url: "/students-at-fitness-awareness-workshop-seminar.jpg", title: "Fitness Workshop", date: "Dec 8, 2024" },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              Event <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Capturing our journey, one event at a time
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 max-w-7xl mx-auto">
            {images.map((image, index) => (
              <div
                key={index}
                className="mb-4 break-inside-avoid cursor-pointer group"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative overflow-hidden rounded-lg border-2 border-border hover:border-primary/50 transition-all">
                  <img
                    src={image.url || "/placeholder.svg"}
                    alt={image.title}
                    className="w-full h-auto transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "var(--font-poppins)" }}>
                        {image.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{image.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-card hover:bg-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <div className="max-w-5xl w-full">
            <img
              src={images[selectedImage].url || "/placeholder.svg"}
              alt={images[selectedImage].title}
              className="w-full h-auto rounded-lg border-2 border-primary"
            />
            <div className="text-center mt-4">
              <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "var(--font-poppins)" }}>
                {images[selectedImage].title}
              </h3>
              <p className="text-muted-foreground">{images[selectedImage].date}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
