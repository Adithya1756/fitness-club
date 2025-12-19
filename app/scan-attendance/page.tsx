"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { QrCode, UserCheck, Clock, Calendar, Users } from "lucide-react"

export default function ScanAttendancePage() {
  const [isScanning, setIsScanning] = useState(false)
  const [scannedData, setScannedData] = useState<any>(null)

  // Mock attendance data
  const mockAttendance = [
    {
      name: "Adithya Kumar",
      regNumber: "21BCE1756",
      event: "1 Rep Max Bench Press Challenge",
      time: "10:45 AM",
      status: "Present",
    },
    {
      name: "Rahul Sharma",
      regNumber: "21BCE2301",
      event: "1 Rep Max Bench Press Challenge",
      time: "10:42 AM",
      status: "Present",
    },
    {
      name: "Priya Singh",
      regNumber: "21BCE1523",
      event: "Push-up Consistency Challenge",
      time: "10:38 AM",
      status: "Present",
    },
    {
      name: "Arjun Patel",
      regNumber: "21BCE2145",
      event: "1 Rep Max Bench Press Challenge",
      time: "10:35 AM",
      status: "Present",
    },
  ]

  const handleScanClick = () => {
    setIsScanning(true)
    // Simulate QR scan
    setTimeout(() => {
      setScannedData({
        name: "Vikram Reddy",
        regNumber: "21BCE9999",
        event: "1 Rep Max Bench Press Challenge",
        timestamp: new Date().toLocaleString(),
      })
      setIsScanning(false)
    }, 2000)
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <QrCode className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              Scan <span className="text-primary">Attendance</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Scan student QR codes to mark attendance for events
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl" style={{ fontFamily: "var(--font-poppins)" }}>
                  QR Scanner
                </CardTitle>
                <CardDescription>Scan student QR codes for attendance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-square bg-background/50 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                  {isScanning ? (
                    <div className="text-center space-y-4">
                      <div className="animate-pulse">
                        <QrCode className="h-24 w-24 text-primary mx-auto" />
                      </div>
                      <p className="text-muted-foreground">Scanning QR Code...</p>
                    </div>
                  ) : scannedData ? (
                    <div className="text-center space-y-4 p-6">
                      <UserCheck className="h-16 w-16 text-primary mx-auto" />
                      <div className="space-y-2">
                        <p className="font-bold text-xl">{scannedData.name}</p>
                        <p className="text-muted-foreground">{scannedData.regNumber}</p>
                        <Badge className="bg-primary/20 text-primary border-primary/30">Attendance Marked</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{scannedData.timestamp}</p>
                    </div>
                  ) : (
                    <div className="text-center space-y-4">
                      <QrCode className="h-24 w-24 text-muted-foreground mx-auto" />
                      <p className="text-muted-foreground">Ready to scan</p>
                    </div>
                  )}
                </div>

                <Button onClick={handleScanClick} className="w-full glow-effect" size="lg" disabled={isScanning}>
                  {isScanning ? "Scanning..." : scannedData ? "Scan Next" : "Start Scanning"}
                </Button>

                {scannedData && (
                  <Button onClick={() => setScannedData(null)} variant="outline" className="w-full">
                    Clear
                  </Button>
                )}
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl" style={{ fontFamily: "var(--font-poppins)" }}>
                  Today's Attendance
                </CardTitle>
                <CardDescription>Real-time attendance tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-[500px] overflow-y-auto">
                  {mockAttendance.map((entry, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border"
                    >
                      <div className="space-y-1">
                        <p className="font-semibold">{entry.name}</p>
                        <p className="text-sm text-muted-foreground">{entry.regNumber}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {entry.time}
                        </div>
                      </div>
                      <Badge className="bg-primary/20 text-primary border-primary/30">{entry.status}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl font-black" style={{ fontFamily: "var(--font-poppins)" }}>
                      {mockAttendance.length}
                    </p>
                    <p className="text-sm text-muted-foreground">Total Scans Today</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl font-black" style={{ fontFamily: "var(--font-poppins)" }}>
                      3
                    </p>
                    <p className="text-sm text-muted-foreground">Active Events</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <UserCheck className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl font-black" style={{ fontFamily: "var(--font-poppins)" }}>
                      98%
                    </p>
                    <p className="text-sm text-muted-foreground">Attendance Rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
