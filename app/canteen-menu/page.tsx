"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChefHat, Leaf, Drumstick, Flame, Activity } from "lucide-react"

export default function CanteenMenuPage() {
  const [selectedDay, setSelectedDay] = useState("monday")

  const weeklyMenu = {
    monday: {
      breakfast: [
        { name: "Idli (4 pcs)", type: "veg", calories: 240, protein: 8, carbs: 48, fats: 2, available: true },
        { name: "Sambar", type: "veg", calories: 120, protein: 4, carbs: 18, fats: 4, available: true },
        { name: "Coconut Chutney", type: "veg", calories: 80, protein: 1, carbs: 6, fats: 6, available: true },
        { name: "Boiled Eggs (2)", type: "egg", calories: 140, protein: 12, carbs: 1, fats: 10, available: true },
        { name: "Bread Toast (4)", type: "veg", calories: 280, protein: 8, carbs: 52, fats: 4, available: true },
      ],
      lunch: [
        { name: "White Rice", type: "veg", calories: 220, protein: 5, carbs: 46, fats: 2, available: true },
        { name: "Chicken Curry", type: "non-veg", calories: 280, protein: 45, carbs: 8, fats: 12, available: true },
        { name: "Dal Tadka", type: "veg", calories: 150, protein: 8, carbs: 20, fats: 5, available: true },
        { name: "Chapati (3)", type: "veg", calories: 240, protein: 9, carbs: 45, fats: 3, available: true },
        { name: "Mixed Vegetables", type: "veg", calories: 100, protein: 3, carbs: 15, fats: 3, available: true },
        { name: "Curd", type: "veg", calories: 80, protein: 6, carbs: 8, fats: 3, available: true },
      ],
      snacks: [
        { name: "Samosa (2)", type: "veg", calories: 260, protein: 4, carbs: 32, fats: 12, available: true },
        { name: "Tea/Coffee", type: "veg", calories: 40, protein: 1, carbs: 8, fats: 1, available: true },
        { name: "Banana", type: "veg", calories: 105, protein: 1, carbs: 27, fats: 0, available: true },
      ],
      dinner: [
        { name: "Chapati (4)", type: "veg", calories: 320, protein: 12, carbs: 60, fats: 4, available: true },
        { name: "Paneer Butter Masala", type: "veg", calories: 250, protein: 18, carbs: 12, fats: 16, available: true },
        { name: "Rajma Curry", type: "veg", calories: 180, protein: 10, carbs: 28, fats: 4, available: true },
        { name: "Jeera Rice", type: "veg", calories: 240, protein: 5, carbs: 48, fats: 3, available: true },
        { name: "Raita", type: "veg", calories: 70, protein: 4, carbs: 6, fats: 3, available: true },
      ],
    },
    tuesday: {
      breakfast: [
        { name: "Poha", type: "veg", calories: 250, protein: 6, carbs: 45, fats: 6, available: true },
        { name: "Upma", type: "veg", calories: 200, protein: 5, carbs: 35, fats: 5, available: true },
        { name: "Boiled Eggs (2)", type: "egg", calories: 140, protein: 12, carbs: 1, fats: 10, available: true },
        { name: "Banana", type: "veg", calories: 105, protein: 1, carbs: 27, fats: 0, available: true },
      ],
      lunch: [
        { name: "Brown Rice", type: "veg", calories: 220, protein: 5, carbs: 46, fats: 2, available: true },
        { name: "Fish Fry", type: "non-veg", calories: 220, protein: 30, carbs: 5, fats: 10, available: true },
        { name: "Moong Dal", type: "veg", calories: 130, protein: 7, carbs: 18, fats: 4, available: true },
        { name: "Bhindi Masala", type: "veg", calories: 120, protein: 3, carbs: 18, fats: 5, available: true },
        { name: "Chapati (3)", type: "veg", calories: 240, protein: 9, carbs: 45, fats: 3, available: true },
      ],
      snacks: [
        { name: "Vada Pav", type: "veg", calories: 290, protein: 5, carbs: 40, fats: 13, available: true },
        { name: "Tea/Coffee", type: "veg", calories: 40, protein: 1, carbs: 8, fats: 1, available: true },
      ],
      dinner: [
        { name: "Chapati (4)", type: "veg", calories: 320, protein: 12, carbs: 60, fats: 4, available: true },
        { name: "Egg Curry (2 eggs)", type: "egg", calories: 220, protein: 14, carbs: 8, fats: 15, available: true },
        { name: "Aloo Gobi", type: "veg", calories: 150, protein: 3, carbs: 25, fats: 5, available: true },
        { name: "Dal Fry", type: "veg", calories: 140, protein: 7, carbs: 20, fats: 4, available: true },
      ],
    },
    wednesday: {
      breakfast: [
        { name: "Dosa (2)", type: "veg", calories: 280, protein: 6, carbs: 50, fats: 6, available: true },
        { name: "Potato Masala", type: "veg", calories: 150, protein: 3, carbs: 25, fats: 5, available: true },
        { name: "Coconut Chutney", type: "veg", calories: 80, protein: 1, carbs: 6, fats: 6, available: true },
        { name: "Omelette (2 eggs)", type: "egg", calories: 180, protein: 14, carbs: 2, fats: 13, available: true },
      ],
      lunch: [
        { name: "White Rice", type: "veg", calories: 220, protein: 5, carbs: 46, fats: 2, available: true },
        { name: "Mutton Curry", type: "non-veg", calories: 310, protein: 35, carbs: 6, fats: 18, available: true },
        { name: "Toor Dal", type: "veg", calories: 140, protein: 8, carbs: 20, fats: 4, available: true },
        { name: "Cabbage Poriyal", type: "veg", calories: 90, protein: 2, carbs: 12, fats: 4, available: true },
        { name: "Chapati (3)", type: "veg", calories: 240, protein: 9, carbs: 45, fats: 3, available: true },
        { name: "Pickle", type: "veg", calories: 30, protein: 0, carbs: 5, fats: 1, available: true },
      ],
      snacks: [
        { name: "Pakora", type: "veg", calories: 220, protein: 4, carbs: 28, fats: 10, available: true },
        { name: "Tea/Coffee", type: "veg", calories: 40, protein: 1, carbs: 8, fats: 1, available: true },
      ],
      dinner: [
        { name: "Pulao", type: "veg", calories: 280, protein: 6, carbs: 52, fats: 6, available: true },
        { name: "Chicken 65", type: "non-veg", calories: 260, protein: 28, carbs: 12, fats: 12, available: true },
        { name: "Kadai Paneer", type: "veg", calories: 240, protein: 16, carbs: 10, fats: 15, available: true },
        { name: "Mixed Veg Raita", type: "veg", calories: 80, protein: 4, carbs: 8, fats: 4, available: true },
      ],
    },
  }

  const currentMenu = weeklyMenu[selectedDay as keyof typeof weeklyMenu] || weeklyMenu.monday

  const getMealIcon = (type: string) => {
    switch (type) {
      case "veg":
        return <Leaf className="h-4 w-4 text-green-500" />
      case "non-veg":
        return <Drumstick className="h-4 w-4 text-red-500" />
      case "egg":
        return <div className="h-4 w-4 rounded-full bg-yellow-500" />
      default:
        return null
    }
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <ChefHat className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              Canteen <span className="text-primary">Menu</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Daily hostel canteen menu with complete nutritional information
            </p>
          </div>

          <Card className="bg-card/50 backdrop-blur mb-8">
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2 justify-center">
                {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map((day) => (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                      selectedDay === day
                        ? "bg-primary text-primary-foreground"
                        : "bg-background/50 hover:bg-background"
                    }`}
                  >
                    {day.charAt(0).toUpperCase() + day.slice(1)}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="breakfast" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
              <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
              <TabsTrigger value="lunch">Lunch</TabsTrigger>
              <TabsTrigger value="snacks">Snacks</TabsTrigger>
              <TabsTrigger value="dinner">Dinner</TabsTrigger>
            </TabsList>

            <TabsContent value="breakfast">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentMenu.breakfast.map((item, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur hover:border-primary/50 transition-all">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl">{item.name}</CardTitle>
                        {getMealIcon(item.type)}
                      </div>
                      <Badge className="bg-primary/20 text-primary border-primary/30 w-fit">
                        <Flame className="h-3 w-3 mr-1" />
                        {item.calories} cal
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="p-2 bg-background/50 rounded">
                          <p className="text-sm text-muted-foreground">Protein</p>
                          <p className="text-lg font-bold text-primary">{item.protein}g</p>
                        </div>
                        <div className="p-2 bg-background/50 rounded">
                          <p className="text-sm text-muted-foreground">Carbs</p>
                          <p className="text-lg font-bold text-primary">{item.carbs}g</p>
                        </div>
                        <div className="p-2 bg-background/50 rounded">
                          <p className="text-sm text-muted-foreground">Fats</p>
                          <p className="text-lg font-bold text-primary">{item.fats}g</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="lunch">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentMenu.lunch.map((item, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur hover:border-primary/50 transition-all">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl">{item.name}</CardTitle>
                        {getMealIcon(item.type)}
                      </div>
                      <Badge className="bg-primary/20 text-primary border-primary/30 w-fit">
                        <Flame className="h-3 w-3 mr-1" />
                        {item.calories} cal
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="p-2 bg-background/50 rounded">
                          <p className="text-sm text-muted-foreground">Protein</p>
                          <p className="text-lg font-bold text-primary">{item.protein}g</p>
                        </div>
                        <div className="p-2 bg-background/50 rounded">
                          <p className="text-sm text-muted-foreground">Carbs</p>
                          <p className="text-lg font-bold text-primary">{item.carbs}g</p>
                        </div>
                        <div className="p-2 bg-background/50 rounded">
                          <p className="text-sm text-muted-foreground">Fats</p>
                          <p className="text-lg font-bold text-primary">{item.fats}g</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="snacks">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentMenu.snacks.map((item, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur hover:border-primary/50 transition-all">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl">{item.name}</CardTitle>
                        {getMealIcon(item.type)}
                      </div>
                      <Badge className="bg-primary/20 text-primary border-primary/30 w-fit">
                        <Flame className="h-3 w-3 mr-1" />
                        {item.calories} cal
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="p-2 bg-background/50 rounded">
                          <p className="text-sm text-muted-foreground">Protein</p>
                          <p className="text-lg font-bold text-primary">{item.protein}g</p>
                        </div>
                        <div className="p-2 bg-background/50 rounded">
                          <p className="text-sm text-muted-foreground">Carbs</p>
                          <p className="text-lg font-bold text-primary">{item.carbs}g</p>
                        </div>
                        <div className="p-2 bg-background/50 rounded">
                          <p className="text-sm text-muted-foreground">Fats</p>
                          <p className="text-lg font-bold text-primary">{item.fats}g</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="dinner">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentMenu.dinner.map((item, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur hover:border-primary/50 transition-all">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl">{item.name}</CardTitle>
                        {getMealIcon(item.type)}
                      </div>
                      <Badge className="bg-primary/20 text-primary border-primary/30 w-fit">
                        <Flame className="h-3 w-3 mr-1" />
                        {item.calories} cal
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="p-2 bg-background/50 rounded">
                          <p className="text-sm text-muted-foreground">Protein</p>
                          <p className="text-lg font-bold text-primary">{item.protein}g</p>
                        </div>
                        <div className="p-2 bg-background/50 rounded">
                          <p className="text-sm text-muted-foreground">Carbs</p>
                          <p className="text-lg font-bold text-primary">{item.carbs}g</p>
                        </div>
                        <div className="p-2 bg-background/50 rounded">
                          <p className="text-sm text-muted-foreground">Fats</p>
                          <p className="text-lg font-bold text-primary">{item.fats}g</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <Card className="mt-8 bg-card/50 backdrop-blur border-primary/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Dietary Legend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-green-500" />
                  <span>Vegetarian</span>
                </div>
                <div className="flex items-center gap-2">
                  <Drumstick className="h-5 w-5 text-red-500" />
                  <span>Non-Vegetarian</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-yellow-500" />
                  <span>Contains Egg</span>
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
