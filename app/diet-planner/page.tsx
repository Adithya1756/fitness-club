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
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Utensils, Sparkles, Target, Apple, TrendingUp, Clock } from "lucide-react"

export default function DietPlannerPage() {
  const [formData, setFormData] = useState({
    goal: "",
    activityLevel: "",
    dietType: "",
    weight: "",
    height: "",
    allergies: "",
  })
  const [isGenerating, setIsGenerating] = useState(false)
  const [dietPlan, setDietPlan] = useState<any>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)

    // Simulate AI generation
    setTimeout(() => {
      setDietPlan({
        dailyCalories: 2400,
        proteinTarget: 150,
        carbsTarget: 280,
        fatsTarget: 65,
        meals: [
          {
            name: "Breakfast",
            time: "7:00 AM - 9:00 AM",
            items: [
              { name: "Idli (4 pcs)", calories: 240, protein: 8, carbs: 48, fats: 2 },
              { name: "Sambar (1 bowl)", calories: 120, protein: 4, carbs: 18, fats: 4 },
              { name: "Boiled Eggs (2)", calories: 140, protein: 12, carbs: 1, fats: 10 },
              { name: "Banana", calories: 105, protein: 1, carbs: 27, fats: 0 },
            ],
            totalCalories: 605,
            totalProtein: 25,
          },
          {
            name: "Mid-Morning Snack",
            time: "10:30 AM",
            items: [
              { name: "Mixed Nuts (30g)", calories: 180, protein: 6, carbs: 6, fats: 16 },
              { name: "Apple", calories: 95, protein: 0, carbs: 25, fats: 0 },
            ],
            totalCalories: 275,
            totalProtein: 6,
          },
          {
            name: "Lunch",
            time: "12:30 PM - 2:00 PM",
            items: [
              { name: "Brown Rice (2 cups)", calories: 440, protein: 10, carbs: 92, fats: 4 },
              { name: "Chicken Curry (200g)", calories: 280, protein: 45, carbs: 8, fats: 12 },
              { name: "Dal Tadka (1 bowl)", calories: 150, protein: 8, carbs: 20, fats: 5 },
              { name: "Mixed Veg Salad", calories: 50, protein: 2, carbs: 10, fats: 1 },
              { name: "Curd (1 bowl)", calories: 80, protein: 6, carbs: 8, fats: 3 },
            ],
            totalCalories: 1000,
            totalProtein: 71,
          },
          {
            name: "Evening Snack",
            time: "5:00 PM",
            items: [
              { name: "Protein Shake", calories: 200, protein: 30, carbs: 10, fats: 4 },
              { name: "Multigrain Biscuits (4)", calories: 120, protein: 3, carbs: 18, fats: 4 },
            ],
            totalCalories: 320,
            totalProtein: 33,
          },
          {
            name: "Dinner",
            time: "7:30 PM - 9:00 PM",
            items: [
              { name: "Chapati (3)", calories: 240, protein: 9, carbs: 45, fats: 3 },
              { name: "Paneer Masala (150g)", calories: 250, protein: 18, carbs: 12, fats: 16 },
              { name: "Green Veg (1 bowl)", calories: 80, protein: 3, carbs: 12, fats: 2 },
              { name: "Raita (1 bowl)", calories: 70, protein: 4, carbs: 6, fats: 3 },
            ],
            totalCalories: 640,
            totalProtein: 34,
          },
        ],
        tips: [
          "Drink at least 3-4 liters of water throughout the day",
          "Have your post-workout meal within 30-45 minutes of training",
          "Keep a gap of at least 2-3 hours between meals",
          "Avoid processed foods and sugary drinks from the canteen",
        ],
      })
      setIsGenerating(false)
    }, 2500)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Sparkles className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              AI Diet <span className="text-primary">Planner</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get personalized meal plans based on VIT hostel canteen menu
            </p>
          </div>

          {!dietPlan ? (
            <Card className="max-w-2xl mx-auto bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl" style={{ fontFamily: "var(--font-poppins)" }}>
                  Tell us about your goals
                </CardTitle>
                <CardDescription>We'll create a personalized diet plan from the canteen menu</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="goal">Fitness Goal</Label>
                      <Select value={formData.goal} onValueChange={(value) => handleInputChange("goal", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your goal" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                          <SelectItem value="weight-loss">Weight Loss</SelectItem>
                          <SelectItem value="maintenance">Maintenance</SelectItem>
                          <SelectItem value="athletic">Athletic Performance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="activityLevel">Activity Level</Label>
                      <Select
                        value={formData.activityLevel}
                        onValueChange={(value) => handleInputChange("activityLevel", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select activity level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sedentary">Sedentary (little exercise)</SelectItem>
                          <SelectItem value="light">Light (1-3 days/week)</SelectItem>
                          <SelectItem value="moderate">Moderate (3-5 days/week)</SelectItem>
                          <SelectItem value="very-active">Very Active (6-7 days/week)</SelectItem>
                          <SelectItem value="athlete">Athlete (2x per day)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="weight">Weight (kg)</Label>
                      <Input
                        id="weight"
                        type="number"
                        placeholder="70"
                        value={formData.weight}
                        onChange={(e) => handleInputChange("weight", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="height">Height (cm)</Label>
                      <Input
                        id="height"
                        type="number"
                        placeholder="175"
                        value={formData.height}
                        onChange={(e) => handleInputChange("height", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dietType">Diet Preference</Label>
                    <Select value={formData.dietType} onValueChange={(value) => handleInputChange("dietType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select diet type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vegetarian">Vegetarian</SelectItem>
                        <SelectItem value="non-vegetarian">Non-Vegetarian</SelectItem>
                        <SelectItem value="vegan">Vegan</SelectItem>
                        <SelectItem value="eggetarian">Eggetarian</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="allergies">Allergies or Restrictions (Optional)</Label>
                    <Textarea
                      id="allergies"
                      placeholder="e.g., lactose intolerant, gluten sensitivity..."
                      value={formData.allergies}
                      onChange={(e) => handleInputChange("allergies", e.target.value)}
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full glow-effect" size="lg" disabled={isGenerating}>
                    {isGenerating ? (
                      <>
                        <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                        Generating Your Plan...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Generate AI Diet Plan
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              <div className="grid md:grid-cols-4 gap-4">
                <Card className="bg-card/50 backdrop-blur">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-3xl font-black" style={{ fontFamily: "var(--font-poppins)" }}>
                        {dietPlan.dailyCalories}
                      </p>
                      <p className="text-sm text-muted-foreground">Daily Calories</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <Apple className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-3xl font-black" style={{ fontFamily: "var(--font-poppins)" }}>
                        {dietPlan.proteinTarget}g
                      </p>
                      <p className="text-sm text-muted-foreground">Protein</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-3xl font-black" style={{ fontFamily: "var(--font-poppins)" }}>
                        {dietPlan.carbsTarget}g
                      </p>
                      <p className="text-sm text-muted-foreground">Carbs</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <Utensils className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-3xl font-black" style={{ fontFamily: "var(--font-poppins)" }}>
                        {dietPlan.fatsTarget}g
                      </p>
                      <p className="text-sm text-muted-foreground">Fats</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-2xl" style={{ fontFamily: "var(--font-poppins)" }}>
                    Your Personalized Meal Plan
                  </CardTitle>
                  <CardDescription>Based on VIT hostel canteen menu</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {dietPlan.meals.map((meal: any, index: number) => (
                    <div key={index} className="p-4 bg-background/50 rounded-lg border border-border space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-poppins)" }}>
                            {meal.name}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <Clock className="h-4 w-4" />
                            {meal.time}
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-primary/20 text-primary border-primary/30">
                            {meal.totalCalories} cal
                          </Badge>
                          <p className="text-sm text-muted-foreground mt-1">{meal.totalProtein}g protein</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {meal.items.map((item: any, itemIndex: number) => (
                          <div
                            key={itemIndex}
                            className="flex items-center justify-between p-3 bg-card/50 rounded border border-border/50"
                          >
                            <span className="font-medium">{item.name}</span>
                            <div className="flex gap-4 text-sm text-muted-foreground">
                              <span>{item.calories} cal</span>
                              <span>P: {item.protein}g</span>
                              <span>C: {item.carbs}g</span>
                              <span>F: {item.fats}g</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-primary/30">
                <CardHeader>
                  <CardTitle className="text-xl" style={{ fontFamily: "var(--font-poppins)" }}>
                    Pro Tips for Success
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {dietPlan.tips.map((tip: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <div className="flex gap-3">
                <Button onClick={() => window.print()} className="flex-1 glow-effect">
                  Download Plan
                </Button>
                <Button onClick={() => setDietPlan(null)} variant="outline" className="flex-1">
                  Generate New Plan
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
