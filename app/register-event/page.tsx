"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { QrCode, Calendar, User, Mail, Phone, Hash, CheckCircle2 } from "lucide-react"
import { registerForEvent } from "@/lib/actions/events"
import { toast } from "sonner"

export default function RegisterEventPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    registrationNumber: "",
    event: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [qrCode, setQrCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const events = [
    "1 Rep Max Bench Press Challenge",
    "Dumbbell Curl Endurance Battle",
    "Push-up Consistency Challenge",
    "Campus Step Count Marathon",
    "Fitness Awareness Week",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const formDataObj = new FormData()
    formDataObj.append("eventName", formData.event)
    formDataObj.append("fullName", formData.name)
    formDataObj.append("registrationNumber", formData.registrationNumber)
    formDataObj.append("email", formData.email)
    formDataObj.append("phone", formData.phone)
    formDataObj.append("eventDate", new Date().toISOString().split("T")[0])

    const result = await registerForEvent(formDataObj)

    if (result.error) {
      toast.error("Registration Failed", {
        description: result.error,
      })
      setIsLoading(false)
    } else {
      const qrData = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(result.qrCodeData!)}`
      setQrCode(qrData)
      setIsSubmitted(true)
      toast.success("Registration Successful!", {
        description: "Your QR code has been generated.",
      })
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-24 pb-20">
          <div className="container mx-auto px-4 max-w-2xl">
            <Card className="bg-card/50 backdrop-blur border-primary/30">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle2 className="h-16 w-16 text-primary" />
                </div>
                <CardTitle className="text-3xl" style={{ fontFamily: "var(--font-poppins)" }}>
                  Registration Successful!
                </CardTitle>
                <CardDescription className="text-base">Your event registration is confirmed</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-background/50 p-6 rounded-lg space-y-2">
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-semibold text-lg">{formData.name}</p>
                  <p className="text-sm text-muted-foreground mt-4">Event</p>
                  <p className="font-semibold text-lg">{formData.event}</p>
                  <p className="text-sm text-muted-foreground mt-4">Registration Number</p>
                  <p className="font-semibold text-lg">{formData.registrationNumber}</p>
                </div>

                <div className="text-center space-y-4">
                  <p className="text-sm text-muted-foreground">Your Attendance QR Code</p>
                  <div className="flex justify-center">
                    <div className="bg-white p-4 rounded-lg inline-block">
                      <img src={qrCode || "/placeholder.svg"} alt="QR Code" className="w-64 h-64" />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground max-w-md mx-auto">
                    Save this QR code or screenshot it. Show it at the event for attendance marking.
                  </p>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={() => {
                      const link = document.createElement("a")
                      link.href = qrCode
                      link.download = `event-qr-${formData.registrationNumber}.png`
                      link.click()
                    }}
                    className="flex-1"
                  >
                    Download QR Code
                  </Button>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({ name: "", email: "", phone: "", registrationNumber: "", event: "" })
                    }}
                    variant="outline"
                    className="flex-1"
                  >
                    Register Another Event
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <QrCode className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              Event <span className="text-primary">Registration</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Register for events and get your attendance QR code
            </p>
          </div>

          <Card className="bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-2xl" style={{ fontFamily: "var(--font-poppins)" }}>
                Register for an Event
              </CardTitle>
              <CardDescription>Fill in your details to receive your attendance QR code</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      placeholder="Rahul Sharma"
                      className="pl-10"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="rahul.sharma@vitstudent.ac.in"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 12345"
                      className="pl-10"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="regNumber">Registration Number</Label>
                  <div className="relative">
                    <Hash className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="regNumber"
                      placeholder="21BCE1234"
                      className="pl-10"
                      value={formData.registrationNumber}
                      onChange={(e) => handleInputChange("registrationNumber", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="event">Select Event</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground z-10" />
                    <Select
                      value={formData.event}
                      onValueChange={(value) => handleInputChange("event", value)}
                      required
                    >
                      <SelectTrigger className="pl-10">
                        <SelectValue placeholder="Choose an event" />
                      </SelectTrigger>
                      <SelectContent>
                        {events.map((event) => (
                          <SelectItem key={event} value={event}>
                            {event}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button type="submit" className="w-full glow-effect" size="lg" disabled={isLoading}>
                  {isLoading ? "Registering..." : "Register & Generate QR Code"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </main>
  )
}
