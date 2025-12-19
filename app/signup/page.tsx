"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dumbbell } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { signup } from "@/lib/actions/auth"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const [studentName, setStudentName] = useState("")
  const [studentEmail, setStudentEmail] = useState("")
  const [studentPassword, setStudentPassword] = useState("")
  const [studentRegNo, setStudentRegNo] = useState("")
  const [adminName, setAdminName] = useState("")
  const [adminEmail, setAdminEmail] = useState("")
  const [adminPassword, setAdminPassword] = useState("")
  const [adminCode, setAdminCode] = useState("")

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleStudentSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData()
    formData.append("fullName", studentName)
    formData.append("email", studentEmail)
    formData.append("password", studentPassword)
    formData.append("registrationNumber", studentRegNo)
    formData.append("role", "student")

    const result = await signup(formData)

    if (result.error) {
      toast.error("Signup Failed", {
        description: result.error,
      })
    } else {
      toast.success("Account Created!", {
        description: "Welcome to VIT Fitness Club. Redirecting to login...",
      })
      setTimeout(() => router.push("/login"), 1500)
    }
    setIsLoading(false)
  }

  const handleAdminSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData()
    formData.append("fullName", adminName)
    formData.append("email", adminEmail)
    formData.append("password", adminPassword)
    formData.append("registrationNumber", adminCode)
    formData.append("role", "admin")

    const result = await signup(formData)

    if (result.error) {
      toast.error("Signup Failed", {
        description: result.error,
      })
    } else {
      toast.success("Admin Account Created!", {
        description: "Your admin account is ready. Redirecting to login...",
      })
      setTimeout(() => router.push("/login"), 1500)
    }
    setIsLoading(false)
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center py-24 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Dumbbell className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl font-black mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
              Join the Club
            </h1>
            <p className="text-muted-foreground">Create your account and start your fitness journey</p>
          </div>

          <Tabs defaultValue="student" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="student">Student Signup</TabsTrigger>
              <TabsTrigger value="admin">Admin Signup</TabsTrigger>
            </TabsList>

            <TabsContent value="student">
              <Card className="bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle style={{ fontFamily: "var(--font-poppins)" }}>Student Registration</CardTitle>
                  <CardDescription>Join the VIT Fitness Club community</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleStudentSignup} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="student-name">Full Name</Label>
                      <Input
                        id="student-name"
                        type="text"
                        placeholder="Arjun Kumar"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        className="bg-background"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="student-regno">Registration Number</Label>
                      <Input
                        id="student-regno"
                        type="text"
                        placeholder="21BCE1234"
                        value={studentRegNo}
                        onChange={(e) => setStudentRegNo(e.target.value)}
                        className="bg-background"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="student-email">VIT Email</Label>
                      <Input
                        id="student-email"
                        type="email"
                        placeholder="your.email@vitstudent.ac.in"
                        value={studentEmail}
                        onChange={(e) => setStudentEmail(e.target.value)}
                        className="bg-background"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="student-password">Password</Label>
                      <Input
                        id="student-password"
                        type="password"
                        value={studentPassword}
                        onChange={(e) => setStudentPassword(e.target.value)}
                        className="bg-background"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full glow-effect" disabled={isLoading}>
                      {isLoading ? "Creating Account..." : "Create Account"}
                    </Button>
                    <div className="text-center text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <Link href="/login" className="text-primary hover:underline font-semibold">
                        Login
                      </Link>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="admin">
              <Card className="bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle style={{ fontFamily: "var(--font-poppins)" }}>Admin Registration</CardTitle>
                  <CardDescription>Register as a club administrator</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAdminSignup} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="admin-name">Full Name</Label>
                      <Input
                        id="admin-name"
                        type="text"
                        placeholder="Priya Menon"
                        value={adminName}
                        onChange={(e) => setAdminName(e.target.value)}
                        className="bg-background"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="admin-email">Admin Email</Label>
                      <Input
                        id="admin-email"
                        type="email"
                        placeholder="admin@vitfitnessclub.com"
                        value={adminEmail}
                        onChange={(e) => setAdminEmail(e.target.value)}
                        className="bg-background"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="admin-code">Admin Access Code</Label>
                      <Input
                        id="admin-code"
                        type="text"
                        placeholder="Enter admin code"
                        value={adminCode}
                        onChange={(e) => setAdminCode(e.target.value)}
                        className="bg-background"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="admin-password">Password</Label>
                      <Input
                        id="admin-password"
                        type="password"
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                        className="bg-background"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90" disabled={isLoading}>
                      {isLoading ? "Creating Account..." : "Create Admin Account"}
                    </Button>
                    <div className="text-center text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <Link href="/login" className="text-primary hover:underline font-semibold">
                        Login
                      </Link>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </main>
  )
}
