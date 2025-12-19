"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { UserPlus } from "lucide-react"
import { useState } from "react"
import { submitApplication } from "@/lib/actions/applications"
import { toast } from "sonner"

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    registrationNumber: "",
    branch: "",
    year: "",
    role: "",
    experience: "",
    motivation: "",
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const formDataObj = new FormData()
    formDataObj.append("fullName", formData.name)
    formDataObj.append("email", formData.email)
    formDataObj.append("phone", formData.phone)
    formDataObj.append("registrationNumber", formData.registrationNumber)
    formDataObj.append("branch", formData.branch)
    formDataObj.append("year", formData.year)
    formDataObj.append("fitnessGoal", formData.role)
    formDataObj.append("experience", formData.experience)
    formDataObj.append("whyJoin", formData.motivation)
    formDataObj.append("availability", "weekdays")

    const result = await submitApplication(formDataObj)

    if (result.error) {
      toast.error("Application Failed", {
        description: result.error,
      })
    } else {
      toast.success("Application Submitted!", {
        description: "We'll review your application and get back to you soon.",
      })
      setFormData({
        name: "",
        email: "",
        phone: "",
        registrationNumber: "",
        branch: "",
        year: "",
        role: "",
        experience: "",
        motivation: "",
      })
    }
    setIsLoading(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                <UserPlus className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
                Join Our <span className="text-primary">Team</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fill out the form below to apply as a volunteer or core team member
              </p>
            </div>

            <Card className="bg-card/50 backdrop-blur border-primary/30">
              <CardHeader>
                <CardTitle className="text-2xl" style={{ fontFamily: "var(--font-poppins)" }}>
                  Application Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary">Personal Information</h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                          className="bg-background/50"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@vit.ac.in"
                          required
                          className="bg-background/50"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          required
                          className="bg-background/50"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="registrationNumber">Registration Number *</Label>
                        <Input
                          id="registrationNumber"
                          name="registrationNumber"
                          value={formData.registrationNumber}
                          onChange={handleChange}
                          placeholder="21BCE0000"
                          required
                          className="bg-background/50"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="branch">Branch *</Label>
                        <Input
                          id="branch"
                          name="branch"
                          value={formData.branch}
                          onChange={handleChange}
                          placeholder="e.g., Computer Science"
                          required
                          className="bg-background/50"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="year">Year of Study *</Label>
                        <select
                          id="year"
                          name="year"
                          value={formData.year}
                          onChange={handleChange as any}
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Select Year</option>
                          <option value="1">1st Year</option>
                          <option value="2">2nd Year</option>
                          <option value="3">3rd Year</option>
                          <option value="4">4th Year</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Application Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary">Application Details</h3>

                    <div className="space-y-2">
                      <Label htmlFor="role">Preferred Role *</Label>
                      <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange as any}
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">Select Role</option>
                        <option value="volunteer">General Volunteer</option>
                        <option value="events">Events Team</option>
                        <option value="social-media">Social Media Team</option>
                        <option value="content">Content Creation</option>
                        <option value="technical">Technical Support</option>
                        <option value="photography">Photography & Documentation</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Relevant Experience</Label>
                      <Textarea
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        placeholder="Tell us about any relevant experience or skills you have..."
                        rows={4}
                        className="bg-background/50 resize-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="motivation">Why do you want to join? *</Label>
                      <Textarea
                        id="motivation"
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleChange}
                        placeholder="Share your motivation for joining our fitness club..."
                        rows={4}
                        required
                        className="bg-background/50 resize-none"
                      />
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full glow-effect" disabled={isLoading}>
                    {isLoading ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
