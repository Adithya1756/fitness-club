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
import { login } from "@/lib/actions/auth"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [studentEmail, setStudentEmail] = useState("")
  const [studentPassword, setStudentPassword] = useState("")
  const [adminEmail, setAdminEmail] = useState("")
  const [adminPassword, setAdminPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleStudentLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData()
    formData.append("email", studentEmail)
    formData.append("password", studentPassword)

    try {
      await login(formData)
      // login() will redirect, but we can show a toast first
      toast.success("Welcome Back!", {
        description: "Logging you in...",
      })
    } catch (error: any) {
      toast.error("Login Failed", {
        description: error.message || "Invalid credentials",
      })
      setIsLoading(false)
    }
  }

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData()
    formData.append("email", adminEmail)
    formData.append("password", adminPassword)

    try {
      await login(formData)
      toast.success("Admin Access Granted", {
        description: "Logging you in...",
      })
    } catch (error: any) {
      toast.error("Login Failed", {
        description: error.message || "Invalid credentials",
      })
      setIsLoading(false)
    }
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
              Welcome Back
            </h1>
            <p className="text-muted-foreground">Login to track your fitness journey</p>
          </div>

          <Tabs defaultValue="student" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="student">Student Login</TabsTrigger>
              <TabsTrigger value="admin">Admin Login</TabsTrigger>
            </TabsList>

            <TabsContent value="student">
              <Card className="bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle style={{ fontFamily: "var(--font-poppins)" }}>Student Portal</CardTitle>
                  <CardDescription>Access your dashboard and events</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleStudentLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="student-email">Email</Label>
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
                      {isLoading ? "Signing In..." : "Sign In"}
                    </Button>
                    <div className="text-center text-sm text-muted-foreground">
                      Don't have an account?{" "}
                      <Link href="/" className="text-primary hover:underline font-semibold">
                        Sign up
                      </Link>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="admin">
              <Card className="bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle style={{ fontFamily: "var(--font-poppins)" }}>Admin Portal</CardTitle>
                  <CardDescription>Manage events and club operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAdminLogin} className="space-y-4">
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
                      {isLoading ? "Signing In..." : "Admin Sign In"}
                    </Button>
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
