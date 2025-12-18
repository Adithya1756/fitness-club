import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Trophy, ImageIcon, Settings } from "lucide-react"

export default function AdminPortalPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
              Admin <span className="text-primary">Dashboard</span>
            </h1>
            <p className="text-muted-foreground">Manage club operations and events</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-card/50 backdrop-blur hover:border-primary/50 transition-all">
              <CardHeader>
                <Calendar className="h-8 w-8 text-primary mb-2" />
                <CardTitle style={{ fontFamily: "var(--font-poppins)" }}>Manage Events</CardTitle>
                <CardDescription>Create, edit, and manage club events</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Open Event Manager</Button>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur hover:border-secondary/50 transition-all">
              <CardHeader>
                <Trophy className="h-8 w-8 text-secondary mb-2" />
                <CardTitle style={{ fontFamily: "var(--font-poppins)" }}>Update Leaderboard</CardTitle>
                <CardDescription>Manage points and rankings</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full">
                  Open Leaderboard
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur hover:border-primary/50 transition-all">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle style={{ fontFamily: "var(--font-poppins)" }}>Approve Registrations</CardTitle>
                <CardDescription>Review and approve event sign-ups</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">View Registrations</Button>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur hover:border-secondary/50 transition-all">
              <CardHeader>
                <ImageIcon className="h-8 w-8 text-secondary mb-2" />
                <CardTitle style={{ fontFamily: "var(--font-poppins)" }}>Upload Gallery Media</CardTitle>
                <CardDescription>Add photos from recent events</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full">
                  Upload Photos
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur hover:border-primary/50 transition-all">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle style={{ fontFamily: "var(--font-poppins)" }}>Member Management</CardTitle>
                <CardDescription>Manage team and volunteers</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Manage Members</Button>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur hover:border-secondary/50 transition-all">
              <CardHeader>
                <Settings className="h-8 w-8 text-secondary mb-2" />
                <CardTitle style={{ fontFamily: "var(--font-poppins)" }}>Settings</CardTitle>
                <CardDescription>Configure club settings</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full">
                  Open Settings
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12 max-w-6xl mx-auto bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle style={{ fontFamily: "var(--font-poppins)" }}>Quick Stats</CardTitle>
              <CardDescription>Overview of club metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-primary mb-1" style={{ fontFamily: "var(--font-poppins)" }}>
                    24
                  </div>
                  <div className="text-sm text-muted-foreground">Total Events</div>
                </div>
                <div className="text-center">
                  <div
                    className="text-3xl font-black text-secondary mb-1"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    1,450
                  </div>
                  <div className="text-sm text-muted-foreground">Participants</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-primary mb-1" style={{ fontFamily: "var(--font-poppins)" }}>
                    42
                  </div>
                  <div className="text-sm text-muted-foreground">Pending Approvals</div>
                </div>
                <div className="text-center">
                  <div
                    className="text-3xl font-black text-secondary mb-1"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    5
                  </div>
                  <div className="text-sm text-muted-foreground">Upcoming Events</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </main>
  )
}
